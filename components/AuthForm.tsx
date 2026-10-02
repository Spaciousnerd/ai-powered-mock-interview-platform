"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Form } from "./ui/form";
import FormField from "./FormField";
import Link from "next/link";
import { useRouter } from "next/navigation";
const authformSchema = (type: FormType) => {
  return z.object({
    name:
      type === "sign-up" ? z.string().min(3).max(14) : z.string().optional(),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(3, "atleast 3 characters").max(15),
  });
};
const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authformSchema(type);
  const isSignIn = type === "sign-in";
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        toast.success("Account Created Successfully. Please Sign in...");
        console.log("SIGN UP", values);
      } else {
        toast.success("Sign in successfull.");
        router.push("/");
        console.log("SIGN IN", values);
      }
    } catch (e) {
      console.log(e);
      toast.error(`There was an error : ${e}`);
    }
  }
  return (
    <div className="card-border lg:min-w-141.5">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="Logo" height={32} width={38} />
          <h2 className="text-primary-100">Hiresense</h2>
        </div>
        <h3>Practice for job interview</h3>
        <Form {...form}>
          <form
            className="form flex flex-col gap-6 card py-14 px-10"
            id="form-rhf-demo"
            onSubmit={form.handleSubmit(onSubmit, (errors) =>
              console.log("FORM ERRORS:", errors),
            )}
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
              />
            )}
            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your Email"
              type="email"
            />
            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter Password"
              type="password"
            />
            <Button type="submit" className="btn rounded-3xl">
              {isSignIn ? "Sign-in" : "Create Account"}
            </Button>
          </form>
        </Form>
        <p className="text-center">
          {isSignIn ? "No account yet?" : "Have an Account Already"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="font-bold text-user-primary ml-1"
          >
            {!isSignIn ? "Sign in" : "Sign up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
