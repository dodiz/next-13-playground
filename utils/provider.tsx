"use client";

import { type FC, type PropsWithChildren, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "./getQueryClient";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
