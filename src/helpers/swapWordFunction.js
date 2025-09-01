export function swapTwoWords(str) {

  const parts = str.split(",").map((s) => s.trim());
  if (parts.length !== 2) return str; 

  return `${parts[1]}, ${parts[0]}`;
}




