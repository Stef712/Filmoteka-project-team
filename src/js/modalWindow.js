var modal = document.getElementById('myModal');

var modalTitle = document.getElementById('modalTitle');
var modalDescription = document.getElementById('modalDescription');
var modalImage = document.getElementById('modalImage');

var span = document.getElementsByClassName('close')[0];

function openModal(event) {
  var img = event.target;
  modalTitle.textContent = img.getAttribute('data-title');
  modalDescription.textContent = img.getAttribute('data-description');
  modalImage.src = img.src;
  modalImage.alt = img.alt;
  modal.style.display = 'block';
}

var images = document.getElementsByClassName('modal-trigger');
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', openModal);
}

span.onclick = function () { 
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
