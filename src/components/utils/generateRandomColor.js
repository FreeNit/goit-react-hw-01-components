export default function generateRandomHEXColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)} `;
}
