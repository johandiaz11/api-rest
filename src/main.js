async function getTrendingBooksPreview() {
  const res = await fetch('https://openlibrary.org/search.json?q=bestseller');
  const data = await res.json();
  const books = data.docs.slice(0, 10); // Tomamos los primeros 10 libros

  const trendingPreviewContainer = document.querySelector('#trendingPreview .trendingPreview-movieList');
  trendingPreviewContainer.innerHTML = ''; // Limpiar

  books.forEach(book => {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('movie-container');

    const bookImg = document.createElement('img');
    bookImg.classList.add('movie-img');
    bookImg.setAttribute('alt', book.title);
    bookImg.setAttribute(
      'src',
      book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : 'https://via.placeholder.com/150x220?text=No+Cover'
    );

    bookContainer.appendChild(bookImg);
    trendingPreviewContainer.appendChild(bookContainer);
  });
}

async function getBookSubjectsPreview() {
  const subjects = ['Science fiction', 'Romance', 'Mystery', 'History', 'Fantasy'];
  const categoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
  categoriesContainer.innerHTML = '';

  subjects.forEach((subject, index) => {
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', 'subject' + index);
    const categoryText = document.createTextNode(subject);

    categoryTitle.appendChild(categoryText);
    categoryContainer.appendChild(categoryTitle);
    categoriesContainer.appendChild(categoryContainer);
  });
}

getTrendingBooksPreview();
getBookSubjectsPreview();
