// DOM
const playground = document.querySelector(".playground > ul");


//Setiing
const GAME_ROWS = 20;
const GAME_COLS = 10;

// variables
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
  tree: [
    [[2, 1], [0, 1], [1, 1], [1, 0]],
    [],
    [],
    [],
  ]
}

const movingItem = {
  type: "tree",
  direction: 0,
  top: 0,
  left: 3,

};

init();


//functions
function init() {
  tempMovingItem = { ...movingItem };
  for (let i = 0; i < GAME_ROWS; i++) {
    prependNewLine();

  }
  renderBlocks();

}




function prependNewLine() {
  const li = document.createElement("li");
  const ul = document.createElement("ul");
  for (let j = 0; j < GAME_COLS; j++) {
    const matrix = document.createElement("li");
    ul.prepend(matrix);
  }
  li.prepend(ul);
  playground.prepend(li);

}

function renderBlocks() {
  const { type, direction, top, left } = tempMovingItem;

  BLOCKS[type][direction].forEach(block => {
    const x = block[0] + left;
    const y = block[1] + top;
    const target = playground.childNodes[y].childNodes[0].childNodes[x];
    target.classList.add(type)


  });

}
