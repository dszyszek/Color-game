let color = ['#782ea5','#305cad','#2ca56d','#86a530','#a59330','#a8421f'];
let sqr = document.querySelectorAll('.square');

sqr.forEach((x,m) => (x.style.backgroundColor = color[m]))