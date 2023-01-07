import { borders } from "../../base/boders";
import { colors } from "../../base/colors";
import { typography } from "../../base/typography";

const { info, inputBorderColor, dark } = colors;
const { size } = typography;
const { borderWidth } = borders;

export const input = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },

      "&:before": {
        borderColor: inputBorderColor,
      },

      "&:after": {
        borderColor: info.main,
      },
    },
  },
};