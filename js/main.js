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
const portfolioProjects = document.querySelectorAll('.listener');
/*-------------- Projects array ---------------*/
//-- burger menu functionality
const burger = document.querySelector('.hamburger');

burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    document.querySelector('nav').style.position = 'none';
    document.querySelector('#nav_overlay').classList.toggle('slide');
})
const burgerLinks = document.querySelectorAll('#nav_overlay a');

burgerLinks.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('#nav_overlay').classList.toggle('slide');
        burger.classList.toggle('is-active');
    });
})

// For the portfolio modal feature.
const projects = [
    {
        title: 'SASS Web Layout',
        gifLink: 'img/gifs/sass.gif',
        imageAlt: 'SASS. a CSS preprocessor, has many great features',
        description: 'Responsive SASS project demonstrating the power and flexibility of the SASS preprocessor. Featuring SASS loops, maps and functions creating a complex layout with a bare amount of code.',
        technologies: 'HTML, SASS/CSS.',
        skills: 'SASS Functions, Maps, Loops, Mixins, Variables. Using SASS partials to organise the project accordingly.',
        responsive: `&#x2714`,
        siteLink: 'https://agdc101.github.io/sass-webpage-layout/',
        githubLink: 'https://github.com/agdc101/sass-webpage-layout'
    },
    {
        title: 'Phrase Hunter',
        gifLink: 'img/gifs/phrase_hunter.gif',
        imageAlt: 'you can make really cool games with javascript',
        description: 'A javascript driven phrase guessing game. The game allows the user 5 lives to guess the correct phrase. The game also allows the user to restart the game and features a losing and winning end-screen. Give it a try!',
        technologies: 'HTML, CSS, Javascript.',
        skills: 'Javasript Classes, Javascript Math methods, Array iteration, functions, loops and other JS methods.',
        responsive: `&#x2718`,
        siteLink: 'https://agdc101.github.io/phrase_hunter/',
        githubLink: 'https://github.com/agdc101/phrase_hunter'
    },
    {
        title: 'Interactive Photo Gallery',
        gifLink: 'img/gifs/gallery.gif',
        imageAlt: 'wonderful photo gallery snapshot',
        description: 'Responsive interactive photo gallery built and driven with the Jquery framework. Photos can be filtered and searched for using a live search-bar and a Jquery plug-in is used for the carousel modal. The modal is interactive and allows the user to scroll through the images.',
        technologies: 'HTML, CSS/SASS, Jquery.',
        skills: 'Jquery caroussel plug-in, Jquery animation methods, functions, CSS animations.',
        responsive: `&#x2714`,
        siteLink: 'https://agdc101.github.io/interactive-photo-gallery/',
        githubLink: 'https://github.com/agdc101/interactive-photo-gallery'

    },
    {
        title: 'Web App Dashboard',
        gifLink: 'img/gifs/dashboard.gif',
        imageAlt: 'a mockup design of a web app dashboard. many cool interactive features',
        description: 'This is a web app dashboard design. The page demonstrates the interactivity that Javascript can bring to web pages. There is a notification icon which displays some example notifications and an alert message. The Javascript graphs allows for great user interactivity.',
        technologies: 'HTML, CSS, Jquery.',
        skills: 'Javascript graphs, local storage, switch statements, CSS grid layout.',
        responsive: `&#x2714`,
        siteLink: 'https://agdc101.github.io/dashboard/',
        githubLink: 'https://github.com/agdc101/dashboard'
    },
    {
        title: 'Employee Directory',
        gifLink: 'img/gifs/directory.gif',
        imageAlt: 'using the fetch api to build an awesome directory',
        description: 'An employee directory. The directory communicates with a third-party API to retrieve 12 random employees everytime the page is loaded. The page also features a modal containing more information about any specific employee. The page also has a live search bar so the user can search and filter the employees as shown in the picture!',
        technologies: 'HTML, CSS, Javascript, JSON.',
        skills: 'fetch API, async functions, then and JSON methods.',
        responsive: `&#x2714`,
        siteLink: 'https://agdc101.github.io/employee-directory/',
        githubLink: 'https://github.com/agdc101/employee-directory'
    },
    {
        title: 'Javascript Form Validation',
        gifLink: 'img/gifs/form.gif',
        imageAlt: 'javascript is a very useful language for validating forms.',
        description: 'An example project of how javascipt can be used to effectively validate all types of form entries, which is especially important for people with accessibility issues.',
        technologies: 'HTML, CSS, Javascript.',
        skills: 'HTML forms, Javascript Regular Expressions.',
        responsive: `&#x2714`,
        siteLink: 'https://agdc101.github.io/interactive_form/ ',
        githubLink: 'https://github.com/agdc101/interactive_form'
    },
    {
        title: 'Movie Guessing Game',
        gifLink: 'img/gifs/movie-game.gif',
        imageAlt: 'a gif demonstrating a movie guessing game.',
        description: 'Guess the movie! a hangman-style movie guessing game allowing the user five lives to guess the correct title. I plan on improving this project by utilising an API so that a larger database of movies can be used.',
        technologies: 'HTML, CSS, Javascript.',
        skills: 'Javascript Math methods, Array iteration, functions, loops and other JS methods.',
        responsive: `&#x2714`,
        siteLink: 'https://agdc101.github.io/wheel-of-success-game/',
        githubLink: 'https://github.com/agdc101/wheel-of-success-game'
    },
    {
        title: 'Firebase',
        gifLink: 'img/gifs/firebase.gif',
        imageAlt: 'a gif displaying a page based around firebase.js.',
        description: 'a fully responsive mock page layout for a new Javascript framework called Firebase.js. Firebase.js is a new fictional Javascript framework.',
        technologies: 'HTML, CSS.',
        skills: 'Responsive CSS, Design.',
        responsive: `&#x2714`,
        siteLink: 'https://agdc101.github.io/firebase.js_web_page/',
        githubLink: 'https://github.com/agdc101/firebase.js_web_page'
    }
]
/*-------------- --------------------------- --------------*/
/*-------------- portfolio modal functionality --------------*/
/* iterating through the 'projects' array of objects to fill the modal! */
portfolioDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        let index = e.target.getAttribute('data-index');
        modal.style.padding = '0';
        buildModal(index);
    }
});

const buildModal = (index) => {
    let headerHTML = `<span>${projects[index].title}</span>`;
    headerHTML += `<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>`;
    modalHeader.innerHTML = headerHTML;

    let bodyHTML = `<img id='modal-pic' src=${projects[index].gifLink} alt='${projects[index].imageAlt}'>`;
    bodyHTML += `<div class='text-flex'><p><strong>Description:</strong><br> ${projects[index].description}</p>`;
    bodyHTML += `<span><strong>Languages:</strong><br> ${projects[index].technologies}</span>`;
    bodyHTML += `<p><strong>Skills/Techinques:</strong><br> ${projects[index].skills}</p>`;
    bodyHTML += `<p><strong>Mobile Responsive:</strong>  ${projects[index].responsive}</p>`;
    modalBodyContent.innerHTML = bodyHTML;

    let footerIcons =  `
                        <a href=${projects[index].githubLink} class='btn btn-light' target='_blank'>See the Code</a>
                        <a href=${projects[index].siteLink} class='btn btn-light' target='_blank'>See it Live</a>`;  
    modalFooter.innerHTML = footerIcons;                
};
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
/* if the page is refreshed the user is taken back to the top of the page, so that the 
 sticky footer intersect does not break! */
window.onbeforeunload = () => {  
    window.scrollTo(0, 0);   
};

/*--------------- --------------- ---------------*/
/*-------------- Open live project --------------*/
// this opens the live project if the user clicks anywhere in the project divs.
for (let j = 0; j < portfolioProjects.length; j += 1) {
        portfolioProjects[j].addEventListener('click', (e) => {
            if(e.target.tagName != 'BUTTON' && window.screen.width >= 1024)
                window.open(projects[j].siteLink);
    });
}
/*------------------- --------------------- --------------------*/
/*-------------- project images slide in function --------------*/
const slideOptions = {
    threshold: 0.4
};
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-back');
            appearOnScroll.unobserve(entry.target)
           
        } else {
            return;
        }
    });
}, slideOptions)

portfolioProjects.forEach(project => {
    appearOnScroll.observe(project)
});