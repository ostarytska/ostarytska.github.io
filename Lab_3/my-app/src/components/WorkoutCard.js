import React from 'react';
function WorkoutCard({ workout, onStart, isCompleted }) {
    return (
      <div className="workout">
        <iframe
          width="270"
          height="160"
          src={workout.videoUrl}
          title={workout.title}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        <h3>{workout.title}</h3>
        <p>{workout.description}</p>
        <p><strong>Калорії:</strong> {workout.calories}</p>
        <p><strong>Тривалість:</strong> {workout.duration} хв</p>
        <button className="start-btn" disabled={isCompleted} onClick={() => onStart(workout)}>
          {isCompleted ? 'Тренування розпочато' : 'Почати тренування'}
        </button>
      </div>
    );
  }
  
  export default WorkoutCard;
  