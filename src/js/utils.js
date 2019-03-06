export function calcTileType(index, boardSize) {
  // TODO: write logic here

 if (index === 0) return 'top-left';  // top-left
 if (index > 0 && index < boardSize-1) return 'top';  // top
 if (index === boardSize-1) return 'top-right'; // top-right
 if (index === (boardSize * boardSize - boardSize) ) return 'bottom-left'; // bottom-left
 if (index % boardSize === 0) return 'left'; // left
 if (index === (boardSize * boardSize -1) ) return 'bottom-right'; // bottom-right
 if (index > (boardSize * boardSize - boardSize)  && index < (boardSize * boardSize -1) ) return 'bottom'; // bottom
 if ((index - (boardSize - 1)) % boardSize === 0) return 'right'; // right
 return 'center';
 
}//end calcTileType

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}


//return ['top-left', 'top-right', 'top', 'bottom-left', 'bottom-right', 'bottom', 'right', 'left', 'center'];