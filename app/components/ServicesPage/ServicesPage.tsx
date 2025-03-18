"use client";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/services-carrusel";
import { SERVICES } from "@/app/lib/service";

export const ServicesPage = () => {
  const cards = SERVICES.map((card, index) => (
    <Card key={card.id} card={card} index={index} />
  ));

  return (
    <section id="services" className="bg-black text-white p-10 scroll-mt-20">
      <h2 className="text-3xl md:text-[5rem] font-bold uppercase md:leading-[5rem] relative w-fit">
        Our
        <span className="text-[.5rem] md:text-sm font-light absolute right-0 top-[1rem] md:top-[4rem]">
          ¡Empezamos!
        </span>
        <span className="block">Services</span>
      </h2>
      <Carousel items={cards} />
    </section>
  );
};
