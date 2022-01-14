
const form = document.getElementById('messages');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('messages').add({
       name: form.name.value,
       email: form.email.value,
       message: form.message.value
    });
    form.name.value = '';
    form.email.value = '';
    form.message.value = '';
     alert ('Your message has been sent');
}); 