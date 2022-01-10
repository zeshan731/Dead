const form = document.getElementById('comments');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comments').add({
       name: form.name.value,
	   email: form.email.value,
       comment: form.comment.value
    });
    form.name.value = '';
    form.email.value = '';
    form.comment.value = '';
    alert('Your review has been shared.');
});

const div = document.querySelector('.cont');
renderlist = (doc) => {
    var main_div = document.createElement('div');
    var card_body = document.createElement('div');
    var name = document.createElement('h5');
    var comment = document.createElement('p');
    main_div.setAttribute('class','card mt-3');
    card_body.setAttribute('class','card-body');
    name.setAttribute('class','card-title');
    comment.setAttribute('class','card-text');
    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;
    card_body.appendChild(name);
    card_body.appendChild(comment);
    main_div.appendChild(card_body);
    div.appendChild(main_div);
}
db.collection('comments').onSnapshot(snap => {
    const changes = snap.docChanges();
    changes.forEach(change => {
        if (change.type == 'added') {
          renderlist(change.doc);
        }
    });
});