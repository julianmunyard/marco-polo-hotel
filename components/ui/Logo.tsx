import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="logo-link flex items-center justify-center" aria-label="Marco Polo Motel Home">
      <Image
        src="/marco-polo-logo.png"
        alt="Marco Polo Motel"
        width={300}
        height={150}
        priority
        className="h-20 md:h-24 lg:h-32 w-auto object-contain max-w-[90vw] sm:max-w-[350px]"
        style={{ maxWidth: '350px' }}
      />
    </Link>
  );
}
