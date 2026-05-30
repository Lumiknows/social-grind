export type SocialPlatform = "facebook" | "instagram" | "tiktok" | "website";

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

export type BrandBranch = {
  name: string;
  url: string;
  avatar?: string;
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
  /** Live website preview (iframe) when set. */
  websiteUrl?: string;
  socials: SocialLink[];
  branches?: BrandBranch[];
};

/** Past brand collaborations — social links and optional live site previews. */
export const brands: Brand[] = [
  {
    id: "uclick",
    name: "UClick Self-Portrait Studio",
    category: "Photography · Self-Portrait Studio",
    logo: "/uclick.jpg",
    socials: [
      {
        platform: "instagram",
        url: "https://www.instagram.com/uclickstudio",
      },
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@uclickstudio",
      },
    ],
    branches: [
      {
        name: "Cebu City",
        url: "https://www.facebook.com/uclickstudiocebucity",
        avatar: "/uclick-branches/cebu-city.svg",
      },
      {
        name: "Liloan",
        url: "https://www.facebook.com/uclickstudioliloan",
        avatar: "/uclick-branches/liloan.svg",
      },
      {
        name: "Lapu-Lapu",
        url: "https://www.facebook.com/uclickstudiolapulapu",
        avatar: "/uclick-branches/lapu-lapu.svg",
      },
      {
        name: "Talisay",
        url: "https://www.facebook.com/uclickstudio",
        avatar: "/uclick-branches/talisay.svg",
      },
    ],
  },
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
      {
        platform: "instagram",
        url: "https://www.instagram.com/hostelhoneycombcebu",
      },
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@hostelhoneycomb",
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
      {
        platform: "instagram",
        url: "https://www.instagram.com/playfaircebu",
      },
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@playfaircebu",
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
        url: "https://www.facebook.com/share/1QaKkV7NJ9/",
      },
      {
        platform: "instagram",
        url: "https://www.instagram.com/jayann_jewelry/",
      },
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@jayann.jewelry",
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
      {
        platform: "instagram",
        url: "https://www.instagram.com/cars101_cebu/",
      },
      {
        platform: "tiktok",
        url: "https://www.tiktok.com/@cars101_cebu",
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
