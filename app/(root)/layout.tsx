import Header from "@/components/Header";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="capitalized-text">{children}</main>
    </>
  );
};

export default layout;
