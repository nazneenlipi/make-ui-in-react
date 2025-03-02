import React from "react";
import { Star, Heart, Eye } from "lucide-react";

export const cardData = [
  {
    id: 1,
    title: "Favorites",
    description: "Lorem ipsum dolor sit amet.",
    icon: <Star size={24} className="text-orange-500" />,
  },
  {
    id: 2,
    title: "Loved",
    description: "Lorem ipsum dolor sit amet.",
    icon: <Heart size={24} className="text-red-500" />,
  },
  {
    id: 3,
    title: "Views",
    description: "Lorem ipsum dolor sit amet.",
    icon: <Eye size={24} className="text-orange-500" />,
  },
];


export const titleData = [
  { id: 1, title: "Title 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum.", bgColor: "bg-white" },
  { id: 2, title: "Title 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum.", bgColor: "bg-gray-200" },
  { id: 3, title: "Title 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum.", bgColor: "bg-white" },
  { id: 4, title: "Title 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet sed id elementum.", bgColor: "bg-gray-200" }
];