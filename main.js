// chiedere all'utente qual'é il suo nome
var name = prompt("Inserisci il tuo nome");
console.log(name);

// chiedere all'utente qual'é il suo cognome
var surname = prompt("Inserisci il tuo cognome");
console.log(surname);

// chiedere all'utente qual'é il suo colore preferito
var favourite_color = prompt("Inserisci il tuo colore preferito");
console.log(favourite_color);

// generare la password come somma
var unsafe_password = name + surname + favourite_color + "20";
console.log(unsafe_password);

//inserisco la password creata nel html tramite un elemento già presente
document.getElementById("password").innerHTML = unsafe_password;

//rendo il contenuto della pagina invisibile durante l'inserimento dei dati richiesti nel prompt
document.getElementById("password-container").setAttribute("class", "visible");
