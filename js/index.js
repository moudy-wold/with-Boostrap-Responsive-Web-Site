let portofoliolinks = document.querySelectorAll('.portofolio .navbar ul li a'),
    portofolioBoxsImg = document.querySelectorAll('.portofolio .row .imgs-container'),
    portofolioRow = document.querySelector('.portofolio .row'),
    links = document.querySelectorAll('a'),
    lis = document.querySelectorAll('li'),
    navbarLinks = document.querySelectorAll('.header ul li a');
// aboutLink = document.querySelector('.about-link'),
// portofolioLink = document.querySelector('.portofolio-link'),
// teamLink = document.querySelector('.team-link'),
// contactUsLink = document.querySelector('.contact-us-link');

// preventDefault on All Link
function prevDefa(alo) {
    alo.forEach(al => {
        al.onclick = function(e) {
            e.preventDefault();
        }
    })
}
prevDefa(links);
prevDefa(lis);

// set link scroll

navbarLinks.forEach((link) => {
    link.onclick = function() {
        console.log(this.innerHTML)
        scroll({
            top: document.querySelector('.' + this.innerHTML).offsetTop,
            behavior: "smooth"
        })

    }

})


// Set Works Section
portofoliolinks.forEach((link) => {
    link.onclick = function() {

        // Delete All ACtive Class From All Links
        for (let i = 0; i < portofoliolinks.length; i++) {
            portofoliolinks[i].classList.remove('active');
        }
        // Add Active Class 
        this.classList.add("active");
        // Loop on Imgs
        portofolioBoxsImg.forEach(e => {
            e.style.display = "block"
            if (e.dataset.title !== this.innerHTML) {
                e.style.display = "none";
            }
            if (this.innerHTML == "All") {
                e.style.display = "block"
            }
        })
    }
})