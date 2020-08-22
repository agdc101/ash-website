
const modalHeader = document.querySelector('.modal-header');
const modalBody = document.querySelector('.modal-body');
const dashboardDiv = document.querySelector('.dashboard-portfolio');
let modalHTML = '';
let modalHeaderHTML = ``;

const projects = [
    {
        title: 'SASS Web Layout',
        imageLink: 'img/screenshots/dashboard.png',
        description: 'A web app dashboard project built as part of my techdegree with Treehouse,This project is mobile responsive and is layed out using CSS grid methods It also features interactive Javasript graphs local storage and other fun interactions',
        technologies: 'HTML, CSS.'                   
    },
    {
        title: 'Guess The Movie Title Game',
        imageLink: 'img/screenshots/game.png',
        description: 'A javascript driven movie guessing game! The game allows the user 5 lives to guess the correct title. Give it a try!',
        technologies: 'HTML, CSS, Javascript.'
    },
    {
        title: 'Interactive Photo Gallery',
        imageLink: 'img/screenshots/gallery.png',
        description: 'An interactive photo gallery driven using the Jquery framework. Photos can be filtered and searched using a search-bar and a Jquery plug-in is used for the carousel modal',
        technologies: 'HTML, CSS, Jquery.'

    }
]


dashboardDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const index = e.target.getAttribute('data-index');
        console.log(index);
        buildModal(index);
    }
})
// const modalButton = `<button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                      <span aria-hidden="true">&times;</span>`;
const buildModal = (index) => {
    modalHeaderHTML = `${projects[index].title}`;
    modalHTML = ``;
}