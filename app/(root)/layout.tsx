import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="capitalized-text">{children}</main>
      <Footer />
    </>
  );
};

export default layout;
