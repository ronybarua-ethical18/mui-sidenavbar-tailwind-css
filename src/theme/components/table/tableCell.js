import { borders } from "../../base/boders";
import { colors } from "../../base/colors";
import { pxToRem } from "../../functions/pxToRem";


const { borderWidth } = borders;
const { light } = colors;

export const tableCell = {
  styleOverrides: {
    root: {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};

