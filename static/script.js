document.addEventListener("DOMContentLoaded", function() {
      
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
        
        // Get current scroll position
        let scrollY = window.pageYOffset;
        
        // Now we loop through sections to get height, top and ID values for each
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;
          sectionId = current.getAttribute("id");

          if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
          ){
            document.querySelector("#navbarSupportedContent a[href*=" + sectionId + "]").classList.add("active");
          } else {
            document.querySelector("#navbarSupportedContent a[href*=" + sectionId + "]").classList.remove("active");
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

      

});