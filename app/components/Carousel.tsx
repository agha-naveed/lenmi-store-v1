"use client";
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const images = [
  "https://www.hamzastore.pk/images/banners/62e90d4aa42f5.webp",
  "https://www.hamzastore.pk/images/banners/652d20b21c058.webp",
  "https://www.hamzastore.pk/images/banners/62e90d4aa4ffb.webp"
];

export default function CarouselWithImages() {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 4000 })]}
      className="w-full"
    >
      <CarouselContent className='w-[100vw]'>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1 home-carousel  w-[98.9vw]">
              <Card>
                <CardContent className="flex h-[300px] w-full aspect-square object-cover items-center justify-center !p-0">
                  <img 
                    src={image}
                    alt={`Image ${index + 1}`} 
                    className="object-cover w-[1500px] h-full rounded-lg" 
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
