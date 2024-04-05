import { Button } from "@/components/ui/button";

const Featured = () => {
  return (
    <section className={`flex relative h-[100svh] w-full lg:h-[700px]`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.midjourney.com/07c6b66b-4fdd-40e8-a0a9-b0dd3e912e15/0_3.webp`}
        alt={`featured`}
        className={`object-cover w-full object-center h-full`}
      />
      <div
        className={`absolute flex-center flex-col gap-y-3 z-10 bg-white/80 backdrop-blur-md top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-5`}
      >
        <h1 className={`font-semibold text-2xl`}>Lorem Ipsum</h1>
        <p className={`text-center`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          voluptatum.
        </p>
        <Button>Read more</Button>
      </div>
    </section>
  );
};

export default Featured;
