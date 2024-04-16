export const MAIN_MENU = [
  {
    name: "Home",
    path: "/",
    alwaysShow: true,
  },
  {
    name: "About",
    path: "/about",
    alwaysShow: true,
  },
  {
    name: "Posts",
    path: "/posts",
    alwaysShow: true,
  },
  {
    name: "Categories",
    path: "/categories",
    alwaysShow: true,
  },
  {
    name: "Contact",
    path: "/contact",
    alwaysShow: true,
  },
];

export const FOOTER_INFO = {
  about: {
    title: "About Us",
    description:
      "Ventures & Vignettes is a blog dedicated to exploring the intricate tapestry of global cultures and histories, guiding you through the fascinating stories of the world.",
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { name: "Home", url: "/" },
      { name: "Latest Posts", url: "/posts" },
      { name: "Categories", url: "/categories" },
      { name: "About", url: "/about" },
      // more links as needed
    ],
  },
  contact: {
    title: "Contact Us",
    email: "info@venturesandvignettes.com",
    phone: "+123456789",
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms of Use", url: "/terms-of-use" },
    ],
  },
  socialMedia: {
    title: "Follow Us",
    links: [
      {
        name: "Facebook",
        url: "https://facebook.com/venturesandvignettes",
        icon: "facebook-icon.png",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/venturesvignettes",
        icon: "twitter-icon.png",
      },
      {
        name: "Instagram",
        url: "https://instagram.com/venturesandvignettes",
        icon: "instagram-icon.png",
      },
    ],
  },
};

export const ADMIN_NAV_ITEMS = [
  {
    name: "Dashboard",
    path: "/admin",
  },
  {
    name: "Posts",
    path: "/admin/posts",
  },
  {
    name: "Comments",
    path: "/admin/comments",
  },
  {
    name: "Site Management",
    path: "/admin/management",
  },
  {
    name: "Users",
    path: "/admin/user",
  },
];
