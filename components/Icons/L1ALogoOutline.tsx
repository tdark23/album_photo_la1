import Image from "next/image";

export default function L1ALogoOutline() {
  return (
    <div className="relative h-[500px] w-[500px] max-w-full max-h-full aspect-square">
      <Image
        src="/logo-l1a-outline.png"
        alt="L1A Class Logo Wireframe Outline"
        fill
        sizes="550px"
        className="object-contain"
        priority
      />
    </div>
  );
}
