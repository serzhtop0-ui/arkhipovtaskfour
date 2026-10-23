import Arrows from "./Arrows";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Clients() {
  return (
    <Carousel opts={{ loop: true }} className="mx-auto max-w-[1200px] px-4 pb-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl">Нам доверяют</h2>
        <Arrows />
      </div>
      <CarouselContent className="mt-8 ml-0 border">
        {[1, 2, 3, 4, 5].map((n) => (
          <CarouselItem key={n} className="flex h-28 basis-1/2 items-center justify-center border-r pl-0 md:basis-1/5">
            <img src={`/img/${n}.svg`} alt="" className="max-h-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
