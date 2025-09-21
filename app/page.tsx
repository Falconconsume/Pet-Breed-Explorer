"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import fetchData from "../lib/axios";
import { AutoComplete } from "@/components/ui/autocomplete";

interface IBreed {
  id: number;
  name: string;
  image: {
    url: string;
  };
}

interface IBreedResult {
  id: number;
  name: string;
  imageSrc: string;
}

export default function Home() {
  const [breeds, setBreeds] = useState<IBreedResult[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [breedsForSearch, setBreedsForSearch] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  useEffect(() => {
    (async () => {
      const [{ data: dogs }, { data: cats }] = await Promise.all([
        fetchData(
          `${process.env.NEXT_PUBLIC_DOG_API}/breeds` || "",
          process.env.NEXT_PUBLIC_DOG_KEY || "",
        ),
        fetchData(
          `${process.env.NEXT_PUBLIC_CAT_API}/breeds`,
          process.env.NEXT_PUBLIC_CAT_KEY || "",
        ),
      ]);

      const result = [...cats, ...dogs].map((item: IBreed) => ({
        id: item.id,
        name: item.name,
        imageSrc: item.image?.url,
      }));

      setBreeds(result);
      setBreedsForSearch(
        result.map(({ id, name }) => ({ value: String(id), label: name })),
      );
    })();
  }, []);

  const breedsForSearchFiltered = useMemo(
    () =>
      breedsForSearch.length
        ? breedsForSearch.filter((breed) =>
            breed.label.toLowerCase().includes(searchValue.toLowerCase()),
          )
        : breedsForSearch,
    [searchValue, breedsForSearch],
  );

  const filteredBreeds = useMemo(
    () =>
      selectedValue
        ? breeds.filter((breed) => String(breed.id) === selectedValue)
        : breeds,
    [selectedValue, breeds],
  );

  if (!breeds.length) {
    return (
      <div className="flex justify-center items-center h-screen animate-spin">
        <Loader height={200} width={200} />
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-end w-full p-4">
        <AutoComplete
          selectedValue={selectedValue}
          onSelectedValueChange={setSelectedValue}
          searchValue={searchValue}
          onSearchValueChange={setSearchValue}
          items={breedsForSearchFiltered}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {filteredBreeds?.map((animal) => (
          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow"
            key={animal.id}
          >
            <Link href={`/bread/${animal.id}`}>
              <CardHeader>
                <CardTitle className="text-lg">{animal.name}</CardTitle>
                <CardContent>
                  <div className="relative w-full h-48 overflow-hidden rounded">
                    {animal.imageSrc ? (
                      <Image
                        fill
                        src={animal.imageSrc}
                        alt={"Here should be an image"}
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gray-100">
                        <p className="text-gray-500">No image</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
