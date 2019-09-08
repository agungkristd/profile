const url = location.pathname;
const nav = document.querySelectorAll('a');
nav.forEach((link) => {
  const href = link.href.match(/(\/\w*.html?)+/g)[0];
  if (url.indexOf(href) >= 0) {
    link.className = 'active';
  }
});