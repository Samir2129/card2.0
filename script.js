
document.getElementById('photoInput').addEventListener('change', function(e) {
  const reader = new FileReader();
  reader.onload = function(ev) {
    const img = document.getElementById('photoPreview');
    img.src = ev.target.result;
    img.style.display = 'block';
  };
  reader.readAsDataURL(e.target.files[0]);
});
function downloadCard() {
  html2canvas(document.getElementById('card')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'birthday-card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
function shareWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('Check out this card! ' + url);
  window.open('https://wa.me/?text=' + text, '_blank');
}
