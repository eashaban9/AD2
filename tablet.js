const tabletStyle = `
html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

body {
    font-family: 'DM Sans', sans-serif;
    width: 100%;
}

/* Общи стилове за навигацията */
.navigation-header {
    width: 100%;
    padding: 2vw;
}

.navigation-max-width {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navigation-nav {
    display: flex;
    gap: 1vw;
}

.navigation-links-nav span {
    font-size: 2vw;
    margin-left: 1vw;
}

/* Основни настройки за home и портфолио секциите */
.home-container {
    width: 100%;
    padding: 0;
    margin: 0;
}

.home-portofolio {
    text-align: center;
    margin: 2vw 0;
    padding-top: 3vw;
}

.section-container {
    margin-bottom: 0;
}

.home-text, .home-text01, .home-text02 {
    display: block;
    margin: 2vw 0;
}

.home-tab-selector-header {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5vw;
    justify-content: center;
    margin-top: 3vw;
}

/* Стил за бутоните */
.tab-selector-btn a {
    text-decoration: none;
    padding: 1vw 2vw;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.home-tab-selector-cards-container {
        display: grid;
        gap: 2vw;
        grid-template-columns: repeat(2, 1fr); /* Две колони за таблети */
    }
    
    .portofolio-card-image-container img {
        width: 100%;
        border-radius: 8px;
    }

    .table-container table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 3vw;
    }
.table-container th, .table-container td {
    padding: 1vw;
    text-align: left;
    border: 1px solid #ddd;
}

/* Центриране на текста в секциите */
.home-about, .home-process {
    text-align: center;
}

.home-check-item {
    display: flex;
    align-items: center;
    gap: 1vw;
}

/* Бутоните с първичен и вторичен стил */
.button-primary, .button-secondary {
    padding: 1vw 2vw;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

`;

// Create a new style element and append the styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerHTML = tabletStyle;
document.head.appendChild(styleSheet);
