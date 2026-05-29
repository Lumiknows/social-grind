export type SocialPlatform = "facebook" | "instagram";

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

export type Brand = {
  id: string;
  name: string;
  category: string;
  logo?: string;
  /** Use dark tile background (e.g. Dark Side logo on black). */
  logoOnDark?: boolean;
  /** Short label shown on lettermark tiles when no logo asset exists. */
  monogram?: string;
  socials: SocialLink[];
};

/** Past brand collaborations — social links only, no embeds. */
export const brands: Brand[] = [
  {
    id: "hostel-honeycomb",
    name: "Hostel Honeycomb Cebu",
    category: "Hospitality",
    logo: "/honeycomb.jpg",
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/hostelhoneycomb/",
      },
    ],
  },
  {
    id: "dark-side-bar",
    name: "Dark Side of the Moon",
    category: "Bar & Lounge",
    logo: "/darksidecebu.jpg",
    logoOnDark: true,
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/darksidebarcebu",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/darksidebarcebu/",
      },
    ],
  },
  {
    id: "playfair",
    name: "PlayFair at TOPS",
    category: "Entertainment",
    logo: "/playfair.jpg",
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/profile.php?id=61561129515601",
      },
    ],
  },
  {
    id: "tfm-beauty",
    name: "TFM Beauty Salon",
    category: "Beauty & Wellness",
    logo: "/559375790_1126583326287563_7136782329714336502_n.jpg",
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/tfmbeautycebu",
      },
    ],
  },
  {
    id: "munchee-munchees",
    name: "Munchee Munchees Pizza",
    category: "Food & Beverage",
    logo: "/mmpizzas.jpg",
    logoOnDark: true,
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/profile.php?id=61589629030779",
      },
    ],
  },
  {
    id: "jay-ann-jewelry",
    name: "Jay-Ann Jewelries",
    category: "Jewelry & Retail",
    logo: "/jay-annjewelry.jpg",
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/profile.php?id=100087617970502",
      },
    ],
  },
  {
    id: "smallville",
    name: "Smallville Montessori",
    category: "Education",
    logo: "/smallville.jpg",
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/SmallvilleMontessori",
      },
    ],
  },
  {
    id: "cars-101",
    name: "Cars 101",
    category: "Automotive",
    logo: "/cars101.jpg",
    logoOnDark: true,
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/cars101cebu",
      },
    ],
  },
  {
    id: "xoooom-autospa",
    name: "Xoooom Autospa",
    category: "Automotive & Detailing",
    logo: "/xooomautospa.jpg",
    logoOnDark: true,
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/xoooomautospa",
      },
    ],
  },
  {
    id: "unlisted-burger",
    name: "Unlisted Burger",
    category: "Food & Beverage",
    logo: "/unlistedburger.jpg",
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/unlistedburgercebu",
      },
    ],
  },
  {
    id: "tfm-head-spa",
    name: "TFM Head Spa",
    category: "Beauty & Wellness",
    logo: "/453313391_122159644946181406_7457970137347271074_n.jpg",
    socials: [
      {
        platform: "facebook",
        url: "https://www.facebook.com/profile.php?id=61555442190053",
      },
    ],
  },
];

export const socialGrindInstagram = "https://www.instagram.com/socialgrind.ceb/";
