export const colorSwitcher = (type) => {
  let color;

  switch (type) {
    case "grass":
      color = "#78c850";
      break;

    case "bug":
      color = "#a8b820";
      break;

    case "fire":
      color = "#f08030";
      break;

    case "water":
      color = "#6890f0";
      break;

    case "psychic":
      color = "#f85888";
      break;

    case "normal":
      color = "#a8a878";
      break;

    case "ground":
      color = "#e0c068";
      break;

    case "electric":
      color = "#f8d030";
      break;

    case "poison":
      color = "#a040a0";
      break;

    case "rock":
      color = "#b8a038";
      break;

    case "fighting":
      color = "#c03028";
      break;

    case "fairy":
      color = "#f0b6bc";
      break;

    case "ice":
      color = "#98d8d8";
      break;

    case "flying":
      color = "#a890f0";
      break;

    case "ghost":
      color = "#705898";
      break;

    case "dark":
      color = "#705848";
      break;

    case "dragon":
      color = "#7038f8";
      break;

    case "steel":
      color = "#b8b8d0";
      break;

    default:
      color = "white";
  }

  return color;
};
