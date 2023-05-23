"use client";

import { addTodo } from "@/server";
import { useFormik } from "formik";
import { Button, Input } from "@/components";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const AddTodo = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["addTodo"],
    mutationFn: addTodo,
    onSuccess: () => {
      formik.resetForm();
      queryClient.invalidateQueries(["todos"]);
    },
  });
  const formik = useFormik({
    initialValues: {
      label: "",
    },
    onSubmit: (values) => {
      mutate({ label: values.label });
    },
  });

  return (
    <div className="flex flex-col gap-4 p-8">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        <Input
          label="Title"
          name="label"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.label}
        />
        <Button loading={isLoading} label="Add todo" type="submit" />
      </form>
    </div>
  );
};
