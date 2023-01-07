import { pxToRem } from "../../functions/pxToRem";
import {colors} from "../../base/colors"
import {typography} from "../../base/typography"

const { white, text, info, secondary, success } = colors;
const { size } = typography;


export const contained = {
    base: {
        backgroundColor: success.main,
        minHeight: pxToRem(40),
        color: text.main,
        padding: `${pxToRem(10)} ${pxToRem(24)}`,

        "&:hover": {
            backgroundColor: secondary.main,
        },

        "&:active, &:active:focus, &:active:hover": {
            opacity: 0.85,
        },

        "& .material-icon, .material-icons-round, svg": {
            fontSize: `${pxToRem(16)} !important`,
        },
    },

    small: {
        minHeight: pxToRem(32),
        padding: `${pxToRem(6)} ${pxToRem(16)}`,
        fontSize: size.xs,

        "& .material-icon, .material-icons-round, svg": {
            fontSize: `${pxToRem(12)} !important`,
        },
    },

    large: {
        minHeight: pxToRem(47),
        padding: `${pxToRem(12)} ${pxToRem(28)}`,
        fontSize: size.sm,
        backgroundColor:success.main,
        "& .material-icon, .material-icons-round, svg": {
            fontSize: `${pxToRem(22)} !important`,
        },


    },

    primary: {
        backgroundColor: success.main,

        "&:hover": {
            backgroundColor: secondary.focus,
        },

        "&:focus:not(:hover)": {
            backgroundColor: info.focus,
        },
    },

    secondary: {
        backgroundColor: secondary.main,

        "&:hover": {
            backgroundColor: secondary.main,
        },

        "&:focus:not(:hover)": {
            backgroundColor: secondary.focus,
        },
    },
};