import { createTheme } from "@mui/material/styles"
import { borders } from "./base/boders"
import { colors } from "./base/colors"
import { typography } from "./base/typography"
import { pxToRem } from './functions/pxToRem';
import { globals } from './base/globals';
import { list } from "./components/list";
import { listItem } from "./components/list/listItem";
import { listItemText } from "./components/list/listItemText";
import { button } from './components/button/index';
import { input } from './components/form/input';
import { inputLabel } from './components/form/inputLabel';
import { inputOutlined } from './components/form/inputOutlined';
import { menu } from './components/menu/index';
import { menuItem } from "./components/menu/menuItem";
import { tableContainer } from "./components/table/tableContainer";
import tableHead from "./components/table/tableHead";
import { tableCell } from "./components/table/tableCell";
import { tabs } from "./components/tabs";
import { tab } from "./components/tabs/tab";
import { select } from './components/form/select';
import { checkbox } from "./components/form/checkbox";
import { radio } from './components/form/radio';

export default createTheme({
    palette: { ...colors },
    typography: { ...typography },
    borders: { ...borders },
    functions: {
        pxToRem,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ...globals,
            },
        },
        MuiList: { ...list },
        MuiListItem: { ...listItem },
        MuiListItemText: { ...listItemText },
        MuiButton: { ...button },
        MuiInput: { ...input },
        MuiInputLabel: { ...inputLabel },
        MuiOutlinedInput: { ...inputOutlined },
        MuiMenu: { ...menu },
        MuiMenuItem: { ...menuItem },
        MuiTableContainer: { ...tableContainer },
        MuiTableHead: { ...tableHead },
        MuiTableCell: { ...tableCell },
        MuiTabs: { ...tabs },
        MuiTab: { ...tab },
        MuiSelect: { ...select },
        MuiCheckbox: { ...checkbox },
        MuiRadio: { ...radio },

    }
})