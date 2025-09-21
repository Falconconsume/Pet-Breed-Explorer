"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Globe, Calendar, Weight, Loader } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Gallery from "@/components/Gallery";

import { enviroment } from "@/lib/env";
import { IBreedData, IBreedImage } from "@/types/breed";
import fetchData, { getBreedGallery } from "@/lib/axios";
import HealthInformation from "@/components/MentalTraits";
import Characteristics from "@/components/Characteristics";
import MentalHealth from "@/components/MentalHealth";

const BreadPage = () => {
  const { id } = useParams();

  const [breed, setBread] = useState<IBreedData | null>(null);
  const [images, setImages] = useState<IBreedImage[]>([]);

  useEffect(() => {
    (async () => {
      const [cat, dog] = await Promise.allSettled([
        fetchData(`${enviroment.catsAPI}/breeds/${id}`, enviroment.catsKey),
        fetchData(`${enviroment.dogsAPI}/breeds/${id}`, enviroment.dogsKey),
      ]);

      if (cat.status === "fulfilled") {
        setBread(cat.value.data);
        const result = await getBreedGallery(
          enviroment.catsAPI,
          enviroment.catsKey,
          id as string,
          20,
        );
        setImages(result);
      } else if (dog.status === "fulfilled") {
        setBread(dog.value.data);
        const result = await getBreedGallery(
          enviroment.dogsAPI,
          enviroment.dogsKey,
          id as string,
          20,
        );
        setImages(result);
      }
    })();
  }, []);

  if (!breed || !images.length) {
    return (
      <div className="flex justify-center items-center h-screen animate-spin">
        <Loader height={200} width={200} />
      </div>
    );
  }

  return (
    <div className="container py-8 justify-center">
      <Card className="max-w-6xl mx-auto">
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Image
              width={250}
              height={250}
              src={images[0]?.url}
              objectFit={"contain"}
              alt="Here should be the image of the cat"
            />

            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <CardTitle className="text-3xl">{breed.name}</CardTitle>
                {breed.alt_names && (
                  <Badge variant="outline">{breed.alt_names}</Badge>
                )}
              </div>

              <CardDescription className="text-base">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    {breed.origin}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {breed.life_span} years
                  </span>
                  <span className="flex items-center gap-1">
                    <Weight className="h-4 w-4" />
                    {breed.weight.imperial} lbs ({breed.weight.metric} kg)
                  </span>
                </div>
              </CardDescription>

              <div className="flex flex-wrap gap-2 pt-2">
                {breed.temperament.split(", ").map((trait) => (
                  <Badge key={trait} variant="secondary">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="prose prose-sm max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {breed.description}
            </p>
          </div>

          <Separator />

          <Tabs defaultValue="characteristics" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4">
              <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
              <TabsTrigger value="personality">Personality</TabsTrigger>
              <TabsTrigger value="care">Care & Health</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="characteristics" className="space-y-6 mt-6">
              <Characteristics breed={breed} />
            </TabsContent>

            <TabsContent value="personality" className="space-y-6 mt-6">
              <MentalHealth breed={breed} />
            </TabsContent>

            <TabsContent value="care" className="space-y-6 mt-6">
              <HealthInformation breed={breed} />
            </TabsContent>

            <TabsContent value="gallery" className="mt-6">
              <Gallery images={images} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BreadPage;
