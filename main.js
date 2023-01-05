const RandomImg = () => {
  const images = [
  'nada',
  './template.jpg',
  './cat.jpg',
  './dahyun.jpg',
  './eu.jpg'
];

  const random = Math.floor(Math.random() * images.length) + 1;
  if (random == 5) {
    RandomImg();
  } else {
    const profileImage = images[random];

    document.getElementById("imgId").src = profileImage;
  }
}

window.onload = RandomImg();