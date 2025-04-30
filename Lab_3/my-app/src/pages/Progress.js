import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProgressChart from "../components/ProgressChart";

function Progress() {
  const [workouts, setWorkouts] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    fetch("/workouts.json")
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(data);
        const saved = JSON.parse(localStorage.getItem("workoutsProgress")) || [];
     
        const completedFiltered = saved.filter(savedItem =>
          data.some(workout => workout.id === savedItem.id)
        );
        setCompleted(completedFiltered);
      });
  }, []);

  return (
    <>
      <Header title="Мій прогрес" />
      <main className="progress-page">
        <ProgressChart total={workouts} completed={completed} />
      </main>
      <Footer />
    </>
  );
}

export default Progress;
