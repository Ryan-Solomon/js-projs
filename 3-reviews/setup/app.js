// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

// Elements
const containerElement = document.querySelector('.container');

// Variables
let reviewIdx = 0;

// Event Listeners
window.addEventListener('load', () => {
  createReview();
});

// Functions

function updateIndex(direction) {
  if (direction === 'prev') {
    reviewIdx = reviewIdx === 0 ? reviews.length - 1 : reviewIdx - 1;
  } else if (direction === 'next') {
    reviewIdx = reviewIdx === reviews.length - 1 ? 0 : reviewIdx + 1;
  } else if (direction === 'random') {
    reviewIdx = Math.floor(Math.random() * reviews.length);
  }
  createReview();
}

function createReview() {
  console.log('Creating Review!');
  containerElement.innerHTML = '';
  const { id, name, job, img, text } = reviews[reviewIdx];
  // Article Container
  const articleContainer = document.createElement('article');
  articleContainer.classList.add('review');
  // Image Container & Image
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');
  const imageElement = document.createElement('img');
  imageElement.src = img;
  imageElement.id = 'person-img';
  imageElement.alt = name;
  imageContainer.append(imageElement);
  articleContainer.append(imageContainer);
  // Other Details
  const nameElement = document.createElement('h4');
  nameElement.id = 'author';
  nameElement.textContent = name;
  const jobElement = document.createElement('p');
  jobElement.id = 'job';
  jobElement.textContent = job;
  const infoElement = document.createElement('p');
  infoElement.id = 'info';
  infoElement.textContent = text;
  articleContainer.append(nameElement, jobElement, infoElement);
  // Buttons
  const buttonContainer = document.createElement('button-container');
  buttonContainer.classList.add('button-container');
  const prevBtn = document.createElement('button');
  prevBtn.classList.add('prev-btn');
  prevBtn.addEventListener('click', () => updateIndex('prev'));
  const iconEle = document.createElement('i');
  iconEle.classList.add(['fas', 'fa-chevron-left']);
  prevBtn.append(iconEle);
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next';
  nextBtn.addEventListener('click', () => updateIndex('next'));
  nextBtn.classList.add('next-btn');
  const iconEle2 = document.createElement('i');
  iconEle.classList.add(['fas', 'fa-chevron-right']);
  prevBtn.append(iconEle2);
  prevBtn.textContent = 'Prev';
  buttonContainer.append(prevBtn, nextBtn);
  const surpriseBtn = document.createElement('button');
  surpriseBtn.classList.add('random-btn');
  surpriseBtn.textContent = 'surprise me';
  articleContainer.append(buttonContainer, surpriseBtn);
  surpriseBtn.addEventListener('click', () => updateIndex('random'));

  containerElement.append(articleContainer);
}
