let grafico = document.querySelector(".grafico");
let botao = document.querySelector("button");
let radio = document.querySelectorAll(".radio");

botao.addEventListener("click", function () {
  if (radio[(0, 1, 2, 3, 4, 5)].checked) {
    grafico.setAttribute("src", "../assets/img/graficos/geral.jpg");
  } else if (radio[0].checked) {
    grafico.setAttribute("src", "../assets/img/graficos/moradia.png");
  } else if (radio[1].checked) {
    grafico.setAttribute("src", "../assets/img/graficos/Educacao.png");
  } else if (radio[2].checked) {
    grafico.setAttribute("src", "../assets/img/graficos/alimentacao.png");
  } else if (radio[3].checked) {
    grafico.setAttribute("src", "../assets/img/graficos/saude.png");
  } else if (radio[4].checked) {
    grafico.setAttribute("src", "../assets/img/graficos/investimento.png");
  } else if (radio[5].checked) {
    grafico.setAttribute("src", "../assets/img/graficos/mobilidade.png");
  } else {
    console.log("teste");
  }
});
