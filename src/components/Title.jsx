import Image from "next/image";

export const Title = () => {
  return (
    <div className="w-104 h-32">
      <Image src="/Main 1.svg" width={60} height={60} alt="Logo" />
      <p className="font-semibold text-[26px]">Join Us! 😎</p>
      <p className="font-normal text-[18px] text-[#8E8E8E]">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
