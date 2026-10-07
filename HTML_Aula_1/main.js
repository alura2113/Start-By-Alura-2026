const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2027-01-05T00:00:00");
const tempoObjetivo2 = new Date("2027-04-05T00:00:00");
const tempoObjetivo3 = new Date("2027-10-05T00:00:00");
const tempoObjetivo4 = new Date("2028-02-05T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundos = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  if (tempoFinal > 0) {
    return [dias, horas, minutos, segundos];
  } else {
    return [0, 0, 0, 0];
  }
}

function atualizaCronometro() {
  document.getElementById("dias0").textContent = calculaTempo(tempos[1])[0];
  document.getElementById("horas0").textContent = calculaTempo(tempos[1])[1];
  document.getElementById("min0").textContent = calculaTempo(tempos[1])[2];
  document.getElementById("seg0").textContent = calculaTempo(tempos[1])[3];
  for (let i = 0; i < contadores.length; i++) {
    document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
    document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
    document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
    document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
    const valores = calculaTempo(tempos[i]);
    const numeros = contadores[i].querySelectorAll(".contador-digito-numero");

    if (numeros.length === 4) {
      numeros[0].textContent = valores[0]; // dias
      numeros[1].textContent = valores[1]; // horas
      numeros[2].textContent = valores[2]; // minutos
      numeros[3].textContent = valores[3]; // segundos
    }
  }
}


function comecaCronometro() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
}

comecaCronometro();



