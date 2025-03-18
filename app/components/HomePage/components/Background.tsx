import Image from "next/image";

export const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden min-h-screen">
      <Image
        src="/images/background-sinfondo.png"
        alt="background"
        width={100}
        height={100}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
    </div>
  );
};
