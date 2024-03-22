import { POST_DATA } from './post.js';

document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('cardContainer');
    const filterButtons = document.querySelectorAll('.filterButton');
    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    const showCards = (cards) => {
        cardContainer.innerHTML = '';
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `
            <container class="containerCard">
            <img class="card-image" src="${card.image}">
            <div class="card-header">${card.header}</div>
            <div class="card-categories">${card.categories.join(', ')}</div>
            <div class="card-description">${truncateText(card.description, 50)}</div>
                <a href="${card.link}" class="readMoreButton">Read more</a>
            </container>
            `;
            cardContainer.appendChild(cardElement);
        });
    }

    showCards(POST_DATA);

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            const filteredCards = POST_DATA.filter(card => card.categories.includes(category));
            showCards(filteredCards);
        });
    });
});
