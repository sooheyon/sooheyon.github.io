import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("https://next-blog-sooheyon.vercel.app");
  }, []);

  return <div></div>;
}
