document.addEventListener('DOMContentLoaded', () => {

  let button = document.querySelector('button');

  let vyhry1 = 0;
  let vyhry2 = 0;

  const vyhravaNad = {
    0: [2, 3],
    1: [0, 4],
    2: [1, 3],
    3: [1, 4],
    4: [0, 2]
  };

  function vyhral(h1, h2) {
    return vyhravaNad[h1].includes(h2);
  }

  function aktualizujSkore() {
    skore.innerHTML =
      "<span class='cervena'>Hráč 1: " + vyhry1 + "</span>" +
      " | " +
      "<span class='modra'>Hráč 2: " + vyhry2 + "</span>";
  }

  button.onclick = () => {
    do {
      vitez1.innerHTML = "Hráč 1";
      vitez2.innerHTML = "Hráč 2";
      vitez1.style.color = "";
      vitez2.style.color = "";

      hrac1 = Math.floor(Math.random() * 5);
      hrac2 = Math.floor(Math.random() * 5);

      obr1.src = hrac1 + ".png";
      obr2.src = hrac2 + ".png";

      if (hrac1 === hrac2) {
        remiza = true;
      } 
      else if (vyhral(hrac1, hrac2)) {
        vitez1.innerHTML = "Hráč 1<br/>vyhrál.";
        vitez1.style.color = "red";
        vyhry1++;
        aktualizujSkore();
        remiza = false;
      } 
      else {
        vitez2.innerHTML = "Hráč 2<br/>vyhrál.";
        vitez2.style.color = "blue";
        vyhry2++;
        aktualizujSkore();
        remiza = false;
      }

    } while (remiza);
  }
});
