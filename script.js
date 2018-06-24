let color = [];
let sqr = document.querySelectorAll('.square');
let newB = document.querySelector('.new');
let h2 = document.querySelector('h2[class="txt"]');
let hard = document.querySelector('.hard');
let ez = document.querySelector('.ez');
let flag = false;

function colF(){
	color = [];
	for(let m=0;m<6;m++){
		let cl1 = Math.floor(Math.random()*255);
		let cl2 = Math.floor(Math.random()*255);
		let cl3 = Math.floor(Math.random()*255);

		let newCol = 'rgb(' + cl1 + ', ' + cl2 + ', ' + cl3 + ')'
		color.push(newCol);
	}
	sqr.forEach((x,m) => (x.style.backgroundColor = color[m]));
	h2.textContent = color[1].toUpperCase();
}

function sqrC(e){
	if(e.target.style.backgroundColor.toUpperCase() == h2.textContent){console.log('win')}
	else(console.log('try again'));
}

function hrdF(){
	flag = false;
	lvlF();
}
function ezF(){
	flag = true;
	lvlF();
}

function lvlF(){
	sqr.forEach(x => x.classList.remove('hide','show'));
	if(flag){
		for(let m=3;m<6;m++){
			sqr[m].classList.add('hide');
		}
	}else{
		for(let m=3;m<6;m++){
			sqr[m].classList.add('show');
		}
	}
	
}

document.addEventListener('load', colF());
newB.addEventListener('click',colF);
sqr.forEach(x => x.addEventListener('click',sqrC));
hard.addEventListener('click',hrdF);
ez.addEventListener('click',ezF);