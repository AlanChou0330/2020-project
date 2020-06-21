const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');

const backdrop = document.getElementById('backdrop');

const startAddMovieButton = document.querySelector('header button');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMMovieButton = cancelAddMovieButton.nextElementSibling;
// console.log('cancelAddMovieButton', cancelAddMovieButton);
// console.log('confirmAddMMovieButton', confirmAddMMovieButton);

const userInputs = addMovieModal.querySelectorAll('input');

const entryTextSection = document.getElementById('entry-text');

const movies = [];

const edit = document.getElementById('edit');

var aaa = 8;

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'black';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const renderNewMovieElement = (title, web, content, aaa) => {
  const newMovieElement = document.createElement('div');
  newMovieElement.className = 'col-md-6 col-lg-4 mb-5 mb-lg-5';
  newMovieElement.innerHTML = `
  <div id="${aaa}"class="ftco-media-1">
    <div class="ftco-media-1-inner">
      <a href="" class="d-inline-block mb-4"
        ><img
          width="500px"
          height="100px"
          src="${web}"
          alt="Free website template by Free-Template.co"
          class="img-fluid"
      /></a>
      <div class="container ftco-media-details">
        <h3>${title}</h3>
        <p>${content}</p>
        <br />
        <div class="btn-group">
          <a href=""
            ><button
              width="50px"
              height="10px"
              class="btn btn-danger"
              type="button"
            >
              Go
            </button></a
          >
          <button
            id="edit"
            onclick="editCard(${aaa});"
            width="500px"
            height="100px"
            class="btn btn-warning"
            type="button"
          >
            <a><i class="far fa-edit"></i></a>
          </button>
          <button
            id="delete"
            onclick="deleteCard(${aaa});"
            width="500px"
            height="100px"
            class="btn btn-success"
            type="button"
          >
            <a><i class="fas fa-trash-alt"></i></a>
          </button>
        </div>
      </div>
    </div>
  </div>w w 
  `;
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
  updateUI();
  aaa++;
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const webValue = userInputs[1].value;
  const contentValue = userInputs[2].value;
  // console.log(titleValue, contentValue.webValue);

  if (
    titleValue.trim() === '' ||
    contentValue === '' ||
    webValue === '' ||
    +webValue < 1 ||
    +webValue > 5
  ) {
    alert('Please enter valid value (web between 1 to 5)');
    return;
  }

  const newMovie = {
    title: titleValue,
    web: webValue,
    content: contentValue,
  };

  movies.push(newMovie);
  // console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.web, newMovie.content, aaa);
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);

cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMMovieButton.addEventListener('click', addMovieHandler);

function deleteCard(id) {
  var rowToDelete = document.getElementById(id);
  rowToDelete.remove();
}

// const renderNewMovieElement2 = (title, web, content, id, img, h3, p) => {
//   const Element = document.createElement('a');
//   Element.className = 'd-inline-block mb-4';
//   Element.innerHTML = `
//   <img
//     width="500px"
//     height="100px"
//     src="${web}"
//     alt="Free website template by Free-Template.co"
//     class="img-fluid"
//   />
//   `;
// };

function editCard(id, img, h3, p) {
  var Element1 = document.getElementById('img1');
  var Element2 = document.getElementById('h31');
  var Element3 = document.getElementById('p1');
  Element1.remove();
  Element2.remove();
  Element3.remove();

  toggleMovieModal();
  const titleValue = userInputs[0].value;
  const webValue = userInputs[1].value;
  const contentValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    contentValue === '' ||
    webValue === '' ||
    +webValue < 1 ||
    +webValue > 5
  ) {
    return;
  }

  const Element = document.createElement('a');
  Element.className = 'd-inline-block mb-4';
  Element.innerHTML = `
  <img  
    width="500px"
    height="100px"
    src="${web}"
    alt="Free website template by Free-Template.co"
    class="img-fluid"
  />
  `;
  const listRoot2 = document.getElementById('AAA');
  listRoot2.firstChild.append(Element);
  updateUI();
  // const newMovie = {
  //   title: titleValue,
  //   web: webValue,
  //   content: contentValue,
  // };
  // movies.push(newMovie);
  // console.log(movies);

  // renderNewMovieElement2(titleValue, webValue, contentValue, id, img, h3, p);
}
