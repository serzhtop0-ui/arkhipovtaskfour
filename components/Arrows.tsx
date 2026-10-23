import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const style = "static translate-y-0 border-0 bg-brand text-white hover:bg-brand/80 hover:text-white";

export default function Arrows() {
  return (
    <div className="flex gap-2">
      <CarouselPrevious className={style} />
      <CarouselNext className={style} />
    </div>
  );
}
