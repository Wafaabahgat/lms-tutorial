import Image from "next/image";
import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return <Image src="/Logo.svg" alt="logo" width={130} height={130} />;
};

export default Logo;
