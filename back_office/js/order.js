const tbody = document.querySelector('table tbody');

function afficher(data) {
    tbody.innerHTML = '';
    data.forEach(order => {
        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        tdName.textContent = order.productName;
        tr.appendChild(tdName);

        const tdNumber = document.createElement('td');
        tdNumber.textContent = order.productNumber;
        tr.appendChild(tdNumber);

        const tdPayment = document.createElement('td');
        tdPayment.textContent = order.payment;
        tr.appendChild(tdPayment);

        const tdStatus = document.createElement('td');
        tdStatus.textContent = order.status;
        tdStatus.classList.add('status', order.status.toLowerCase());
        tr.appendChild(tdStatus);

        const tdDetails = document.createElement('td');
        tdDetails.textContent = 'Details';
        tdDetails.classList.add('primary');
        tdDetails.addEventListener('click', () => {
            alert(`Produit: ${order.productName}\nNuméro: ${order.productNumber}\nPaiement: ${order.payment}\nStatus: ${order.status}`);
        });
        tr.appendChild(tdDetails);

        tbody.appendChild(tr);
    });
}

// Charger le JSON
fetch('./data/product.json')
    .then(res => res.json())
    .then(data => {
        afficher(data); // affiche les 10 produits
    })
    .catch(err => console.error('Erreur:', err));
