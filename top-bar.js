var navBar = document.getElementById('top-fixed-menu'),
    blocks = document.getElementsByClassName('inner-block'),
    counter = document.getElementById('counter');
    docElem = document.documentElement,
    body = document.body,
    points = [];

for (var i = 0; i < blocks.length; i++) {
  points.push(0);
  for (var j = 0; j < i; j++) {
    points[i] += blocks[j].offsetHeight;
  }
}

window.onscroll = function() {
  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  var navBarIsWhite = navBar.classList.contains('top-fixed-menu__white');
  counter.innerHTML = 'Scroll from top: ' + scrollTop;

  for (var k = 0; k < points.length - 1; k++) {
    if (k % 2 === 0 && scrollTop >= points[k] && scrollTop < points[k+1]) {
      if (navBarIsWhite) {
        continue
      }
      else {
        navBar.classList.add('top-fixed-menu__white');
        break;
      }
    }
    if (!(k % 2 === 0) && scrollTop >= points[k] && scrollTop < points[k+1]) {
      if (!navBarIsWhite) {
        continue
      }
      else {
        navBar.classList.remove('top-fixed-menu__white');
        break;
      }
    }
  }
}
