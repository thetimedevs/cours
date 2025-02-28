document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.querySelector('.btnMenu').addEventListener('click', function() {
    document.querySelector('menu').classList.toggle("open")

    const icon = this.querySelector('i');
    icon.classList.toggle('rotating'); // Ajoute ou supprime la classe "rotating"
    
    // Alterne entre "fa-bars" et "fa-xmark"
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
        document.querySelector('html').style = "overflow: hidden"
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
        document.querySelector('html').style = ""
    }
})

// Gestion des clics sur les liens pour fermer le menu
document.querySelectorAll('.linkMenu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('html').style = ""
        if(document.querySelector('menu').classList.contains('open')) document.querySelector('menu').classList.toggle("open")
        const menu = document.querySelector('.linkMenu');
        menu.classList.remove('open'); // Ferme le menu

        // Remet l'icône à l'état initial (barres)
        const icon = document.querySelector('.btnMenu i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
        icon.classList.toggle('rotating');
    });
});

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY; // Position actuelle de défilement
    const arrow = document.querySelector('.arrow'); // Sélectionne l'élément avec la classe .arrow
    arrow.style.opacity = 1 - scrollTop / 500; // Calcule et applique l'opacité
    
    if (window.scrollY > 20) {
        document.querySelector('menu').classList.add('sticky');
    } else {
        document.querySelector('menu').classList.remove('sticky');
    }
});

document.querySelector('.arrow').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({ behavior:'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 100,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#6366f1"
      },
      "shape": {
          "type": "circle"
      },
      "opacity": {
          "value": 0.5,
          "random": false
      },
      "size": {
          "value": 3,
          "random": true
      },
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": false,
              "mode": "grab"
          },
          "onclick": {
              "enable": false,
              "mode": "push"
          },
          "resize": true,
      }
  },
  "retina_detect": true
});
