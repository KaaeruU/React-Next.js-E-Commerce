import EmblaCarousel from "../carousel/Carousel";
import { Heading } from "../heading/Heading";
import { Text } from "../text/Text";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/src/components/atom/modal/dialog";

interface ModalProps {
  children?: React.ReactNode;
  productImages?: string[];
  title?: string;
  description?: string;
}

export const Modal = ({
  children,
  productImages,
  title,
  description,
}: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-neutral-buttonPrimary text-white">
        <DialogHeader>
          <EmblaCarousel slides={productImages || []} />

          <Heading as={"h1"} styledAs={"h2"}>
            {title}
          </Heading>
          <Text as={"label"} styledAs={"body"} className="!mt-4">
            {description}
          </Text>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
