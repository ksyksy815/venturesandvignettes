import { useState } from "react";

const useFetchPostList = () => {
  const [currentCategory, setCurrentCategory] = useState("ALL");

  const data = [
    {
      id: "123",
      author: "Seo",
      title: "An Intimate Look into the Lives of Kyoto's Geisha",
      slug: "intimate-kyoto-geisha",
      summary:
        "Dive deep into the enigmatic world of Geishas in Kyoto, exploring their traditions, art, and daily lives.",
      content:
        "Extensive article content about Geisha culture, interviews with local Geishas, and a visit to a traditional teahouse...",
      category: "Cultural Immersions",
      tags: ["Japan", "Traditions"],
      createdAt: new Date(),
      updatedAt: new Date(),
      isDisplayed: true,
      comments: [],
      image: "https://source.unsplash.com/random/1200x800?sig=11",
      thumbnailImage: "https://source.unsplash.com/random/1200x800?sig=11",
    },
    {
      id: "124",
      author: "Seo",
      title: "Walking the Ancient Silk Road: A Modern Adventure",
      slug: "silk-road-adventure",
      summary:
        "Journey along the historic Silk Road, tracing the footsteps of merchants and explorers through Asia.",
      content:
        "A detailed narrative of traveling the Silk Road, including visits to key sites like Samarkand and Bukhara...",
      category: "Historic Journeys",
      tags: ["SilkRoad", "AsiaHistory"],
      createdAt: new Date("2024-03-04T08:39:36"),
      updatedAt: new Date("2024-03-04T08:39:36"),
      isDisplayed: true,
      comments: [],
      image: "https://source.unsplash.com/random/1200x800?sig=12",
      thumbnailImage: "https://source.unsplash.com/random/1200x800?sig=12",
    },
    {
      id: "125",
      author: "Seo",
      title: "Exploring the Untouched Wilderness of Patagonia",
      slug: "wild-patagonia",
      summary:
        "Discover the rugged and breathtaking landscapes of Patagonia, from its massive glaciers to remote trails.",
      content:
        "Detailed travelogue of Patagonia's natural beauty, including hiking guides and wildlife encounters...",
      category: "Nature Escapes",
      tags: ["Hiking", "Patagonia"],
      createdAt: new Date("2024-03-02T08:39:36"),
      updatedAt: new Date("2024-03-20T00:02:01"),
      isDisplayed: true,
      comments: [],
      image: "https://source.unsplash.com/random/1200x800?sig=13",
      thumbnailImage: "https://source.unsplash.com/random/1200x800?sig=13",
    },
    {
      id: "126",
      author: "Seo",
      title: "A Taste of Italy: Culinary Delights from Rome to Sicily",
      slug: "italy-culinary-delights",
      summary:
        "Embark on a gastronomic tour of Italy, sampling the finest dishes and wines from Rome to the shores of Sicily.",
      content:
        "An epicurean journey through Italy, featuring restaurant reviews, local recipes, and wine tastings...",
      category: "Culinary Adventures",
      tags: ["ItalianCuisine", "WineTasting"],
      createdAt: new Date("2024-03-01T08:39:36"),
      updatedAt: new Date("2024-03-20T00:02:01"),
      isDisplayed: true,
      comments: [],
      image: "https://source.unsplash.com/random/1200x800?sig=14",
      thumbnailImage: "https://source.unsplash.com/random/1200x800?sig=14",
    },
    {
      id: "127",
      author: "Seo",
      title: "The Secrets of New York: Beyond the Tourist Trail",
      slug: "ny-secrets",
      summary:
        "Experience the lesser-known facets of New York City, exploring its hidden neighborhoods and unique local culture.",
      content:
        "An insider's guide to NYC's hidden gems, including exclusive interviews with locals and tips on off-the-beaten-path experiences...",
      category: "Urban Explorations",
      tags: ["NewYork", "CityLife"],
      createdAt: new Date("2024-02-14T08:39:36"),
      updatedAt: new Date("2024-02-14T08:39:36"),
      isDisplayed: true,
      comments: [],
      image: "https://source.unsplash.com/random/1200x800?sig=15",
      thumbnailImage: "https://source.unsplash.com/random/1200x800?sig=15",
    },
    {
      id: "128",
      author: "Seo",
      title: "Story: Backpacking Southeast Asia on a Shoestring",
      slug: "budget-backpacking-sea",
      summary:
        "Backpacking Southeast Asia on a Shoestring summary. Backpacking Southeast Asia on a Shoestring summary.",
      content: "Backpacking Southeast Asia on a Shoestring content.",
      category: "Budget Backpacking",
      tags: ["BudgetTravel", "SoutheastAsia"],
      createdAt: new Date("2024-01-22T12:51:51"),
      updatedAt: new Date("2024-01-22T12:51:51"),
      isDisplayed: true,
      comments: [],
      image: "https://source.unsplash.com/random/1200x800?sig=16",
      thumbnailImage: "https://source.unsplash.com/random/1200x800?sig=16",
    },
  ];

  const updateCurrentCategory = (name: string) => {
    setCurrentCategory(name);
  };

  return {
    data:
      currentCategory === "ALL"
        ? data
        : data.filter((post) => post.category === currentCategory),
    currentCategory,
    updateCurrentCategory,
  };
};

export default useFetchPostList;
