import Image from "next/image";
import ig from "../public/images/icons/instagram.svg";
import twt from "../public/images/icons/twitter.svg";
import linkedin from "../public/images/icons/linkedin.svg";

interface IconProps {
  padding: string;
}

export default function SocmedIcon({ padding }: IconProps): JSX.Element {
  return (
    <div className={`flex `}>
      <div className={`${padding}`}>
        <a
          href="https://web.facebook.com/dwik.btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={ig} alt="instagram page" />
        </a>
      </div>
      <a
        href="https://twitter.com/DwiDwidp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${padding}`}>
          <Image src={twt} alt="twitter page" />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/dwi-darma-putra-848036196/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`${padding}`}>
          <Image src={linkedin} alt="linkedin page" />
        </div>
      </a>
    </div>
  );
}
