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

    const sSquare=Math.sqrt(nCelle);
    eleGrid.style.setProperty('--square',sSquare);
    for (let i=1; i<=nCelle; i++){
        const arrRandom=[];
        
        let needRandom=true;
        do{
            const numRandom= getRandomInteger(1,nCelle);
            if (!arrRandom.includes(numRandom)){
                arrRandom.push(numRandom);
                needRandom=false;

            }
        }while (needRandom)
        
            
    
        const eleCell=document.createElement('div');
        eleCell.classList.add('cell');
        eleGrid.append(eleCell);
        eleCell.innerHTML=i;
        
    
        eleCell.addEventListener('click',function(){
            this.classList.toggle('active');
        

        })

    }
    
    function getRandomInteger(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
});
