document.addEventListener('DOMContentLoaded', () => {
    const startRecordBtn = document.getElementById('start-record-btn');
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoList = document.getElementById('todo-list');

    // Initialize Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onstart = () => {
        console.log('Voice recognition activated. Try speaking into the microphone.');
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        todoInput.value = transcript;
        console.log('You said: ', transcript);
    };

    recognition.onerror = (event) => {
        console.error('Error occurred in recognition: ' + event.error);
    };

    startRecordBtn.addEventListener('click', () => {
        recognition.start();
    });

    addTodoBtn.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const li = document.createElement('li');
            li.textContent = todoText;
            todoList.appendChild(li);
            todoInput.value = ''; // Clear input
        }
    });
});