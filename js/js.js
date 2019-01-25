const google = document.getElementById('google');
const github = document.getElementById('github');

google.onclick = function () {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function (user) {

    }).catch(function (error) {
        console.log(error);
    });
}

github.onclick = function () {
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).then(function (user) {
        
    }).catch(function (error) {
        consolel.log(error);
    });
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log('Logado!');
        console.log(user);
    } else {
        console.log('Deslogado!');
    }
    loading.style.display = 'none';
});