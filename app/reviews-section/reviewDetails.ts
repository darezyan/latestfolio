import { StaticImageData } from "next/image";
import alan from "../../public/alan.jpeg";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alex from "../../public/samuel.avif";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Dickson N",
    role: "CEO @ KoraPay",
    company: "Umoja Linn",
    profileImg: alex,
    testimonial: "“The sky is the starting point for Dare”. ",
  },
  {
    name: "Jeremiah Oloyede",
    role: "Founder",
    company: "Crown Branding Agency",
    profileImg: jerry,
    testimonial:
      "Dare's work is truly outstanding, and I can't recommend him enough! He completely transformed our branding agency's website. Since launch, we've seen a significant jump in website traffic and, crucially, conversions.",
  },
  {
    name: "Mauro Reis",
    role: "CEO",
    company: "Meuclone Digital",
    profileImg: mauro,
    testimonial:
      "Outstanding professional, developed our startup's website and delivered it in a very short time and with high quality.",
  },
  {
    name: "Alan Franciskovic",
    role: "Sales Specialist",
    company: "Croatia Osiguranje d.d",
    profileImg: alan,
    testimonial:
      "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  },
];
