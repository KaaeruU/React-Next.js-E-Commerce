"use client";

import z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/src/components/atom/buttons/Button";
import { Heading } from "@/src/components/atom/heading/Heading";
import { Input } from "@/src/components/atom/input/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/src/components/molecules/Form";
import { formSchema } from "@/src/utils/constants/form-schema";
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
    </>
  );
}
