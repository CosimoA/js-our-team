/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sotto forma di stringhe
*/

// MILESTONE 0:
const team = [
    {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder & CEO",
        "immagine" : "wayne-barnett-founder-ceo.jpg",
    }, {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief Editor",
        "immagine" : "angela-caroll-chief-editor.jpg",
    }, {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "immagine" : "walter-gordon-office-manager.jpg",
    }, {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "immagine" : "angela-lopez-social-media-manager.jpg",
    }, {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "immagine" : "scott-estrada-developer.jpg",
    }, {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "immagine" : "barbara-ramos-graphic-designer.jpg",
    },
];

// MILESTONE 1:

for(let element in team){
    console.log(element, team[element]);
}

