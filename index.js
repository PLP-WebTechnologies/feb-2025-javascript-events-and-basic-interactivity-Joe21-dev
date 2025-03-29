document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const formMessage = document.getElementById('formMessage');
    const formSuccess = document.getElementById('formSuccess');
    
    formMessage.textContent = '';
    formSuccess.classList.add('hidden');

    if (!name || !email) {
        formMessage.textContent = 'Please fill in all fields.';
        return;
    }

    formSuccess.classList.remove('hidden');
});

document.getElementById('toggleButton').addEventListener('click', function() {
    const paragraph = document.getElementById('toggleParagraph');
    paragraph.classList.toggle('hidden');
});