export type ClientEmbed = {
  type: "video" | "post";
  href: string;
  label?: string;
  /** Reels and phone-shot content default to portrait. */
  orientation?: "portrait" | "landscape";
};

export type Client = {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  facebookUrl: string;
  location?: string;
  embeds: ClientEmbed[];
};

export const clients: Client[] = [
  {
    id: "hostel-honeycomb",
    name: "Hostel Honeycomb Cebu",
    tagline: "Social media for hospitality & staycations.",
    logo: "/honeycomb.jpg",
    facebookUrl: "https://www.facebook.com/hostelhoneycomb/",
    location: "Cebu City, Philippines",
    embeds: [
      {
        type: "video",
        href: "https://www.facebook.com/reel/877779994594597/",
        label: "Staycation reel",
        orientation: "portrait",
      },
      {
        type: "post",
        href: "https://www.facebook.com/photo/?fbid=122333469578205748",
        label: "Campaign creative",
      },
    ],
  },
  {
    id: "unlisted-burger",
    name: "Unlisted Burger",
    tagline: "Discover the new taste of burgers.",
    logo: "/unlistedburger.jpg",
    facebookUrl: "https://www.facebook.com/unlistedburgercebu",
    location: "Canduman, Cebu City",
    embeds: [
      {
        type: "post",
        href: "https://www.facebook.com/unlistedburgercebu/posts/pfbid0qTeDtyEJ6aSf76Tg3PUYEATG6XntXB8E2YDergoFxd6XYWkcKgjTwpBGttXo4GkNl",
        label: "International Burger Day",
      },
      {
        type: "post",
        href: "https://www.facebook.com/photo/?fbid=1608565331278843&set=a.480588244076563",
        label: "Campaign creative",
      },
    ],
  },
  {
    id: "uclick-studio",
    name: "Uclick Self-Portrait Studio",
    tagline: "Cebu's leading self-portrait studio.",
    logo: "/uclick.jpg",
    facebookUrl: "https://www.facebook.com/uclickstudiocebucity",
    location: "Kasambagan, Cebu City",
    embeds: [
      {
        type: "post",
        href: "https://www.facebook.com/uclickstudiocebucity/posts/pfbid03153rGAVq4cCKtEz3ng5zHHqhg6SaMPGkWiRhbcktfs9JsRC4hp3SpqDpF5A3rem1l",
        label: "Studio spotlight",
      },
      {
        type: "post",
        href: "https://www.facebook.com/photo/?fbid=991914107131205&set=pcb.991914143797868",
        label: "Campaign creative",
      },
    ],
  },
  {
    id: "playfair",
    name: "PlayFair",
    tagline: "Home of Claw King — the world's largest claw machine.",
    logo: "/playfair.jpg",
    facebookUrl: "https://www.facebook.com/profile.php?id=61561129515601",
    location: "TOPS, Cebu City",
    embeds: [
      {
        type: "post",
        href: "https://www.facebook.com/permalink.php?story_fbid=pfbid0HTWRBfPqN9uxpNpNGiSkvvKyBB7JZdaJEihKUb7mKvkS8jLmEHXfoCkVnAgSw2Rul&id=61561129515601",
        label: "Claw King spotlight",
      },
      {
        type: "post",
        href: "https://www.facebook.com/photo/?fbid=122213712662370983&set=pcb.122213712740370983",
        label: "Campaign creative",
      },
    ],
  },
  {
    id: "dark-side-bar",
    name: "Dark Side Bar Cebu",
    tagline: "Dark Side of the Moon — bar & lounge.",
    logo: "/darksidecebu.jpg",
    facebookUrl: "https://www.facebook.com/darksidebarcebu",
    location: "Cebu City",
    embeds: [],
  },
];
