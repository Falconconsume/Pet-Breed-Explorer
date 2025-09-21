"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import fetchData from "../lib/axios";

interface IBreed {
  id: number;
  name: string;
  image: {
    url: string;
  };
}

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);

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
      setDogs(dogs);
      setCats(cats);
    })();
  }, []);

  const mappedResult = useMemo(
    () =>
      [...cats, ...dogs].map((item: IBreed) => ({
        id: item.id,
        name: item.name,
        imageSrc: item.image?.url,
      })),
    [cats, dogs],
  );

  if (!mappedResult.length) {
    return (
      <div className="flex justify-center items-center h-screen animate-spin">
        <Loader height={200} width={200} />
      </div>
    );
  }

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {mappedResult?.map((animal) => (
        <Card className="min-w-1/5 cursor-pointer" key={animal.id}>
          <Link href={`/bread/${animal.id}`}>
            <CardHeader>
              <CardTitle>{animal.name}</CardTitle>
              {animal.imageSrc && (
                <CardContent>
                  <div className="relative w-full h-48 overflow-hidden rounded">
                    {animal.imageSrc ? (
                      <Image
                        fill
                        src={animal.imageSrc}
                        alt={"Here should be an image"}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    ) : (
                      <p>Image wasn't found</p>
                    )}
                  </div>
                </CardContent>
              )}
            </CardHeader>
          </Link>
        </Card>
      ))}
    </div>
  );
}
