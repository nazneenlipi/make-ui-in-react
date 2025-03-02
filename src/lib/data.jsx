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