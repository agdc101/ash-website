
const modalHeader = document.querySelector('.modal-header');
const modalBodyContent = document.querySelector('.modal-body');
const portfolioDiv = document.getElementById('portfolio');

const projects = [
    {
        title: 'SASS Web Layout',
        imageLink: 'img/screenshots/dashboard.png',
        imageAlt: 'SASS. a CSS preprocessor, has many great features',
        description: 'Description: Responsive SASS project demonstrating the power and flexibility of the SASS preprocessor. Featuring SASS loops, maps and functions creating a complex layout with a bare amount of code.',
        technologies: 'HTML, SASS.' 
    },
    {
        title: 'Guess The Movie Title Game',
        imageLink: 'img/screenshots/game.png',
        imageAlt: 'you can make really cool games with javascript',
        description: 'Description: A javascript driven movie guessing game! The game allows the user 5 lives to guess the correct title. Give it a try!',
        technologies: 'HTML, CSS, Javascript.'
    },
    {
        title: 'Interactive Photo Gallery',
        imageLink: 'img/screenshots/gallery.png',
        imageAlt: 'wonderful photo gallery snapshot',
        description: 'Description: Responsive interactive photo gallery driven using the Jquery framework. Photos can be filtered and searched using a search-bar and a Jquery plug-in is used for the carousel modal',
        technologies: 'HTML, CSS, Jquery.'

    },
    {
        title: 'Web App Dashboard',
        imageLink: 'img/screenshots/dash.png',
        imageAlt: 'a mockup design of a web app dashboard. many cool interactive features',
        description: 'Description: Responsive dashboard web app featuring Javascript graphs, local storage, and utilises CSS grid for its layout. This dashboard mock-up shows how fun and interactive javascript can make websites.',
        technologies: 'HTML, CSS, Jquery.'
    },
    {
        title: 'Employee Directory',
        imageLink: 'img/screenshots/directory.png',
        imageAlt: 'using the fetch api to build an awesome directory',
        description: 'Description: Responsive directory that communicates with a third-party API to retrieve 12 random employee profiles. Also features a modal which contains additional information on each employee.',
        technologies: 'HTML, CSS, Javascript.'
    }
]

portfolioDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let index = e.target.getAttribute('data-index');
        buildModal(index);
    }
})

const buildModal = (index) => {
    console.log(`${projects[index].title}`);
    let headerHTML = `<h5>${projects[index].title}</h5>`;
    headerHTML += `<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>`;
    modalHeader.innerHTML = headerHTML;

    let bodyHTML = `<img id='modal-pic' src=${projects[index].imageLink} alt='${projects[index].imageAlt}'>`;
    modalBodyContent.innerHTML = bodyHTML;
}