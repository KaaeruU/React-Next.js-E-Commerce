import Image from "next/image";
import { Button } from "../../atom/buttons/Button";
import { Icon } from "../../atom/icon/Icon";
import { CardProps } from "./card-type";
import { Heading } from "@/src/components/atom/heading/Heading";
import { Text } from "@/src/components/atom/text/Text";

const Card = ({ title, price, img, score, mountOfReview }: CardProps) => {
  return (
    <article className="col-span-3 bg-white">
      <div className="w-full">
        <Image
          src={img}
          alt={"image of the product"}
          width={398}
          height={155}
          quality={70}
        />
      </div>
      <div className="flex flex-col">
        <div className="mx-4 border-b-2 border-gray-300/20">
          <Heading as={"h3"} styledAs={"h4"} className="py-4">
            {title}
          </Heading>
        </div>

        <div className="mx-4 py-4">
          <div className="">
            <Heading as={"h4"} styledAs={"h4"} className="">
              {price}
            </Heading>
          </div>
          <div className="flex justify-start py-4 text-gray-500">
            <Icon name={"Star"} size={"16"} weight={"regular"} />
            <Text as={"p"} styledAs={"body-xs"} className="pl-2">
              {score}
            </Text>
            <Text as={"p"} styledAs={"body-xs"} className="">
              {`(${mountOfReview}recensioni)`}
            </Text>
          </div>
        </div>
        <div>
          <Button label={"Aggiungi al carrello"} isDisabled={true} />
        </div>
      </div>
    </article>
  );
};

export default Card;
