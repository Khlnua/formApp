import Image from "next/image";

export const FinalStep = () => {
  return (
    <div className=" h-45 flex flex-col justify-between w-120 mt-70 p-8 rounded-xl bg-white">
      <Image src="/Main 1.svg" width={60} height={60} alt="Logo" />
      <p className="font-semibold text-[26px]">You're All Set 🔥</p>
      <p className="font-normal text-[18px] text-[#8E8E8E]">
        We have received your submission. Thank you!{" "}
      </p>
    </div>
  );
};
