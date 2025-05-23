export default function colorToRGBA(hex, alpha = 0.5) {
  // Remove # if present
  hex = hex.replace("#", "");

  // Handle 3-digit hex
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Examples
//   console.log(colorToRGBA('#ff0000')); // rgba(255, 0, 0, 0.5)
//   console.log(colorToRGBA('ff0000')); // rgba(255, 0, 0, 0.5)
//   console.log(colorToRGBA('#f00')); // rgba(255, 0, 0, 0.5)
