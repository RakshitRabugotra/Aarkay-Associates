/* The title of the application */
export const TITLE = "Aarkay Associates — Build Dreams";
export const FIRM_NAME = "Aarkay Associates";

/* Logo of the page */
export const LOGO_LIGHT = "/logo-white.svg";
export const LOGO_DARK = "/logo-black.svg";

/* Description of the website */
export const DESCRIPTION =
  "Discover AarKay Associates, your premier destination for architectural excellence. From concept to completion, we blend creativity with functionality to craft spaces that inspire and transform. With a team dedicated to innovation and client collaboration, we're here to turn your dreams into reality. Explore our portfolio and experience the difference with AarKay Associates.";

/* The domain for this website */
export const SELF_DOMAIN = "https://github.com/RakshitRabugotra";

/* Section name of the page */
export type Section = { name: string; id: string };

export const SECTIONS: Section[] = [
  { name: "About Us", id: "about-us" },
  { name: "Services", id: "services" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Testimonials", id: "testimonials" }
];

/* Images for the website */
export type ImageCard = {
  src: string;
  title: string;
  location: string;
  description: string;
  alt: string;
};

export const BUILDINGS_IMG: ImageCard[] = [
  {
    src: "/assets/buildings/image1.jpg",
    title: "Pine Tree",
    location: "New York, USA",
    description:
      "Inspired from the shape of a pineapple, this marvel took 10 years to build",
    alt: "pine tree building"
  },
  {
    src: "/assets/buildings/image2.jpg",
    title: "Ambient",
    location: "New Delhi, India",
    description:
      "This building blends in with the old as well as the young, simple design makes it appealing for office use",
    alt: "ambient building"
  },
  {
    src: "/assets/buildings/image3.jpg",
    title: "The Green Cafe",
    location: "Chandigarh, India",
    description:
      "This cafe is made to live and breath with the nature, providing a perfect ambient setting to chill and relax",
    alt: "green cafe"
  },
  {
    src: "/assets/buildings/image4.jpg",
    title: "La Aqua",
    location: "Shimla, India",
    description:
      "This hotel live within the deep valleys of Himachal Pradesh, perfect spot for tourism",
    alt: "la aqua"
  },
  {
    src: "/assets/buildings/image5.jpg",
    title: "Ageless",
    location: "Ambala, India",
    description:
      "This home is crafted to fit in any location and generation, hence the name Ageless",
    alt: "ageless home"
  },
  {
    src: "/assets/buildings/image6.jpg",
    title: "Sleek",
    location: "Chandigarh, India",
    description: "The sleek designs says it all",
    alt: "sleek home"
  },
  {
    src: "/assets/buildings/image7.jpg",
    title: "International Education Plan",
    location: "Mumbai, India",
    description:
      "Building to accommodate Architectural students where they learn and have joyful moments of youth",
    alt: "IEP"
  },
  {
    src: "/assets/buildings/image8.jpg",
    title: "Ambiguous",
    location: "Jammu, India",
    description:
      "This house is named ambiguous because its beauty lies in the eyes of the beholder",
    alt: "ambiguous"
  }
];

/* Why Us? */
export type WorkDescription = { title: string; description: string };

export const WORK_DESCRIPTIONS: WorkDescription[] = [
  {
    title: "Design Solutions",
    description: "Our firm is dedicated to pushing the boundaries of design"
  },
  {
    title: "Building Practices",
    description:
      "We prioritize sustainability in our designs, aiming to create buildings"
  },
  {
    title: "Expertise, Experience",
    description:
      "With years of experience in the field, our team has the expertise"
  },
  {
    title: "Centric Approach",
    description:
      "We believe in a collaborative process, working closely with our clients"
  }
];

/* Testimonials from clients */
export const RATING_MAX = 5;

export type TestimonialCard = {
  rating: number;
  statement: string;
  username: string;
};

export const TESTIMONIALS: TestimonialCard[] = [
  {
    username: "Rajesh Gupta",
    rating: 4,
    statement:
      "AarKay Associates transformed my house into a dream home. Their attention to detail and innovative design exceeded expectations. Grateful for their professionalism and dedication."
  },
  {
    username: "Anjali Sharma",
    rating: 4,
    statement:
      "AarKay Associates added immense value to our real estate projects. Their blend of traditional Indian architecture with modern design is remarkable. Highly recommend their innovative solutions."
  },
  {
    username: "Vikram Patel",
    rating: 5,
    statement:
      "Choosing AarKay Associates for our office space was a great decision. They understood our brand and created a space that enhances productivity. Seamless process, outstanding outcome."
  },
  {
    username: "Neha Desai",
    rating: 4,
    statement:
      "AarKay Associates is our trusted partner in property ventures. Their expertise and commitment to quality are unmatched. Confident in their ability, eager for future collaborations."
  },
  {
    username: "Ritu Singh",
    rating: 5,
    statement:
      "Collaborating with AarKay Associates elevates my projects. Their passion for design and attention to detail shine through. Seamless integration of architectural and interior elements. Highly recommended for innovative solutions."
  }
];

/* Links for socials */
export type SocialMedia = { name: string; svgSrc: string; href: string };

export const SOCIALS: SocialMedia[] = [
  {
    name: "GitHub",
    svgSrc: "/assets/socials/github.svg",
    href: "https://github.com/RakshitRabugotra"
  },
  {
    name: "Instagram",
    svgSrc: "/assets/socials/instagram.svg",
    href: "https://www.instagram.com/rakshit.413/"
  },
  {
    name: "Gmail",
    svgSrc: "/assets/socials/google.svg",
    href: "mailto:rakshit.rabugotra360@gmail.com"
  },
  {
    name: "Phone",
    svgSrc: "/assets/socials/phone.svg",
    href: "tel:+919569764949"
  }
];
