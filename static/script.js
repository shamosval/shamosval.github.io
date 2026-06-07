// Mark JS as available so CSS can safely hide-then-reveal scroll content
document.documentElement.classList.add('js');

document.addEventListener("DOMContentLoaded", function() {

      // Footer copyright year
      const yearEl = document.getElementById('year');
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
      }

      //Enable tooltips

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
     



      //Clicking on sandwich menu item collapses the menu
      const navLinks = document.querySelectorAll('.nav-item'); 
      const menuToggle = document.getElementById('navbarSupportedContent'); 
      const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false}); 
      navLinks.forEach( function(l) { 
            l.addEventListener('click', function() { 
                  if (menuToggle.classList.contains('show')) { 
                        bsCollapse.toggle(); 
                  } 
            }); 
      }); 


      // Get all sections that have an ID defined
      const sections = document.querySelectorAll("section[id]");



      // Add an event listener listening for scroll
      window.addEventListener("scroll", navHighlighter);



      function navHighlighter() {

        // Detection point sits just below the fixed navbar, matching the
        // sections' scroll-margin-top so anchor jumps land on the right link.
        const scrollPos = window.pageYOffset + 90;

        // Now we loop through sections to get height, top and ID values for each
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop;
          const sectionId = current.getAttribute("id");
          const link = document.querySelector("#navbarSupportedContent a[href*=" + sectionId + "]");
          if (!link) return;

          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }



      // Get all elements with class "carousel-item"
        const images = document.querySelectorAll('.carousel-item');

        // Add event listener to each image using a forEach loop
        images.forEach((image) => {
          const caption = image.querySelector('.carousel-caption');

          image.addEventListener('click', function(event) {

            const clickedElement = event.target;
            const isCaptionClicked = clickedElement === caption || caption.contains(clickedElement);


            if (isCaptionClicked) {
              return;
            }

            // Toggle the 'd-none' class to show/hide the caption
            caption.classList.toggle('d-none');

            // Loop through all images and hide their captions except for the clicked one
            images.forEach((item) => {
              if (item !== image) {
                const otherCaption = item.querySelector('.carousel-caption');
                otherCaption.classList.add('d-none');
              }
            });
          });
        });


      // Scroll-reveal: fade/slide elements in as they enter the viewport
      const revealEls = document.querySelectorAll(
        '.section-head, #certifications .carousel, #experience .card, #skills .card'
      );

      if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

        revealEls.forEach(el => revealObserver.observe(el));
      } else {
        // Fallback: just show everything
        revealEls.forEach(el => el.classList.add('in-view'));
      }

});