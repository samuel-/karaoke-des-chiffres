const loop = false;
let i = -1;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const startKaraoke = () => nextChiffre();

function nextChiffre(){
  i++;
  let line = seq[i];
  let affichage = line[0];
  let tempo = line[1];
  if (line.length > 2 && line[2]==true) 
    chiffresDiv.classList.add("blink");
  else 
    chiffresDiv.classList.remove("blink");
  chiffresDiv.innerHTML = affichage;
  if (i < seq.length - 1){
    setTimeout(nextChiffre,tempo);
  }
}
