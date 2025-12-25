let clients = [];

fetch("../data/clients.json")
.then(res => res.json())
.then(data => {
    clients = data;
    afficher();
});

function afficher(){
    const table = document.getElementById("clientTable");
    table.innerHTML = "";

    clients.forEach((c,i) => {
        table.innerHTML += `
        <tr>
            <td>${c.nom}</td>
            <td>${c.email}</td>
            <td>
                <button onclick="supprimer(${i})">Supprimer</button>
            </td>
        </tr>`;
    });
}

function addClient(){
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;

    if(nom && email){
        clients.push({nom,email});
        afficher();
    }
}

function supprimer(index){
    if(confirm("Supprimer ce client ?")){
        clients.splice(index,1);
        afficher();
    }
}