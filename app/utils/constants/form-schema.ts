import * as z from "zod";

export const formSchema = z.object({
  email: z.email({ message: "email non valida" }),
  password: z
    .string({ message: "password obbligatoria" })
    .min(1, "password obbligatoria")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "La password deve contenere almeno una lettera minuscola, una maiuscola e un numero"
    ),
});
