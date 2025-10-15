"use client";

import { AnimatePresence, motion } from "framer-motion";
import type z from "zod";
import { useActionState, useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Background } from "../components/atom/orbs/Orb";
import { Button } from "@/src/components/atom/buttons/Button";
import { Heading } from "@/src/components/atom/heading/Heading";
import { Input } from "@/src/components/atom/input/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/src/components/molecules/Form";
import { login, loginWithGoogle, signup } from "@/src/lib/actions/login";
import {
  fadeInUpVariants,
  fadeVariants,
  slideUpVariants,
} from "@/src/lib/motion/variants";
import { formSchema } from "@/src/utils/constants/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const [isRendered, setIsRendered] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isPending, handleLogIn] = useTransition();

  const [loginState, loginAction] = useActionState(login, null);
  const [signupState, signupAction] = useActionState(signup, null);

  //check if client is rendered to avoid motion hidden animation on load
  useEffect(() => {
    setIsRendered(true);
  }, []);

  type FormValues = z.infer<typeof formSchema>;
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    handleLogIn(() => {
      if (isLogin) {
        loginAction(formData);
      } else {
        signupAction(formData);
      }
    });
  };

  const handleGoogleLogin = () => {
    handleLogIn(() => {
      loginWithGoogle();
    });
  };

  return (
    <>
      <div className="flex min-h-screen items-center">
        <Background />
        <div className="default-grid grid-container mt-16">
          <div
            className="col-span-2 flex flex-col flex-wrap content-center md:col-span-6 md:col-start-2
              lg:col-span-5 lg:col-start-3 xl:col-start-5 xl:min-w-[833px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? "login" : "signup"}
                variants={fadeInUpVariants}
                initial={isRendered ? false : "hidden"}
                animate="visible"
                exit="exit"
                className="align-center flex justify-center text-center"
              >
                <Heading
                  as="h1"
                  styledAs="h1"
                  className="mb-2 md:text-wrap lg:whitespace-nowrap"
                >
                  {isLogin ? "Accedi al tuo " : "Crea il tuo "}
                  <span className="sm:inline md:pl-14 lg:p-0"> account</span>
                </Heading>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="col-span-2 flex flex-col md:col-span-6 md:col-start-2 lg:col-span-5
              lg:col-start-5"
          >
            {/* Google Login Button */}
            <motion.div
              className="mb-6"
              variants={slideUpVariants}
              initial={isRendered ? false : "hidden"}
              animate="visible"
            >
              <Button
                type="button"
                onClick={handleGoogleLogin}
                label="Continue with Google"
                variant="accent"
                isDisabled={isPending}
                className="flex w-full items-center justify-center gap-2"
              />
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 pt-6 text-gray-500">
                    Or continue with email
                  </span>
                </div>
              </div>
            </motion.div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="col-span-2 mt-4 grid bg-white p-5 md:col-span-6"
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
                  label={
                    isPending
                      ? "Caricamento..."
                      : isLogin
                        ? "Login"
                        : "Registrati"
                  }
                  isDisabled={isPending}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={isLogin ? "login-submit" : "signup-submit"}
                    variants={fadeVariants}
                    initial={isRendered ? false : "hidden"}
                    animate="visible"
                    exit="exit"
                    className="col-span-2 flex justify-center md:col-span-6 lg:col-span-4"
                  >
                    <Button
                      type="button"
                      onClick={() => setIsLogin(!isLogin)}
                      label={
                        isLogin
                          ? "Non hai un account? Registrati"
                          : "Hai già un account? Login"
                      }
                      variant="primary"
                      isDisabled={isPending}
                      className="mt-4"
                    />
                  </motion.div>
                </AnimatePresence>
              </form>
            </Form>

            {/* Show errors from server actions */}
            {(loginState?.error || signupState?.error) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-red-500"
              >
                Error: {loginState?.error || signupState?.error}
              </motion.div>
            )}

            {/* Show success messages */}
            {signupState?.success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-green-500"
              >
                {signupState?.message || "Account created successfully!"}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
