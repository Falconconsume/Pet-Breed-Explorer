"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { IBreedImage } from "@/types/breed";

const Gallery = ({ images }: { images: IBreedImage[] }) => {
  return images.length > 0 ? (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="w-full h-1/2">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <div className="relative w-full h-48 overflow-hidden rounded">
                    <Image
                      fill
                      src={image.url}
                      alt={"Here should be an image"}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ) : (
    <Card>
      <CardContent className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">No gallery images available</p>
      </CardContent>
    </Card>
  );
};

export default Gallery;
