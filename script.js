async function cargarMalla() {
  const dataRes = await fetch('data/data_MED.json');
  const colorsRes = await fetch('data/colors_MED.json');

  const data = await dataRes.json();
  const colors = await colorsRes.json();

  const container = document.getElementById('malla');

  for (const semestre in data) {
    const semestreDiv = document.createElement('div');
    semestreDiv.innerHTML = `<h2>${semestre.toUpperCase()}</h2>`;

    data[semestre].forEach(ramo => {
      const color = colors[ramo[4]]?.[0] || "#ccc";
      const div = document.createElement('div');
      div.textContent = `${ramo[0]} (${ramo[1]})`;
      div.style.backgroundColor = color;
      div.classList.add('ramo');
      semestreDiv.appendChild(div);
    });

    container.appendChild(semestreDiv);
  }
}

cargarMalla();
