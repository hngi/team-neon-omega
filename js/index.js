const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const closeMobileBtn = document.querySelector('.close-mobile-nav-btn');
const navigation = document.querySelector('.navbar-nav');

toggleBtn.addEventListener('click', function () {
  navigation.style.display = 'flex';
  closeMobileBtn.style.display = 'flex';
});

closeBtn.addEventListener('click', function () {
  navigation.style.display = 'none';
  closeMobileBtn.style.display = 'none';
});
