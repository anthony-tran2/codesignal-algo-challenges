const bishopAndPawn = (bishop, pawn) => {
  if (bishop[0] === pawn[0] || bishop[1] === pawn[1]) return false;
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const letterDiff = Math.abs(letters.indexOf(bishop[0]) - letters.indexOf(pawn[0]));
  const numDiff = Math.abs(parseInt(bishop[1]) - parseInt(pawn[1]));
  if (letterDiff === numDiff) return true; else return false;
}
