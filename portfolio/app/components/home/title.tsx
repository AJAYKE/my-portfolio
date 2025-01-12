"use client";
import { useRouter } from "next/navigation";

const Title = () => {
  const router = useRouter();

  const handleTitleClick = () => {
    router.push("/");
  };
  return (
    <h3 id="my-name" onClick={handleTitleClick}>
      Ajay Edupuganti
    </h3>
  );
};

export default Title;
