import queryKeys from "@/constants/queryKeys";
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "@/lib/actions/category.action";
import userClient from "@/lib/services/category.service";
import {
  CreateCategoryParams,
  DeleteCategoryParams,
  UpdateCategoryParams,
} from "@/types/category.type";
import { useMutation, useQuery } from "@tanstack/react-query";

const useFetchCategoryList = () => {
  // const data = [
  //   {
  //     _id: "1Abc9Df8G",
  //     name: "Cultural Immersions",
  //     description:
  //       "Explore the world's rich tapestry of cultures, learning about local traditions, customs, and ceremonies that offer a deep dive into the heart of each community.",
  //   },
  //   {
  //     _id: "2HiJ3kLmN",
  //     name: "Urban Explorations",
  //     description:
  //       "Discover the vibrant life of cities around the globe. From skyscrapers to street art, experience the dynamic pulse of urban centers and their hidden gems.",
  //   },
  //   {
  //     _id: "3OpQ4rStU",
  //     name: "Luxury Retreats",
  //     description:
  //       "Indulge in opulence and comfort with stays in the world's most luxurious accommodations, offering exquisite dining, spa treatments, and unparalleled service.",
  //   },
  //   {
  //     _id: "4VwX5yZzA",
  //     name: "Historic Journeys",
  //     description:
  //       "Step back in time with visits to ancient ruins, historic landmarks, and museums, where history comes alive and tells the stories of yesteryears.",
  //   },
  //   {
  //     _id: "5BcD6EfGh",
  //     name: "Nature Escapes",
  //     description:
  //       "Retreat into the beauty of the natural world, exploring national parks, lush forests, and tranquil lakes that provide a refreshing break from urban life.",
  //   },
  //   {
  //     _id: "6IjK7LmNo",
  //     name: "Culinary Adventures",
  //     description:
  //       "Taste your way through various cuisines, discovering flavors that are as diverse as the regions from which they come. From street food to gourmet dishes, feast on a world of flavors.",
  //   },
  //   {
  //     _id: "7PqR8sTuV",
  //     name: "Artistic Trails",
  //     description:
  //       "Follow the trails of art across the globe, visiting galleries, studios, and street art scenes that showcase the creativity of both renowned and emerging artists.",
  //   },
  //   {
  //     _id: "8WxY9zAbC",
  //     name: "Festivals and Events",
  //     description:
  //       "Join the festivity of local and international events, from music festivals to cultural celebrations, and experience the joy and unity they bring.",
  //   },
  //   {
  //     _id: "9DeF0GhIj",
  //     name: "Sustainable Travel",
  //     description:
  //       "Travel responsibly by engaging with eco-friendly practices and supporting local economies, ensuring that your journeys help preserve the environment and cultural heritage.",
  //   },
  //   {
  //     _id: "0KlM1NnOq",
  //     name: "Adventure and Sport",
  //     description:
  //       "Get your adrenaline fix with thrilling sports and adventures, whether it’s hiking up mountain trails, surfing wild waves, or exploring caves.",
  //   },
  //   {
  //     _id: "2PrS3tUvW",
  //     name: "Relaxation and Wellness",
  //     description:
  //       "Focus on your well-being with spa days, yoga retreats, and wellness workshops that rejuvenate your body and mind in serene settings.",
  //   },
  //   {
  //     _id: "4XyZ5aBcD",
  //     name: "Budget Backpacking",
  //     description:
  //       "Embark on affordable adventures that prove you don’t need to break the bank to explore the world. Discover budget-friendly tips and destinations for the savvy traveler.",
  //   },
  // ];

  const path = `/admin/management`;

  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.category.list],
    queryFn: userClient.getUserList,
  });

  const { mutate: createCategoryMutate, isPending: isPendingCreation } =
    useMutation({
      mutationKey: [queryKeys.category.create],
      mutationFn: createCategory,
    });

  const { mutate: updateCategoryMutate, isPending: isPedingUpdate } =
    useMutation({
      mutationKey: [queryKeys.category.update],
      mutationFn: updateCategory,
    });

  const { mutate: deleteCategoryMutate, isPending: isPendingDeletion } =
    useMutation({
      mutationKey: [queryKeys.category.delete],
      mutationFn: deleteCategory,
    });

  const handleCreate = async (category: CreateCategoryParams["category"]) => {
    createCategoryMutate({ category, path });
  };

  const handleUpdate = async (category: UpdateCategoryParams["category"]) => {
    updateCategoryMutate({ category, path });
  };

  const handleDelete = async (
    categoryId: DeleteCategoryParams["categoryId"]
  ) => {
    deleteCategoryMutate({ categoryId, path });
  };

  return {
    data,
    isLoading:
      isLoading || isPendingCreation || isPedingUpdate || isPendingDeletion,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
};

export default useFetchCategoryList;
