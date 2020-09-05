/*-------------- Variables ---------------*/
const portfolioDiv = document.querySelector('.port-sect');
const modalHeader = document.querySelector('.modal-header');
const modalBodyContent = document.querySelector('.modal-body');
const modalFooter = document.querySelector('.modal-footer');
const modal = document.getElementById('exampleModal');
const hideStickySects = document.querySelectorAll('.hide-sticky');
const stickyFooter = document.querySelector('.sticky-footer');
const navButtons = document.querySelectorAll('.nav-button');
const navLinks = document.querySelectorAll('.navigate');

/*-------------- Projects array ---------------*/
// For the portfolio modal feature.
const projects = [
    {
        title: 'SASS Web Layout',
        imageLink: 'img/screenshots/modal-sass-screenshot.png',
        imageAlt: 'SASS. a CSS preprocessor, has many great features',
        description: 'Responsive SASS project demonstrating the power and flexibility of the SASS preprocessor. Featuring SASS loops, maps and functions creating a complex layout with a bare amount of code.',
        technologies: 'HTML, SASS/CSS.',
        siteLink: 'https://agdc101.github.io/sass-webpage-layout/',
        githubLink: 'https://github.com/agdc101/sass-webpage-layout'
    },
    {
        title: 'Guess The Movie Game',
        imageLink: 'img/screenshots/modal-game-screenshot.png',
        imageAlt: 'you can make really cool games with javascript',
        description: 'A javascript driven movie guessing game! The game allows the user 5 lives to guess the correct title. Give it a try!',
        technologies: 'HTML, CSS, Javascript.',
        siteLink: 'https://agdc101.github.io/wheel-of-success-game/',
        githubLink: 'https://github.com/agdc101/wheel-of-success-game'
    },
    {
        title: 'Interactive Photo Gallery',
        imageLink: 'img/screenshots/modal-gallery-screenshot.png',
        imageAlt: 'wonderful photo gallery snapshot',
        description: 'Responsive interactive photo gallery driven using the Jquery framework. Photos can be filtered and searched using a search-bar and a Jquery plug-in is used for the carousel modal',
        technologies: 'HTML, CSS, Jquery.',
        siteLink: 'https://agdc101.github.io/interactive-photo-gallery/',
        githubLink: 'https://github.com/agdc101/interactive-photo-gallery'

    },
    {
        title: 'Web App Dashboard',
        imageLink: 'img/screenshots/modal-dash-screenshot.png',
        imageAlt: 'a mockup design of a web app dashboard. many cool interactive features',
        description: 'Responsive dashboard web app featuring Javascript graphs, local storage, and utilises CSS grid for its layout. This dashboard mock-up shows how fun and interactive javascript can make websites.',
        technologies: 'HTML, CSS, Jquery.',
        siteLink: 'https://agdc101.github.io/dashboard/',
        githubLink: 'https://github.com/agdc101/dashboard'
    },
    {
        title: 'Employee Directory',
        imageLink: 'img/screenshots/modal-direct-screenshot.png',
        imageAlt: 'using the fetch api to build an awesome directory',
        description: 'Responsive directory that communicates with a third-party API to retrieve 12 random employee profiles. Also features a modal which contains additional information on each employee.',
        technologies: 'HTML, CSS, Javascript.',
        siteLink: 'https://agdc101.github.io/employee-directory/',
        githubLink: 'https://github.com/agdc101/employee-directory'
    }
]
/*-------------- --------------------------- --------------*/
/*-------------- portfolio modal functionality --------------*/
portfolioDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let index = e.target.getAttribute('data-index');
        modal.style.padding = '0';
        buildModal(index);
    }
})

const buildModal = (index) => {
    let headerHTML = `<span>${projects[index].title}</span>`;
    headerHTML += `<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>`;
    modalHeader.innerHTML = headerHTML;

    let bodyHTML = `<img id='modal-pic' src=${projects[index].imageLink} alt='${projects[index].imageAlt}'>`;
    bodyHTML += `<p><strong>Description:</strong> ${projects[index].description}</p>`;
    bodyHTML += `<span><strong>Technologies used:</strong> ${projects[index].technologies}</span>`;
    modalBodyContent.innerHTML = bodyHTML;

    let footerIcons =  `<a href=${projects[index].githubLink} target='_blank'><img src='img/icons/github-modal.png' alt='github logo'></a>
                        <a href=${projects[index].siteLink} target='_blank'><img src='img/icons/internet-icon.png' alt='the internet'></a>`;  
    modalFooter.innerHTML = footerIcons;                
}
/*-------------- --------------------------- --------------*/
/*-------------- smooth scroll functionality --------------*/
for (let j = 0; j < navButtons.length; j += 1) {
    navButtons[j].addEventListener('click', (e) => {
        e.preventDefault();
            navLinks[j].scrollIntoView({ 
                behavior: 'smooth', block: 'end'
            });        
    });
}
/*-------------- --------------------------- --------------*/
/*-------------- sticky footer functionality --------------*/
// window.onbeforeunload = () => {  
//         window.scrollTo(0, 0);   
// }
const appearOptions = {
    rootMargin: '-200px 0px 0px 0px'
}
const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            stickyFooter.classList.toggle('slide');
           
        } else {
            stickyFooter.classList.toggle('slide');
        }
    })
}, appearOptions)
hideStickySects.forEach(section =>{
    appearOnScroll.observe(section);
})