// exporte suas funções

export const createUser = (email, password) => {
    // seu código aqui

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in
            // ...
            console.log('Deu certo!');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });

};

export const loginUser = (email, password) => {
    // seu código aqui

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('login deu certo')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });

};