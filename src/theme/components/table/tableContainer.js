import { borders } from "../../base/boders";
import { colors } from "../../base/colors";

const { white } = colors;
const { borderRadius } = borders;

export const tableContainer = {
  styleOverrides: {
    root: {
      backgroundColor: white.main,
      borderRadius: borderRadius.xl,
    },
  },
};

