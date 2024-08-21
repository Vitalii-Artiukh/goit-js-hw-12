import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { fetchToPixabay } from './js/pixabay-api';
import { createGalleryCard } from './js/render-functions';

const formSerched = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const preloader = document.querySelector('.preloader-wrap');

const forRefresh = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 150,
});

const submitSearchPhoto = event => {
  preloader.classList.remove('is-visible');
  event.preventDefault();

  const searchResault = formSerched.elements.user_query.value;

  fetchToPixabay(searchResault)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
          maxWidth: '432px',
          messageColor: '#fafafb',
          messageSize: '16px',
          messageLineHeight: '150%',
        });
      }

      const photoCardsInfo = data.hits
        .map(details => createGalleryCard(details))
        .join('');

      gallery.innerHTML = photoCardsInfo;
      preloader.classList.add('is-visible');
      forRefresh.refresh();
    })
    .catch(error => {
      preloader.classList.add('is-visible');
      iziToast.info({
        title: `${error}`,
        position: 'center',
        backgroundColor: '#ef4040',
      });
      console.log(error);
    });

  formSerched.reset();
};
preloader.classList.add('is-visible');

formSerched.addEventListener('submit', submitSearchPhoto);
