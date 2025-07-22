"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { Icon } from "@/app/components/atom/icon/Icon";
import { Orb } from "@/app/components/atom/orbs/Orb";
import { Text } from "@/app/components/atom/text/Text";
import { Button } from "./components/atom/buttons/Button";
import { Heading } from "./components/atom/heading/Heading";
import { Input } from "./components/atom/input/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "./components/molecules/Form";
import { formSchema } from "./utils/constants/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Home() {
  type FormValues = z.infer<typeof formSchema>;
  const schema = formSchema;
  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <div className="relative flex min-h-screen items-center overflow-hidden">
        <Orb color="green"></Orb>
        <Orb color="orange"></Orb>
        <Orb color="purple"></Orb>
        <Orb color="red"></Orb>
        <div className="default-grid grid-container">
          <div
            className="col-span-2 flex flex-col flex-wrap content-center md:col-span-6 md:col-start-3
              lg:col-span-5 lg:col-start-5"
          >
            <Heading as="h1" styledAs="h1" className="lg:whitespace-nowrap">
              Accedi al tuo{" "}
              <span className="block pl-14 sm:inline lg:p-0">account</span>
            </Heading>
          </div>
          <div
            className="col-span-2 flex flex-col md:col-span-6 md:col-start-2 lg:col-span-5
              lg:col-start-5"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="col-span-2 mt-16 grid bg-white p-5 md:col-span-6"
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="contents">
                      <FormControl className="contents">
                        <Input
                          type="password"
                          placeholder="inserire la password"
                          {...field}
                          icon="EyeOn"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="contents">
                      <FormControl className="contents">
                        <Input
                          placeholder="inserire la propia email"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  label={"Login"}
                  isDisabled={false}
                ></Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div className="flex">
        <Heading as="h1" styledAs="h2">
          Heading
        </Heading>
        <Heading as="h2" styledAs="h1">
          Heading
        </Heading>
        <Heading as="h4" styledAs="h4">
          Heading
        </Heading>
        <Text as="label" styledAs="label">
          Text
        </Text>
        <Text as="p" styledAs="button">
          Text
        </Text>
        <Text as="span" styledAs="body-xs">
          Text
        </Text>
        <Text as="p" styledAs="body">
          Text
        </Text>
      </div>
      <div className="default-grid grid-container">
        <Button label="ciao" isDisabled={true} variant={"secondary"}></Button>
        <Button
          label="aggiungi"
          isDisabled={false}
          variant={"default_accent"}
        ></Button>
        <Button
          label="aggiungi"
          isDisabled={false}
          variant={"primary"}
        ></Button>
        <Button label="aggiungi" isDisabled={false} variant={"accent"}></Button>
        <Button label="aggiungi" isDisabled={false}></Button>
        <div className="text-black">
          <Icon
            name={"Delete"}
            size={"67"}
            weight={"regular"}
            variant={"danger"}
          ></Icon>
          <Icon name={"Arrow"} size={"67"} weight={"regular"}></Icon>
          <Icon name={"Arrow"} size={"67"} weight={"bold"}></Icon>
          <Icon name={"EyeOn"} size={"67"} weight={"regular"}></Icon>
          <Icon name={"Logo"} size={"67"} weight={"regular"}></Icon>
          <Icon name={"Menu"} size={"67"} weight={"regular"}></Icon>
          <Icon name={"MenuQuit"} size={"67"} weight={"regular"}></Icon>
          <Icon name={"Quit"} size={"67"} weight={"regular"}></Icon>
          <Icon name={"Search"} size={"67"} weight={"regular"}></Icon>
          <Icon name={"Star"} size={"67"} weight={"regular"}></Icon>
          <Icon name={"Union"} size={"67"} weight={"regular"}></Icon>
        </div>
      </div>
    </>
  );
}
