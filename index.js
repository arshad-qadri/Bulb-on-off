const btn = document.getElementById('btn');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const bgColor = document.getElementById('container');
btn.addEventListener('click', () => {
  if (img1.style.display === 'block' || btn.innerText === 'ON') {
    img1.style.display = 'none';
    img2.style.display = 'block';
    btn.innerHTML = 'OFF';
  } else {
    img1.style.display = 'block';
    img2.style.display = 'none';
    btn.innerHTML = 'ON';
  }
});
