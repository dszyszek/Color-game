let color = [];
let sqr = document.querySelectorAll('.square');
let newB = document.querySelector('.new');
let h2 = document.querySelector('h2[class="txt"]');
let h3 = document.querySelector('h3[class="txt"]');
let hard = document.querySelector('.hard');
let ez = document.querySelector('.ez');
const topD = document.querySelector('#top');
let flag = false;
let win = false;
let mode = 'hard';


function colF(){
	color = [];
	h3.textContent = '';
	topD.style.backgroundColor = '#0f6354';
	for(let m=0;m<6;m++){
		let cl1 = Math.floor(Math.random()*255);
		let cl2 = Math.floor(Math.random()*255);
		let cl3 = Math.floor(Math.random()*255);

		let newCol = 'rgb(' + cl1 + ', ' + cl2 + ', ' + cl3 + ')'
		color.push(newCol);
	}
	sqr.forEach((x,m) => (x.style.backgroundColor = color[m]));
	if(mode == 'hard'){h2.textContent = color[Math.floor(Math.random()*6)].toUpperCase()}
	else{h2.textContent = color[Math.floor(Math.random()*3)].toUpperCase()}
}
function quaF(){
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

function sqrC(e){
	if(e.target.style.backgroundColor.toUpperCase() == h2.textContent){h3.textContent = 'You win!',winF(e)}
	else(e.target.classList.remove('show'),e.target.classList.add('hide'), h3.textContent = 'Try again',window.setTimeout(function(){h3.textContent = ''},1000));
}
function winF(param){
	win = true;
	console.log(param.target.style.backgroundColor);
	topD.style.backgroundColor = param.target.style.backgroundColor;
	sqr.forEach(x => x.style.backgroundColor = param.target.style.backgroundColor)
}

function hrdF(){
	mode = 'hard';
	if(flag == false){alert('Note: Level is already selected!')}
	else{flag = false;
	lvlF();}
}
function ezF(){
	mode = 'easy';
	if(flag == true){alert('Note: Level is already selected!')}
	else{
	flag = true;
	lvlF();}
}

function lvlF(){
	sqr.forEach(x => x.classList.remove('hide','show'));
	btnC();
	quaF();
	colF();
}
function btnC(){
	if(flag){
	ez.style.backgroundColor = '#112d1e';
	hard.style.backgroundColor = '#19422c';
	}else{
	ez.style.backgroundColor = '#19422c';
	hard.style.backgroundColor = '#112d1e';
	}
}

document.addEventListener('load', colF());
newB.addEventListener('click',colF);
newB.addEventListener('click',quaF);
sqr.forEach(x => x.addEventListener('click',sqrC));
hard.addEventListener('click',hrdF);
ez.addEventListener('click',ezF);