import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Some of the counselling I did",
  desc: "I have blogged about some of the people I counselled keeping their identity secret. It will give you an idea of my way of counselling.",
  image: benefitOneImg,
  bullets: [
    {
      title: "A daughter whose emotions were misunderstood",
      desc: "In 2012, I counselled one of my college juniors which eventually made her question her father & eventually sorted the relationship",
      icon: <CogIcon />,
    },
    {
      title: "Responsible non-romantic Relationship",
      desc: "A wife & a Husband.....which has to be long-lasting romantic relationship, struck as friendship, compromising & experiencing it as ,there is no way out.",
      icon: <CogIcon />,
    },
    {
      title: "Infinite desires- finite probabilities",
      desc: "With uncontrollable hormonal dance in a human body.......defining destiny in search of a soulmate is nothing but finding a pearl deep down in the ocean. ",
      icon: <CogIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
