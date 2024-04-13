/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import useFetchFeaturedList from "@/hooks/curation/useFetchFeaturedList";
import { useEffect, useState } from "react";

const FeaturedSlider = () => {
  const { data } = useFetchFeaturedList();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className={`flex relative h-[697px] w-full lg:h-[697px]`}>
      <Carousel
        id="whatareyou"
        opts={{ align: "start" }}
        setApi={setApi}
        className="w-full h-full"
      >
        <CarouselContent className={`h-full w-full m-0`}>
          {data.map((item) => {
            const { title, description, image, id } = item;

            return (
              <CarouselItem key={item.id} className={`relative p-0`}>
                <div className={`h-[697px] w-full`}>
                  <img
                    src={image}
                    alt={`${title}: ${description}`}
                    className={`h-full w-full object-cover`}
                  />
                </div>
                <div
                  className={`absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)] opacity-80`}
                />

                <div
                  className={`absolute bottom-0 flex flex-col mx-6 mb-[70px] pl-6 border-l border-white text-white gap-y-6 max-w-[826px] md:mx-8 md:pl-8`}
                >
                  <h1 className={`h1`}>{title}</h1>
                  <p className={`text-xl md:text-2xl`}>{description}</p>
                </div>

                <div className="absolute bottom-6 right-6 flex justify-center gap-2">
                  {data.map((item, index) => (
                    <div
                      key={item.id}
                      className={`w-[6px] h-[6px] rounded-full ${
                        index === current ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default FeaturedSlider;
