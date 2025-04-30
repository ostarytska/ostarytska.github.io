import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";


function Journal() {
  const savedWorkouts =
    JSON.parse(localStorage.getItem("workoutsProgress")) || [];

  return (
    <>
      <Header title="Журнал тренувань" />
      <main>
        <section className="training-cards">
          <div className="workouts">
            {savedWorkouts.length > 0 ? (
              savedWorkouts.map((w, i) => (
                <div key={i} className="workout">
                  <iframe
                    width="270"
                    height="160"
                    src={w.videoUrl}
                    title={w.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                  <p>
                    <strong>Калорії:</strong> {w.calories}
                  </p>
                  <p>
                    <strong>Тривалість:</strong> {w.duration} хв
                  </p>
                  <button className="start-btn" disabled>
                    Тренування розпочато
                  </button>
                </div>
              ))
            ) : (
              <p>Ще немає збережених тренувань.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Journal;
