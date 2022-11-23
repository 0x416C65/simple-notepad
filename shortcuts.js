window.addEventListener('keydown', function (event) {
  // CLEAR
  if (event.ctrlKey && event.shiftKey && event.code === 'KeyL') {
    document.body.innerHTML = '';
    localStorage.clear();
  }
});
