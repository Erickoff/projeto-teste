import flags from './model/flags.js';

for (const bandeira of flags) {
  const viewDeck = document.querySelector('.view-deck');
  const view = criar_Ver_Bandeira(bandeira);

  viewDeck.insertAdjacentHTML('beforeend', view);
}

function criar_Ver_Bandeira(flags) {
  return `
        <div class="flag col-2 my-2 text-center">
          <img src="${flags.image}" alt="${flags.name}">
          <p>${flags.name}</p>
        </div>
      `;
}
