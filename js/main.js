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
// For the portfolio modal feature.
const projects = [
    {
        title: 'SASS Web Layout',
        imageLink: 'img/screenshots/modal-sass-screenshot.png',
        imageAlt: 'SASS. a CSS preprocessor, has many great features',
        description: 'Responsive SASS project demonstrating the power and flexibility of the SASS preprocessor. Featuring SASS loops, maps and functions creating a complex layout with a bare amount of code.',
        technologies: 'HTML, SASS/CSS.',
        skills: 'SASS Functions, Maps, Loops, Mixins, Variables. Using SASS partials to organise the project accordingly.',
        responsive: `&#x2714`,
        siteLink: 'https://agdc101.github.io/sass-webpage-layout/',
        githubLink: 'https://github.com/agdc101/sass-webpage-layout'
    },
    {
        title: 'Guess The Movie Game',
        imageLink: 'img/screenshots/modal-game-screenshot.png',
        imageAlt: 'you can make really cool games with javascript',
        description: 'A javascript driven movie guessing game. The game features some cool effects and allows the user 5 lives to guess the correct title. The game also allows the user to restart the game and features a losing and winning end-screen. Give it a try!',
        technologies: 'HTML, CSS, Javascript.',
        skills: 'Javascript Math methods, Array iteration, functions, loops and other JS methods.',
        responsive: `&#x2718`,
        siteLink: 'https://agdc101.github.io/wheel-of-success-game/',
        githubLink: 'https://github.com/agdc101/wheel-of-success-game'
    },
    {
        title: 'Interactive Photo Gallery',
        imageLink: 'img/screenshots/modal-gallery-screenshot.png',
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
        imageLink: 'img/screenshots/modal-dash-screenshot.png',
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
        imageLink: 'img/screenshots/modal-direct-screenshot.png',
        imageAlt: 'using the fetch api to build an awesome directory',
        description: 'An employee directory. The directory communicates with a third-party API to retrieve 12 random employees everytime the page is loaded. The page also features a modal containing more information about any specific employee. The page also has a live search bar so the user can search and filter the employees as shown in the picture!',
        technologies: 'HTML, CSS, Javascript, JSON.',
        skills: 'fetch API, async functions, then and JSON methods.',
        responsive: `&#x2714`,
        siteLink: 'https://agdc101.github.io/employee-directory/',
        githubLink: 'https://github.com/agdc101/employee-directory'
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

    let bodyHTML = `<img id='modal-pic' src=${projects[index].imageLink} alt='${projects[index].imageAlt}'>`;
    bodyHTML += `<div class='text-flex'><p><strong>Description:</strong> ${projects[index].description}</p>`;
    bodyHTML += `<span><strong>Languages:</strong> ${projects[index].technologies}</span>`;
    bodyHTML += `<p><strong>Skills/Techinques used:</strong> ${projects[index].skills}</p>`;
    bodyHTML += `<p><strong>Mobile Responsive:</strong>  ${projects[index].responsive}</p>`;
    modalBodyContent.innerHTML = bodyHTML;

    let footerIcons =  `
                        <a href=${projects[index].githubLink} class='btn btn-outline-info' target='_blank'>See the Code</a>
                        <a href=${projects[index].siteLink} class='btn btn-outline-info' target='_blank'>See it Live</a>`;  
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
/*-------------- sticky footer functionality --------------*/
/* if the main content of the page is visible = hide the footer! */
const main = document.querySelector('main');
const appearOptions = {
    threshold: .2,
    rootMargin: '100px 0px 0px 0px'
}
const appearFooter = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            stickyFooter.classList.toggle('slide');
            stickyFooter.style.opacity = '1';
           
        } else {
            stickyFooter.classList.toggle('slide');
        }
    });
},appearOptions);

appearFooter.observe(main);

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