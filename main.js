const loop = false;

//const keys = Object.keys(seq);
let i = -1;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const startKaraoke = () => nextChiffre();

function nextChiffre(){
  i++;
  let affichage = seq[i][0];
  let tempo = seq[i][1];
  console.log(affichage, tempo);
  chiffresDiv.innerHTML = affichage;
  if (i < seq.length - 1){
    setTimeout(nextChiffre,tempo);
  }
}
