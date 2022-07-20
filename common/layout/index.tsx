import React from "react";
import { ReactNode } from "react";
import Nav from "./nav";
import Footer from "./footer";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
