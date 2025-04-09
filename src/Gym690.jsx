
import React, { useState } from "react";

const exercises = [
  {
    name: "Box Squat",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/12/box-squat.gif",
    youtube: "https://www.youtube.com/watch?v=PEk1gG5mh7g"
  },
  {
    name: "Snatch",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/barbell-snatch.gif",
    youtube: "https://www.youtube.com/watch?v=V0b2dl00E1o"
  },
  {
    name: "Hang Snatch",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/12/hang-snatch.gif",
    youtube: "https://www.youtube.com/watch?v=Z3fB8YFpgjg"
  },
  {
    name: "Power Snatch",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2023/01/power-snatch.gif",
    youtube: "https://www.youtube.com/watch?v=nsjDnYxJ0bo"
  },
  {
    name: "Clean",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/barbell-clean.gif",
    youtube: "https://www.youtube.com/watch?v=a-gHj0QJHeo"
  },
  {
    name: "Hang Clean",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/hang-clean.gif",
    youtube: "https://www.youtube.com/watch?v=5c3gEaQDnbU"
  },
  {
    name: "Power Clean",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/power-clean.gif",
    youtube: "https://www.youtube.com/watch?v=TjA3aGfG9ak"
  },
  {
    name: "Hang Power Clean",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/hang-power-clean.gif",
    youtube: "https://www.youtube.com/watch?v=H2v8tkeMYYY"
  },
  {
    name: "Overhead Squat",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/overhead-squat.gif",
    youtube: "https://www.youtube.com/watch?v=GrB-Kz1M-7U"
  },
  {
    name: "Snatch Balance",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/12/snatch-balance.gif",
    youtube: "https://www.youtube.com/watch?v=WnFxxz7Vf4w"
  },
  {
    name: "Thruster",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/12/barbell-thruster.gif",
    youtube: "https://www.youtube.com/watch?v=cl-FR6tGBO8"
  },
  {
    name: "Cluster",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2023/01/barbell-cluster.gif",
    youtube: "https://www.youtube.com/watch?v=ujq6C3a2YJQ"
  },
  {
    name: "Push Press",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/12/barbell-push-press.gif",
    youtube: "https://www.youtube.com/watch?v=4tCaD42ghlc"
  },
  {
    name: "Back Squat",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/back-squat.gif",
    youtube: "https://www.youtube.com/watch?v=ultWZbUMPL8"
  },
  {
    name: "Front Squat",
    category: "Barbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/front-squat.gif",
    youtube: "https://www.youtube.com/watch?v=tlfGU4GksuI"
  }
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
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-4 py-2 ${
              selectedCategory === cat
                ? "bg-pink-600 text-white"
                : "bg-gray-800 text-pink-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-4 max-h-[80vh] overflow-y-auto pr-2">
        {filteredExercises.map((ex, index) => (
          <div key={index} className="bg-gray-900 rounded-2xl shadow-lg p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{ex.name}</h2>
              <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm capitalize">
                {ex.category}
              </span>
            </div>
            <img
              src={ex.image}
              alt={ex.name}
              className="w-full h-48 object-contain rounded-xl my-4"
            />
            <a href={ex.youtube} target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-pink-600 hover:bg-pink-400 text-white py-2 rounded-xl">
                Watch on YouTube
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
