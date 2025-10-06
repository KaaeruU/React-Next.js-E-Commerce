"use client";

import type z from "zod";
import { useActionState, useState } from "react";
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
import { login, signup } from "@/src/lib/actions/login";
import { formSchema } from "@/src/utils/constants/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const [loginState, loginAction] = useActionState(login, null);
  const [signupState, signupAction] = useActionState(signup, null);

  type FormValues = z.infer<typeof formSchema>;
  const schema = formSchema;
  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    // Call the appropriate server action
    if (isLogin) {
      loginAction(formData);
    } else {
      signupAction(formData);
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center">
        <div className="default-grid grid-container">
          <div
            className="col-span-2 flex flex-col flex-wrap content-center md:col-span-6 md:col-start-3
              lg:col-span-5 lg:col-start-5"
          >
            <Heading as="h1" styledAs="h1" className="lg:whitespace-nowrap">
              {isLogin ? "Accedi al tuo" : "Crea il tuo"}{" "}
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
                className="col-span-2 mt-16 grid space-y-4 bg-white p-5 md:col-span-6"
              >
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

                <Button
                  type="submit"
                  label={isLogin ? "Login" : "Registrati"}
                  isDisabled={false}
                />

                <Button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  label={
                    isLogin
                      ? "Non hai un account? Registrati"
                      : "Hai già un account? Login"
                  }
                  variant="primary"
                  isDisabled={false}
                />
              </form>
            </Form>

            {/* Show errors from server actions */}
            {(loginState?.error || signupState?.error) && (
              <div className="mt-2 text-red-500">
                Error: {loginState?.error || signupState?.error}
              </div>
            )}

            {/* Show success messages */}
            {(loginState?.success || signupState?.success) && (
              <div className="mt-2 text-green-500"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
