document.addEventListener('DOMContentLoaded', function() {

    initApp();
});

function initApp() {

    initData();

    initCharts();

    loadBooks();
    loadAuthors();
    loadFavorites();
    loadApiSuggestions();
    
    // Mise à jour des KPI
    updateKPIs();
    
    // Configuration des événements
    setupEventListeners();
    
    // Configuration de la navigation SPA
    setupNavigation();
}

// Données initiales
function initData() {
    // Vérifier si les données existent dans le localStorage
    if (!localStorage.getItem('bibliotheca_books')) {
        // Données initiales de livres
        const initialBooks = [
            {
                id: 1,
                title: "Harry Potter à l'école des sorciers",
                authorId: 1,
                genre: "Fantaisie",
                year: 1997,
                isbn: "978-8492312423",
                status: "available",
                favorite: true
            },
            {
                id: 2,
                title: "Le Hobbit",
                authorId: 2,
                genre: "Fantaisie",
                year: 1937,
                isbn: "978-8451812127",
                status: "borrowed",
                favorite: false
            },
            {
                id: 3,
                title: "Le Trône de fer",
                authorId: 3,
                genre: "Fantaisie",
                year: 1996,
                isbn: "978-8451343548",
                status: "available",
                favorite: true
            },
            {
                id: 4,
                title: "La Ballade de l'impossible",
                authorId: 4,
                genre: "Fiction",
                year: 1987,
                isbn: "978-847736842",
                status: "available",
                favorite: false
            },
            {
                id: 5,
                title: "Les Misérables",
                authorId: 5,
                genre: "Fiction Historique",
                year: 1862,
                isbn: "978-8451435439",
                status: "reserved",
                favorite: false
            }
        ];
        
        localStorage.setItem('bibliotheca_books', JSON.stringify(initialBooks));
    }
    
    if (!localStorage.getItem('bibliotheca_authors')) {
        // Données initiales d'auteurs
        const initialAuthors = [
            {
                id: 1,
                name: "J.K. Rowling",
                nationality: "Britannique",
                birthYear: 1965,
                bio: "Auteure britannique célèbre pour la série Harry Potter."
            },
            {
                id: 2,
                name: "J.R.R. Tolkien",
                nationality: "Britannique",
                birthYear: 1882,
                bio: "Écrivain, poète, philologue et professeur universitaire britannique, auteur du Hobbit et du Seigneur des Anneaux."
            },
            {
                id
