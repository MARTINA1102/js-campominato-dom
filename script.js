/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

const eleGrid=document.querySelector('.grid');
const elePlay= document.querySelector ('.play');
const eleIstruzioni= document.querySelector ('.istruzioni');
const eleScelta= document.querySelector ('.choise');
const eleScelta1= document.querySelector ('.choise1');
const eleScelta2= document.querySelector ('.choise2');
const eleScelta3= document.querySelector ('.choise3');
let arrMines;



elePlay.addEventListener('click', function(){
    eleGrid.innerHTML='';
    eleGrid.classList.remove('hidden');
    eleIstruzioni.classList.add('hidden');

    /*let nCelle;
    switch (eleScelta.value) {
        case 'livello1':
            nCelle=100;
            break;
        case 'livello2':
            nCelle=81 
            break;
        case 'livello3':
            nCelle=49 
            break;
        
    }*/
    let nCelle= parseInt(eleScelta.value);
    arrMines= generateMines(16,1,nCelle);

    const sSquare=Math.sqrt(nCelle);
    eleGrid.style.setProperty('--square',sSquare);
    for (let i=1; i<=nCelle; i++){
          
        const eleCell=document.createElement('div');
        eleCell.classList.add('cell');
        eleGrid.append(eleCell);
        eleCell.innerHTML=i;
        
    
        eleCell.addEventListener('click',toggleCell);

    } 
});
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function toggleCell(){
    const cellNumber=parseInt(this.innerHTML);
    if (arrMines.includes(cellNumber)){
        this.classList.add('mine');
        const listCells=eleGrid.querySelectorAll('.cell');
        for(let i=0;i<listCells.length;i++){
            const cellNumber=parseInt(listCells[i].innerHTML);
            if(arrMines.includes(cellNumber)){
                listCells[i].classList.add('mine');
            }
            listCells[i].removeEventListener('click',toggleCell);
        }
    }else {
        this.classList.add('no-mine');
    }
}

function generateMines(nMines,min,max){
    const arrRandoms=[];
    for (let i = 1; i <= 16; i++) {    
        do {
            randomNumber = getRandomInteger(min,max ); 
        } while (arrRandoms.includes(randomNumber))
        arrRandoms.push(randomNumber);
    }
    return arrRandoms;
}

