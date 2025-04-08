
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const exercises = [
  {
    name: "Push Press",
    category: "Dumbbell",
    image: "https://tse3.mm.bing.net/th?id=OIP.cAHHSWqGjeiWyIyd79LZzAHaEi&pid=Api",
    youtube: "https://www.youtube.com/watch?v=4tCaD42ghlc"
  },
  {
    name: "Truck Driver",
    category: "Plate",
    image: "https://tse2.mm.bing.net/th?id=OIP.Y1MFGvNNfcSk32TXQhJR8wHaE7&pid=Api",
    youtube: "https://www.youtube.com/watch?v=Vg2teM1pZhU"
  }
  // Add the full list of exercises from JSON here later
];

const categories = [
  "Barbell",
  "Dumbbell",
  "Kettlebell",
  "Body weight",
  "Cable cross",
  "Plate"
];

export default function Gym690() {
  const [selectedCategory, setSelectedCategory] = useState("Barbell");

  const filteredExercises = exercises.filter(
    (ex) => ex.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-black text-pink-500 p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Gym690</h1>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={\`rounded-full px-4 py-2 $\{selectedCategory === cat ? "bg-pink-600 text-white" : "bg-gray-800 text-pink-400"\}`}>
            {cat}
          </Button>
        ))}
      </div>
      <div className="grid gap-4">
        {filteredExercises.map((ex, index) => (
          <Card key={index} className="bg-gray-900 rounded-2xl shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{ex.name}</h2>
                <Badge className="bg-pink-600 text-white capitalize">{ex.category}</Badge>
              </div>
              <img
                src={ex.image}
                alt={ex.name}
                className="w-full h-48 object-contain rounded-xl my-4"
              />
              <a
                href={ex.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-pink-600 hover:bg-pink-400 text-white">
                  Watch on YouTube
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
