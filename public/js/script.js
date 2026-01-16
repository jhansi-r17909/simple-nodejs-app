window.addEventListener('DOMContentLoaded', () => {
    const tasks = document.querySelectorAll('.task-list li');
    tasks.forEach((task, index) => {
        task.style.opacity = 0;
        setTimeout(() => {
            task.style.transition = 'opacity 0.5s ease-in';
            task.style.opacity = 1;
        }, index * 100);
    });
});