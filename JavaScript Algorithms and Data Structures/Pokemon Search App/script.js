const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
// function to get the elements by their id
const getId = (element) => document.getElementById(`${element}`);

const input = getId("search-input");
const btn = getId("search-button");

btn.addEventListener("click", () => {
  //   clearPokemonData();
  if (input.value !== "") {
    getPokeData(url + input.value.toLowerCase());
  }
});

input.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      //   clearPokemonData();
      if (input.value !== "") {
        e.preventDefault();
        getPokeData(url + input.value.toLowerCase());
      }
    }
  },
  false
);

async function getPokeData(pokeUrl) {
  try {
    const response = await fetch(pokeUrl);
    const data = await response.json();
    console.log(data);
    renderPokemon(data);
  } catch (err) {
    alert("Pokémon not found");
    clearPokemonData();
    console.clear();
  }
}

function renderPokemon(data) {
  try {
    console.log("Pokemon Found");
    // fetching elements
    const name = getId("pokemon-name");
    const id = getId("pokemon-id");
    const weight = getId("weight");
    const height = getId("height");
    const image = getId("sprite");
    const types = getId("types");
    const hp = getId("hp");
    const attack = getId("attack");
    const defense = getId("defense");
    const specialAttack = getId("special-attack");
    const specialDefense = getId("special-defense");
    const speed = getId("speed");

    // updating on UI
    name.innerText = data?.name;
    id.innerText = `#${data?.id}`;
    weight.innerText = `Weight: ${data?.weight}`;
    height.innerText = `Height: ${data?.height}`;
    image.src = `${data?.sprites?.front_default}`;
    // type.innerText = data?.types[0]?.type?.name;

    // Reset the innerHTML of the types element
    types.innerHTML = "";
    for (let i = 0; i < data?.types.length; i++) {
      types.innerHTML += `<span class="type ${data.types[i]?.type?.name}">${data.types[i]?.type?.name}</span>`;
    }

    hp.innerText = data?.stats[0]?.base_stat;
    attack.innerText = data?.stats[1]?.base_stat;
    defense.innerText = data?.stats[2]?.base_stat;
    specialAttack.innerText = data?.stats[3]?.base_stat;
    specialDefense.innerText = data?.stats[4]?.base_stat;
    speed.innerText = data?.stats[5]?.base_stat;
  } catch (error) {
    console.log("Pokemon not found");
  }
}

// function to clear the previous pokemon's data
function clearPokemonData() {
  document.getElementById("pokemon-name").innerText = "";
  document.getElementById("pokemon-id").innerText = "";
  document.getElementById("weight").innerText = "";
  document.getElementById("height").innerText = "";
  document.getElementById("hp").innerText = "";
  document.getElementById("attack").innerText = "";
  document.getElementById("defense").innerText = "";
  document.getElementById("special-attack").innerText = "";
  document.getElementById("special-defense").innerText = "";
  document.getElementById("speed").innerText = "";

  document.getElementById("sprite").src = "";

  const type = document.getElementById("types");
  type.innerHTML = "";
}
