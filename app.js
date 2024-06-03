const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// console.dir(pokemon, { maxArrayLength: null });

console.log(pokemon[58].name);

// console.log(game);

// Exercise 3:

game.difficulty = ["Med"];
console.log(game);

// Exercise 4:

let charmander = pokemon[3];
console.log(charmander);

game.party.push(charmander);
console.log(game.party);

//Exercise 5:

let butterfree = pokemon[11];
let vileplume = pokemon[44];
let magikarp = pokemon[128];
game.party.push(butterfree, vileplume, magikarp);
console.log(game.party);

// Exercise 6:

game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

console.log(game.gyms);

// Exercise 7:

let charmeleon = pokemon[4];
game.party[0] = charmeleon;
console.log(game.party);

// Exercise 8:

game.party.forEach((pokemon) => {
  console.log(pokemon.name);
});

// Exercise 9:

pokemon.forEach((pokemon) => {
  if (pokemon.starter === true) {
    console.log(pokemon.name);
  }
});

// Exercise 10:

game.catchPokemon = (pokemonObj) => {
  game.party.push(pokemonObj);
};

game.catchPokemon(pokemon[14]);
console.log("Exercise 10: game party", game.party);

// Exercise 11:

game.catchPokemonAndDecrement = (pokemonObj) => {
  game.party.push(pokemonObj);
  let pokeballs = game.items.find((item) => item.name === "pokeball");
  pokeballs.quantity -= 1;
};

game.catchPokemonAndDecrement(pokemon[18]);
console.log("Exercise 11: game items", game.items);

// Exercise 12:

game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});

console.log("Exercise 12:", game.gyms);

// Exercise 13:

let gymTally = {
  completed: 0,
  incompleted: 0,
};

game.gymStatus = () => {
  game.gyms.forEach((gym) => {
    if (gym.completed === true) {
      gymTally.completed += 1;
    } else {
      gymTally.incompleted += 1;
    }
  });
};

game.gymStatus();
console.log("Exercise 13: gym tally", gymTally);

// Exercise 14:

game.partyCount = () => {
  return game.party.length;
};

console.log("Exercise 14:", game.partyCount());

// Exercise 15:

game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});

console.log("Exercise 15:", game.gyms);

// Exercise 16:

console.log("Exercise 16:", game);
