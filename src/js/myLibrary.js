import { getFromStorage } from './setGetLocalStorage';
import { openFilmModal } from './openFilmModal';

let isEventAttached = false;

function handleCardClick(event) {
  const clickedCard = event.target.closest('.movie-wrapper__card');
  if (clickedCard) {
    const filmId = clickedCard.getAttribute('data-filmid');
    const filmObject = getFromStorage(filmId);
    if (filmObject && filmObject.data) {
      openFilmModal(filmObject.data.data, filmObject.html);
    }
  }
}

function handleLibraryOrQueueClick(event) {
  event.preventDefault();

  const watched = document.querySelector('.watched');
  const movie = document.querySelector('.movie');
  const paginationContainer = document.getElementById('pagination-container');
  const headerSearchForm = document.querySelector('.search-form');
  const watchedQueueContainers = document.querySelectorAll(
    '.watched-queue-container'
  );
  const libraryContainer = document.querySelector('.library-container');
  const siteNavButtons = document.querySelectorAll('.site-nav-button');
  const myLibraryBtn = document.querySelector('.site-nav-item.my-library-btn');

  
  if (watched) watched.innerHTML = '';
  if (movie) movie.innerHTML = '';
  if (paginationContainer) paginationContainer.style.display = 'none';
  if (headerSearchForm) headerSearchForm.style.display = 'none';
  if (myLibraryBtn) myLibraryBtn.style.display = 'none';
  watchedQueueContainers.forEach(
    container => (container.style.display = 'flex')
  );
  siteNavButtons.forEach(button => (button.style.display = 'flex'));
  libraryContainer.style.display = 'flex';

  const queueDiv = document.querySelector('.queue');
  if (queueDiv) {
    queueDiv.innerHTML = '';
    queueDiv.style.display = 'grid';
    movie.style.display = 'none';
    watched.style.display = 'none';
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const filmObject = getFromStorage(key);
      
      if (filmObject && filmObject.isInQueue) {
        queueDiv.innerHTML += filmObject.html;
      }
    }
   

    if (!isEventAttached) {
      document
        .querySelector('.library-container')
        .addEventListener('click', handleCardClick);
      isEventAttached = true;
    }
  }

 
  setMinimumHeightForContainer(queueDiv);
}

function handleWatchedClick(event) {
  event.preventDefault();

  const watched = document.querySelector('.watched');
  const movie = document.querySelector('.movie');
  const queue = document.querySelector('.queue');

  
  if (movie) movie.innerHTML = '';
  if (queue) queue.innerHTML = '';

  
  if (watched) {
    movie.style.display = 'none'; 
    watched.innerHTML = '';
    watched.style.display = 'grid'; 
    queue.style.display = 'none';

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const filmObject = getFromStorage(key);

      
      if (filmObject && filmObject.isWatched) {
        watched.innerHTML += filmObject.html; 
      }
    }
  }
    if (!isEventAttached) {
       document
         .querySelector('.library-container')
         .addEventListener('click', handleCardClick);
       isEventAttached = true;
     }

  
  setMinimumHeightForContainer(watched);
}


export function setupMyLibraryLink() {
  const myLibraryLink = document.querySelector('a[data-request="library"]');
  const queueLink = document.querySelector('a[data-request="queue"]');
  const watchedLink = document.querySelector('a[data-request="watched"]');

  if (myLibraryLink)
    myLibraryLink.addEventListener('click', handleLibraryOrQueueClick);
  if (queueLink) queueLink.addEventListener('click', handleLibraryOrQueueClick);
  if (watchedLink) watchedLink.addEventListener('click', handleWatchedClick);
}

function setMinimumHeightForContainer(container) {
  let headerHeight = 0;
  let footerHeight = 0;
  const header = document.querySelector('header');
  if (header) headerHeight = header.offsetHeight;
  const footer = document.querySelector('footer');
  if (footer) footerHeight = footer.offsetHeight;
  const windowHeight = window.innerHeight;
  const minHeight = windowHeight - headerHeight - footerHeight;
  if (container) container.style.minHeight = `${minHeight}px`;
}
