const menus = [
  {
    id: 1,
    name: "Home",
    links: "#",
  },
  {
    id: 2,
    name: "About",
    links: "/about",
  },
  {
    id: 3,
    name: "Collections",
    links: "/collections",
  },
  {
    id: 4,
    name: "Pages",
    links: "#",
    namesub: [
      {
        id: 1,
        sub: "Team",
        links: "/team",
      },
    ],
  },
  {
    id: 5,
    name: "Contact",
    links: "/contact",
  },
];

export default menus;
