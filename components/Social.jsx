// components/Social.jsx
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Safwen-bm" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/safwen-ben-mabrouk-494721362" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, i) => (
        <Link key={i} href={item.path} target="_blank" className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;