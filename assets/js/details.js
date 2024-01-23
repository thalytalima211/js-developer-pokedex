const id = window.location.href.split('=').pop()
const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

pokeApi.getPokemonDetail(url).then((pokemon = []) => {
    document.title = pokemon.number + ' - ' + pokemon.name
    document.getElementById('content').className = pokemon.type
    document.getElementById('content').innerHTML += 
        `<li class="cabecalho">
            <span id="name">${pokemon.name}</span>
            <span id="number">#${pokemon.number}</span>
            <ol class="typesDetail">
                ${pokemon.types.map((type) => `<li class="typeDetail ${pokemon.type}">${type}</li>`).join('')}
            </ol>
            <div><img id="photo" src="${pokemon.photo}" alt="${pokemon.name}"></div>
        </li>`
    document.getElementById('statsList').innerHTML += 
        `${pokemon.stats.map((stat) =>
            `<li class="stat">
                <span class="statName">${stat.stat.name}</span>
                <span class="statCount">${stat.base_stat}</span>
                <div class="progressBar" style="--progress: ${stat.base_stat};"></div>
            </li>`).join('')}`
})
