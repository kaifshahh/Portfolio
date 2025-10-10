import { useContext } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

import { MdOutlineWhatsapp } from "react-icons/md";

import { TbBrandLeetcode } from "react-icons/tb";
import { BgContext } from "../context/BgContext";
import SocialLink from "./SocialLink.jsx";

const socialMediaLinks = [
  {
    href: "https://linkedin.com/in/kaifshahh/",
    label: "LinkedIn Profile",
    Icon: CiLinkedin,
  },
  {
    href: "https://www.github.com/kaifshahh",
    label: "GitHub Profile",
    Icon: FiGithub,
  },
  {
    href: "https://www.leetcode.com/kaifshahh",
    label: "LeetCode Profile",
    Icon: TbBrandLeetcode,
  },
  {
    href: "https://x.com/kaif__shah",
    label: "X Profile",
    Icon: BsTwitterX,
  },
  {
    href: "https://www.instagram.com/kaif__shah/",
    label: "Instagram Profile",
    Icon: FiInstagram,
  },
  {
    href: "https://wa.me/919028525688?text=Hi%20Kaif%20Shah",
    label: "Whatsapp Profile",
    Icon: MdOutlineWhatsapp,
  },
];

const Socials = () => {
  const { colorScheme } = useContext(BgContext);

  return (
    <nav
      className="row-span-3 rounded-3xl gap-4 items-center p-2 grid grid-cols-3 sm:grid-cols-6  xl:grid-cols-3 xl:grid-rows-2 order-3 xl:order-1"
      aria-label="Social Media Links"
      id="socials"
    >
      {socialMediaLinks.map((social) => (
        <SocialLink
          key={social.href}
          href={social.href}
          label={social.label}
          Icon={social.Icon}
          colorScheme={colorScheme}
        />
      ))}
    </nav>
  );
};

export default Socials;
