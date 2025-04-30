import React from "react";


function ProgressChart({ total, completed }) {
  const percent = (value, max) => (max === 0 ? 0 : Math.round((value / max) * 100));

  const completedDuration = completed.reduce((s, w) => s + w.duration, 0);
  const totalDuration = total.reduce((s, w) => s + w.duration, 0);

  const completedCalories = completed.reduce((s, w) => s + w.calories, 0);
  const totalCalories = total.reduce((s, w) => s + w.calories, 0);

  return (
    <section className="progress-container">
      <section className="progress-summary">
        <h2>Загальна статистика</h2>
        <p>Всього тренувань: <strong>{total.length}</strong></p>
        <p>Тривалість тренувань: <strong>{totalDuration} хв</strong></p>
        <p>Спалено калорій: <strong>{totalCalories} ккал</strong></p>
      </section>

      <section className="progress-summary">
        <h2>Мій прогрес</h2>
        <p>Виконані тренування: <strong>{completed.length}</strong> / <span>{total.length}</span></p>
        <p>Загальний час: <strong>{completedDuration} хв</strong></p>
        <p>Спалені калорії: <strong>{completedCalories} ккал</strong></p>

        <h3>Прогрес</h3>
        <p>Виконано:</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${percent(completed.length, total.length)}%` }}>
            {percent(completed.length, total.length)}%
          </div>
        </div>

        <p>Час:</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${percent(completedDuration, totalDuration)}%` }}>
            {percent(completedDuration, totalDuration)}%
          </div>
        </div>

        <p>Калорії:</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${percent(completedCalories, totalCalories)}%` }}>
            {percent(completedCalories, totalCalories)}%
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProgressChart;
