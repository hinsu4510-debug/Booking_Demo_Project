export function getRandomItem(array: string[]): string {
  return array[Math.floor(Math.random() * array.length)];
}