"use client";
import { FC } from "react";
import { Input, Button } from "@/components";

export const Login: FC = () => {
  return (
    <div className="max-w-md w-full">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <form className="flex flex-col gap-4">
        <Input label="Username" />
        <Input label="Password" type="password" />
        <Button label="Login" />
      </form>
    </div>
  );
};
