// document.addEventListener("DOMContentLoaded", function() {
//     const gallery = document.querySelector('.gallery');
//     let scrollAmount = 0;
//     let isHovering = false;
//     let scrollInterval;
  
//     function scrollGallery() {
//       if (isHovering) {
//         scrollAmount += 10; // Changer cette valeur pour ajuster la vitesse du défilement
//         if (scrollAmount > gallery.scrollWidth - gallery.offsetWidth - 2) {
//           // Si le défilement dépasse le bord droit de la dernière image, revenir au début
//           scrollAmount = 0;
//         }
//         gallery.style.transform = `translateX(-${scrollAmount}px)`;
//       }
//     }
  
//     // Déclencher le défilement lorsque la souris survole la galerie
//     gallery.addEventListener('mouseenter', function() {
//       isHovering = true;
//       scrollInterval = setInterval(scrollGallery, 50); // Interval plus court pour un défilement plus lent
//     });
  
//     // Arrêter le défilement lorsque la souris quitte la galerie
//     gallery.addEventListener('mouseleave', function() {
//       isHovering = false;
//       clearInterval(scrollInterval); // Arrêter l'intervalle lors de la sortie de la souris
//     });
//   });
  