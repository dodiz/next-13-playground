import { Metadata } from "next";
import { ReactNode } from "react";
import { Provider } from "../../utils/provider";

export const metadata: Metadata = {
  title: "React query prefetch",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
