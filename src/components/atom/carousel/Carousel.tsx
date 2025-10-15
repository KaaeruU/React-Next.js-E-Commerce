import { EmblaOptionsType } from "embla-carousel";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/src/lib/embla/EmblaCarouselArrowButton";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const defaultOptions: EmblaOptionsType = {
    loop: true,
    ...options,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(defaultOptions, [Fade()]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex select-none">
          {slides.map((item, index) => (
            <div
              className="relative min-w-0 flex-[0_0_100%] transform-gpu"
              key={index}
            >
              <div className="relative aspect-square w-full">
                <Image
                  className="select-none rounded-2xl object-cover"
                  src={item}
                  alt="Product image"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="flex gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};
export default EmblaCarousel;
