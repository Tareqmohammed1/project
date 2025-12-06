if (window.location.hash) {
    history.replaceState(null, null, ' ');
    window.scrollTo(0, 0);
}

var navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        var targetId = this.getAttribute('href');
        var targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            var header = document.querySelector('.header');
            var headerHeight = header ? header.offsetHeight : 80;
            
            var sectionTitle = targetSection.querySelector('.section-title');
            
            var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            var targetElement = sectionTitle || targetSection;
            var elementRect = targetElement.getBoundingClientRect();
            var elementTopRelative = elementRect.top + currentScroll;
            
            var scrollPosition = elementTopRelative - headerHeight - 10;
            
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    });
});

var contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        var name = this.querySelector('[name="name"]').value.trim();
        var email = this.querySelector('[name="email"]').value.trim();
        var message = this.querySelector('[name="message"]').value.trim();
        
        if (name === '') {
            alert('Please enter your name');
            return;
        }
        
        if (email === '' || !email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }
        
        if (message === '') {
            alert('Please enter your message');
            return;
        }
        
        window.location.href = 'Thank_You.html';
    });
}

var backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'back-to-top';

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', function() {
    var scrollPos = window.scrollY;
    var windowHeight = window.innerHeight;
    var pageHeight = document.documentElement.scrollHeight;
    var distanceFromBottom = pageHeight - (scrollPos + windowHeight);
    
    var footerHeight = 150;
    
    if (scrollPos > 300 && distanceFromBottom > footerHeight) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
    
    var heroSection = document.querySelector('.hero');
    var heroHeight = 0;
    if (heroSection) {
        heroHeight = heroSection.offsetHeight;
    }
    
    if (scrollPos < heroHeight - 100) {
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        return;
    }
    
    var scrollPosWithOffset = scrollPos + 150;
    
    var sections = document.querySelectorAll('.section');
    
    var currentSection = '';
    
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.offsetHeight;
        
        if (scrollPosWithOffset >= sectionTop && scrollPosWithOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });
    
    if (currentSection) {
        var activeLink = document.querySelector('a[href="#' + currentSection + '"]');
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
