"use client";
import { useRouter } from "next/navigation";

const Title = () => {
  const router = useRouter();

  const handleTitleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <div onClick={handleTitleClick}>Ajay Edupuganti</div>
    </div>
  );
};

export default Title;
