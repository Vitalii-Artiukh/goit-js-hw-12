const pixabayURL = 'https://pixabay.com/api/'; // URL
const myKeyPixabay = '45488193-7ca777789e7fbcf45aeeb8195'; // key='***'

export const fetchToPixabay = questEntered => {
  const urlOptions = new URLSearchParams({
    key: myKeyPixabay,
    q: questEntered,
    image_type: 'photo',
    safesearch: true,
    orientation: 'horizontal',
  });

  return fetch(`${pixabayURL}?${urlOptions}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
