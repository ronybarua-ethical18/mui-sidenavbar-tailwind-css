import { colors } from "../../base/colors";
import { typography } from "../../base/typography";
import { borders } from "../../base/boders";
import { pxToRem } from "../../functions/pxToRem";

const { size } = typography;
const { text, white } = colors;
const { borderRadius } = borders;

export const menu = {
  defaultProps: {
    disableAutoFocusItem: true,
  },

  styleOverrides: {
    paper: {
      minWidth: pxToRem(160),
      // boxShadow: lg,
      padding: `${pxToRem(16)} ${pxToRem(8)}`,
      fontSize: size.sm,
      color: text.main,
      textAlign: "left",
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md,
    },
  },
};