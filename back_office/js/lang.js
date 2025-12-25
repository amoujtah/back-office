class LanguageManager {
    constructor() {
        this.lang = localStorage.getItem("lang") || "en";

        this.translations = {
            en: {
                dashboard: "Dashboard",
                customers: "Customers",
                orders: "Orders",
                products: "Products",
                add_product: "Add Product",
                logout: "Logout",
                total_expenses: "Total Expenses",
                total_income: "Total Income",
                total_sales: "Total Sales",
                last_24h: "Last 24 Hours",
                recent_orders: "Recent Orders",
                show_all: "Show All"
            },
            fr: {
                dashboard: "Tableau de bord",
                customers: "Clients",
                orders: "Commandes",
                products: "Produits",
                add_product: "Ajouter un produit",
                logout: "Déconnexion",
                total_expenses: "Dépenses totales",
                total_income: "Revenus totaux",
                total_sales: "Ventes totales",
                last_24h: "Dernières 24 heures",
                recent_orders: "Commandes récentes",
                show_all: "Tout afficher"
            },
            ar: {
                dashboard: "لوحة التحكم",
                customers: "العملاء",
                orders: "الطلبات",
                products: "المنتجات",
                add_product: "إضافة منتج",
                logout: "تسجيل الخروج",
                total_expenses: "إجمالي المصاريف",
                total_income: "إجمالي الدخل",
                total_sales: "إجمالي المبيعات",
                last_24h: "آخر 24 ساعة",
                recent_orders: "الطلبات الأخيرة",
                show_all: "عرض الكل"
            }
        };

        this.apply();
        this.bind();
    }

    bind() {
        const select = document.getElementById("lang-select");
        select.value = this.lang;

        select.addEventListener("change", (e) => {
            this.lang = e.target.value;
            localStorage.setItem("lang", this.lang);
            this.apply();
        });
    }

    apply() {
        document.querySelectorAll("[data-i18n]").forEach(el => {
            el.textContent = this.translations[this.lang][el.dataset.i18n];
        });

        document.documentElement.dir = this.lang === "ar" ? "rtl" : "ltr";
    }
}

new LanguageManager();
