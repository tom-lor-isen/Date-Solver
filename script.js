var grid = []

/*[
  [["m", 0], ["m", 1], ["m", 2], ["m", 3], ["m", 4], ["m", 5]],
  [["m", 6], ["m", 7], ["m", 8], ["m", 9], ["m", 10], ["m", 11]],
  [["d", 1], ["d", 2], ["d", 3], ["m", 13], ["m", 14]],
  [["m", 0], ["m", 1], ["m", 2], ["m", 3], ["m", 4]],
  [["m", 0], ["m", 1], ["m", 2], ["m", 3], ["m", 4]],
  [["m", 0], ["m", 1], ["m", 2], ["m", 3], ["m", 4]],
  [["m", 0], ["m", 1], ["m", 2]],
]*/

const PATTERN = [6, 6, 7, 7, 7, 7]


function generateGrid() {
  grid_gene = [];

  PATTERN.forEach((number, index) => {
    var array = []
    for(let i = 0; i < number; i++) {
      if(index <= 1) {
        array.push(["m", index*number + i])
      }
  
      else {
        array.push(["d", (index - 2)*number + i])
      }
    }
  
    grid_gene.push(array)
  })

  grid_gene.push([["d", 28], ["d", 29], ["d", 30]])

  return grid_gene;
}

grid = generateGrid()


var date = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1
}

console.log(grid)
console.log(date.day)
console.log(date.month)

const pieces = [
  [
    [1,1],
    [1,0],
    [1,1]
  ],
  [
    [1,1],
    [1,1],
    [1,0]
  ],
  [
    [1,1],
    [1,1],
    [1,1]
  ],
  [
    [1,1],
    [1,0],
    [1,0],
    [1,0]
  ],
  [
    [1, 1, 0, 0],
    [0, 1, 1, 1],
  ],
  [
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 1]
  ],
  [
    [1, 1, 1],
    [1, 0, 0]
    [1, 0, 0]
  ],
  [
    [0, 1],
    [1, 1],
    [0, 1],
    [0, 1],
  ]
]

function piecePos(pieceNumber, index, reverse) {
  var piece = [],
      piece2 = [];

  if(index == 0) {        // Rotate 90
    for(let i = 0; i < pieces[pieceNumber][0].length; i++) {
      piece.push([])
      for(let j = 0; j < pieces[pieceNumber].length; j++) {
        piece[i].push(pieces[pieceNumber][j][i])
      }
      piece[i].reverse()
    }
  }

  else if(index == 1) {   // Rotate 180
    pieces[pieceNumber].reverse()
    pieces[pieceNumber].map(pi => {
      return pi.reverse()
    })

    piece = pieces[pieceNumber];
  }

  else if(index == 2) {   // Rotate 270
    for(let i = 0; i < pieces[pieceNumber][0].length; i++) {
      piece.push([])
      for(let j = 0; j < pieces[pieceNumber].length; j++) {
        piece[i].push(pieces[pieceNumber][j][i])
      }
      piece.reverse()
    }
  }

  if(reverse == true) {   // Reverse
    piece.reverse()
  }

  return piece ;
}

function generateOrder() {
  var array = [0, 1, 2, 3, 4, 5, 6];
  const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

  return array
}

