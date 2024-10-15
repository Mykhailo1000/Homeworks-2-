import { saveFeedback } from './feedback';

document.getElementById('feedback-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const feedback = { name, email, message };
    saveFeedback(feedback);

    document.getElementById('success-message').classList.remove('hidden');
    event.target.reset();
});
