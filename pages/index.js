import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={`${inter.className} container mx-auto p-4`}>
        <h1 className="text-3xl">Home Page</h1>
      </div>
    </>
  );
}
