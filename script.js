let color = [];
let sqr = document.querySelectorAll('.square');
let newB = document.querySelector('.new');
let h2 = document.querySelector('h2[class="txt"]');
let h3 = document.querySelector('h3[class="txt"]');
let hard = document.querySelector('.hard');
let ez = document.querySelector('.ez');
let inf = document.querySelector('.inf');
let btnI = document.querySelector('.btnI');
let popC = document.querySelector('.popC');
const topD = document.querySelector('#top');
let flag = false;
let win = false;
let mode = 'hard';

function colF(){
	color = [];
	h3.textContent = '';
	topD.style.backgroundColor = 'rgb(137, 188, 144)';
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
	else(e.target.classList.remove('show'),e.target.classList.add('hide'), h3.textContent = 'Try again',window.setTimeout(function(){h3.textContent = ''},500));
}
function winF(param){
	win = true;
	console.log(param.target.style.backgroundColor);
	topD.style.backgroundColor = param.target.style.backgroundColor;
	sqr.forEach(x => x.style.backgroundColor = param.target.style.backgroundColor)
}

function hrdF(){
	mode = 'hard';
	if(flag == false){lvlI()}
	else{flag = false;
	lvlF();}
}
function ezF(){
	mode = 'easy';
	if(flag == true){lvlI()}
	else{
	flag = true;
	lvlF();}
}
function lvlI(){
	popW.style.display = 'block';
	popC.textContent = 'Note: Level is already selected!';
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
function infF(){
	popW.style.display = 'block';
	popC.textContent = 'The goal is to guess wchich square has the same color (in RGB format) as is written above.';
}
function btnIF(){
	popW.style.display = 'none';
}

document.addEventListener('load', colF());
newB.addEventListener('click',function(){let intv = window.setInterval(colF,100);
			window.setTimeout(function(){window.clearInterval(intv)},1000)});
newB.addEventListener('click',quaF);
sqr.forEach(x => x.addEventListener('click',sqrC));
hard.addEventListener('click',hrdF);
ez.addEventListener('click',ezF);
inf.addEventListener('click',infF);
btnI.addEventListener('click',btnIF);