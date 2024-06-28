document.body.addEventListener('click', () => {
    const initialContent = document.getElementById('initial-content');
    const newContent = document.getElementById('new-content');

    initialContent.classList.add('fade');
    setTimeout(() => {
        initialContent.style.display = 'none';
        newContent.style.display = 'block';
        setTimeout(() => {
            newContent.style.opacity = '1';
        }, 10);
    }, 1000);
});
