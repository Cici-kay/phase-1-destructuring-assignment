const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  cluck: "chicken",
  oink: "pig"
};
const { moo, neigh, baa, cluck, oink } = animalSounds;

const animalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};
const { bessie, dolly, babe, little } = animalNames;

const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};
const { blackAndWhite, black, pink } = animalColors;

const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

const [r, o, y, g, b, i, v] = rainbowColors;

const { 5: indg } = rainbowColors;

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  song2: "Moving Right Along",
  song3: "The Muppet Show Theme",
  song4: "I Hope That Something Better Comes Along",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

const { muppetName, color, song, song2, song3, song4, job, partner } = muppet;
const { song2: songTwo, song4: songFour } = muppet;

const characters = {
  kermit: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};

const { kermit: { job: nestedJob, partner: nestedPartner } } = characters;