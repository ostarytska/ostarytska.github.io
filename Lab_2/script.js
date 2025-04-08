// Завантажуємо дані з workouts.json
fetch('workouts.json')
    .then(response => response.json())
    .then(workouts => {
        const workoutList = document.getElementById('workout-list'); // Знаходимо контейнер для тренувань

        // Отримуємо дані з локального сховища (якщо є)
        const savedProgress = JSON.parse(localStorage.getItem('workoutsProgress')) || [];

        // Створюємо картки для кожного тренування
        workouts.forEach((workout, index) => {
            const workoutCard = document.createElement('div');
            workoutCard.classList.add('workout');

            // Перевіряємо, чи тренування вже виконано
            const isCompleted = savedProgress.includes(workout.title);

            // Створюємо HTML вміст картки тренування
            workoutCard.innerHTML = `
                <iframe width="270" height="160" src="${workout.videoUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>${workout.title}</h3>
                <p>${workout.description}</p>
                <p><strong>Калорії:</strong> ${workout.calories}</p>
                <p><strong>Тривалість:</strong> ${workout.duration}</p>
                <button class="start-btn" ${isCompleted ? 'disabled' : ''}>${isCompleted ? 'Тренування розпочато' : 'Почати тренування'}</button>
            `;

            // Додаємо обробник події для кнопки "Почати тренування"
            const startBtn = workoutCard.querySelector('.start-btn');
            startBtn.addEventListener('click', () => {
                // Зміна тексту кнопки на "Тренування розпочато"
                startBtn.textContent = 'Тренування розпочато';
                
                // Зміна кольору кнопки на сірий
                startBtn.style.backgroundColor = 'grey';
                
                // Оновлюємо статус у JSON об'єкті
                workouts[index].status = 'Тренування розпочато';

                // Оновлюємо прогрес
                savedProgress.push(workout.title);
                localStorage.setItem('workoutsProgress', JSON.stringify(savedProgress));

                // Оновлюємо прогрес-бар
                updateProgressBar(savedProgress.length, workouts.length);
                updateProgressSummary(savedProgress.length, workouts);
            });

            workoutList.appendChild(workoutCard); // Додаємо картку на сторінку
        });
    })
    .catch(error => {
        console.error('Помилка при завантаженні даних:', error);
    });

// Функція для оновлення прогрес-бару
function updateProgressBar(completed, total) {
    const progressBar = document.getElementById('progress-completed');
    const progressPercent = (completed / total) * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressBar.textContent = `${Math.round(progressPercent)}% виконано`;
}

// Функція для оновлення статистики (час, калорії)
function updateProgressSummary(completed, workouts) {
    const totalWorkouts = workouts.length;
    const totalDuration = workouts.reduce((sum, workout, index) => savedProgress.includes(workout.title) ? sum + workout.duration : sum, 0);
    const totalCalories = workouts.reduce((sum, workout, index) => savedProgress.includes(workout.title) ? sum + workout.calories : sum, 0);

    document.getElementById('completed-count').textContent = completed;
    document.getElementById('total-workouts').textContent = totalWorkouts;
    document.getElementById('total-duration').textContent = totalDuration;
    document.getElementById('total-calories').textContent = totalCalories;

    // Оновлення прогрес-бару для часу
    const progressTime = document.getElementById('progress-time');
    const timePercent = (totalDuration / (totalWorkouts * 50)) * 100; // Припустимо, середня тривалість тренування 50 хвилин
    progressTime.style.width = `${timePercent}%`;
    progressTime.textContent = `${Math.round(timePercent)}%`;

    // Оновлення прогрес-бару для калорій
    const progressCalories = document.getElementById('progress-calories');
    const caloriesPercent = (totalCalories / (totalWorkouts * 1250)) * 100; // Припустимо, середня кількість калорій 1250
    progressCalories.style.width = `${caloriesPercent}%`;
    progressCalories.textContent = `${Math.round(caloriesPercent)}%`;
}
