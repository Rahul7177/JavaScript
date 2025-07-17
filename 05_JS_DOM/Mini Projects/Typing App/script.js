const starsContainer = document.createElement('div');
  starsContainer.classList.add('stars');
  document.body.appendChild(starsContainer);

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
  }

