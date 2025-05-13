import {useEffect, useRef, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WorkoutCard from "../components/WorkoutCard";


import '../styles/workout.css';

function Training() {
  const [workouts, setWorkouts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [saved, setSaved] = useState(
    () => JSON.parse(localStorage.getItem("workoutsProgress")) || []
  );

  useEffect(() => {
    fetch("/workout.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);

  const handleStart = (workout) => {
    if (saved.some((item) => item.id === workout.id)) return;
    const updated = [...saved, workout];
    localStorage.setItem("workoutsProgress", JSON.stringify(updated));
    setSaved(updated);
  };
  const filtered = workouts.filter(
    (w) => filter === "all" || w.type === filter
  );


  return (
    <>
      <Header title="My Plan"  backgroundColor="#be6674"/>
      <main>
        <section className="training-cards">
         

          <div className="filter-inline">
            <label htmlFor="filter">Фільтр тренування:</label>
            <select
              id="filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Усі</option>
              <option value="cardio">Кардіо</option>
              <option value="strength">Силові</option>
              <option value="yoga">Йога</option>
              <option value="pilates">Пілатес</option>
            </select>
          </div>



          <div className="workouts">
            {filtered.length === 0 ? (
                <p>Немає тренувань для обраного типу.</p>
            ) : (
                filtered.map((w) => (
                    <WorkoutCard
                  key={w.id}
                  workout={w}
                  isCompleted={saved.some((item) => item.id === w.id)}
                  onStart={handleStart}
                />
              ))
            )}
          </div>
        </section>
      </main>
      <Footer backgroundColor="#be6674"/>
    </>
  );
}

export default Training;