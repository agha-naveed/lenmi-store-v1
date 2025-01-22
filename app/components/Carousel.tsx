"use client";
import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import slide_1 from '@/images/slide_1.jpg'
import slide_2 from '@/images/slide_2.jpg'
import slide_3 from '@/images/slide_3.jpg'

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';


const images = [
  slide_1, slide_2, slide_3
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
                  <Image 
                    src={image}
                    alt={`Image ${index + 1}`} 
                    className="object-cover w-[1500px] h-full rounded-lg" placeholder='blur'
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
