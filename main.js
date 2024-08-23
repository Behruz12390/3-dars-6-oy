let c = document.querySelector('.a');
let g = document.querySelector('.g');
let h = document.querySelector('.d');
let cc = localStorage.getItem('x');
if (cc) {
    c.innerHTML = cc;
}
g.addEventListener('click', function() {
    let inp = h.value;
    localStorage.setItem('x', inp);
    c.innerHTML = inp;
});
