document.addEventListener('DOMContentLoaded', function () {
  const contactLink = document.querySelector('.contact-link');
  const contactBox = document.getElementById('contact-box');

  contactLink.addEventListener('click', function () {
      contactBox.style.display = 'block';
  });

  document.querySelector('.close-link').addEventListener('click', function () {
      contactBox.style.display = 'none';
  });

  // Met en pause/reprend l'animation lorsqu'on clique sur une pochette
  var rewindBlocks = document.querySelectorAll('.rewind_block');

  rewindBlocks.forEach(function (block) {
      block.addEventListener('click', function () {
          toggleAnimation(this.id);
      });
  });
});

// Ajoutez une classe 'paused' pour indiquer que l'animation est en pause
function toggleAnimation(recordId) {
  var record = document.getElementById(recordId);

  if (record.classList.contains('paused')) {
      record.classList.remove('paused');
  } else {
      record.classList.add('paused');
  }
}

function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
  setTimeout(function () {
      modal.classList.add("show");
  }, 10); // Ajoutez une légère pause pour permettre l'effet de transition
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(function () {
      modal.style.display = "none";
  }, 300); // Laissez le temps à la transition de fondu de se terminer
}

// Close modal if clicked outside the content
window.onclick = function (event) {
  var modals = document.getElementsByClassName("modal");
  for (var i = 0; i < modals.length; i++) {
      var modal = modals[i];
      if (event.target == modal) {
          closeModal(modal.id);
      }
  }
};
