const useFetchFeaturedList = () => {
const data = [
  {
    title: "Hidden Gems of Lisbon",
    description:
      "Join me as I wander through the charming streets of Lisbon, uncovering lesser-known spots that capture the heart of Portugal's capital.",
    image: "https://source.unsplash.com/random/1200x800?sig=1",
    id: "7",
  },
  {
    title: "Culinary Journey Through Tokyo",
    description:
      "Embark on a mouthwatering adventure in Tokyo, where traditional flavors meet modern innovation.",
    image: "https://source.unsplash.com/random/1200x800?sig=2",
    id: "14",
  },
  {
    title: "Van Life Diaries: American West",
    description:
      "Experience the freedom and beauty of van life as I traverse the American West.",
    image: "https://source.unsplash.com/random/1200x800?sig=3",
    id: "21",
  },
  {
    title: "Solo Travel in Scandinavia",
    description:
      "Discover the joys and challenges of solo travel through Scandinavia.",
    image: "https://source.unsplash.com/random/1200x800?sig=4",
    id: "28",
  },
  {
    title: "Backpacker's Guide to Southeast Asia",
    description:
      "Southeast Asia is a backpacker's dream, and this guide is packed with budget-friendly advice for traveling through this vibrant region.",
    image: "https://source.unsplash.com/random/1200x800?sig=5",
    id: "35",
  },
  {
    title: "Architectural Tour of Rome",
    description:
      "Step back in time with a walk through the eternal city of Rome. This post highlights the architectural marvels from the Colosseum to the Sistine Chapel.",
    image: "https://source.unsplash.com/random/1200x800?sig=6",
    id: "42",
  },
];

  return {
    data,
  };
};

export default useFetchFeaturedList;
