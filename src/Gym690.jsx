
import React, { useState } from "react";

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
  },
  {
    name: "Russian Twist",
    category: "Kettlebell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/12/russian-twist.gif",
    youtube: "https://www.youtube.com/watch?v=wkD8rjkodUI"
  },
  {
    name: "Goblet Squat",
    category: "Kettlebell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/goblet-squat.gif",
    youtube: "https://www.youtube.com/watch?v=6xwGFn-J_QA"
  },
  {
    name: "Alt. Snatch",
    category: "Dumbbell",
    image: "https://www.inspireusafoundation.org/wp-content/uploads/2022/12/dumbbell-snatch.gif",
    youtube: "https://www.youtube.com/watch?v=YzZySZ6E_1M"
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
  const [selectedCategory, setSelectedCategory] = useState("Dumbbell");

  const filteredExercises = exercises.filter(
    (ex) => ex.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div style={{ backgroundColor: "black", color: "#ff69b4", minHeight: "100vh", padding: "1rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "1.5rem" }}>Gym690</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              backgroundColor: selectedCategory === cat ? "#ff69b4" : "#333",
              color: selectedCategory === cat ? "white" : "#ff69b4",
              border: "none",
              borderRadius: "999px",
              padding: "0.5rem 1rem",
              cursor: "pointer"
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div style={{ maxHeight: "70vh", overflowY: "auto", display: "grid", gap: "1rem", paddingRight: "0.5rem" }}>
        {filteredExercises.map((ex, index) => (
          <div key={index} style={{ backgroundColor: "#1f1f1f", borderRadius: "1rem", padding: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>{ex.name}</h2>
              <span style={{ backgroundColor: "#ff69b4", color: "white", borderRadius: "9999px", padding: "0.25rem 0.75rem" }}>
                {ex.category}
              </span>
            </div>
            <img
              src={ex.image}
              alt={ex.name}
              style={{ width: "100%", height: "200px", objectFit: "contain", marginTop: "1rem", borderRadius: "0.5rem" }}
            />
            <a href={ex.youtube} target="_blank" rel="noopener noreferrer">
              <button style={{ marginTop: "1rem", width: "100%", backgroundColor: "#ff69b4", color: "white", padding: "0.5rem", borderRadius: "0.5rem" }}>
                Watch on YouTube
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
