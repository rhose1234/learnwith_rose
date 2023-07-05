window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;');
    } else {
      navbar.classList.remove('box-shadow:none');
    }
  });
                                