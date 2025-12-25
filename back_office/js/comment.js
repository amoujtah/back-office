// Exemple de données
const clients = [
  { "id": 1, "nom": "Ali", "email": "ali@gmail.com" },
  { "id": 2, "nom": "Sara", "email": "sara@gmail.com" },
  { "id": 3, "nom": "Karim", "email": "karim@gmail.com" },
  { "id": 4, "nom": "Laila", "email": "laila@gmail.com" },
  { "id": 5, "nom": "Youssef", "email": "youssef@gmail.com" }
];

const produits = [
  { "id": 1, "nom": "Produit 1", "prix": 50 },
  { "id": 2, "nom": "Produit 2", "prix": 30 },
  { "id": 3, "nom": "Produit 3", "prix": 20 }
];

const ventes = [
  { "id": 1, "produitId": 1, "quantite": 2 },
  { "id": 2, "produitId": 2, "quantite": 1 },
  { "id": 3, "produitId": 3, "quantite": 5 }
];

// Calculs
const totalClients = clients.length;
const totalProduits = produits.length;
const totalVentes = ventes.reduce((sum, vente) => sum + vente.quantite, 0);

// Affichage dans le dashboard
document.addEventListener("DOMContentLoaded", () => {
    // Total Customers
    const totalCustomersChart = document.getElementById("totalCustomersChart");
    totalCustomersChart.parentElement.querySelector("h3").textContent = `Total Customers: ${totalClients}`;

    // Total Products
    const totalProductsChart = document.getElementById("totalProductsChart");
    totalProductsChart.parentElement.querySelector("h3").textContent = `Total Products: ${totalProduits}`;

    // Total Sales
    const totalSalesChart = document.getElementById("totalSalesChart");
    totalSalesChart.parentElement.querySelector("h3").textContent = `Total Sales: ${totalVentes}`;
});
