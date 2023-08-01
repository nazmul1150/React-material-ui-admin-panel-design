import { randomValueGenetator, fakeArrayGenetator} from "./utils/FackArrayDataGenetstor";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Display_GraphData_Card_Top = [
    {
        label:"Post",
        value:randomValueGenetator({digit: 1000}),
        icon:<ArrowDropUpIcon />,
        iconLabel:"4%",
    },
    {
        label:"Pages",
        value:randomValueGenetator({digit: 100}),
        icon: <ArrowDropUpIcon />,
        iconLabel:"9%",
    },
    {
        label:"New Visitor",
        value:randomValueGenetator({digit: 100}),
        icon: <ArrowDropDownIcon />,
        iconLabel:"7%",
    },
    {
        label:"Total Visitor",
        value:randomValueGenetator({digit: 1000}),
        icon: <ArrowDropDownIcon />,
        iconLabel:"30%",
    },
];

export const Display_GraphData_Top = [
    {
        id:"Post",
        data:fakeArrayGenetator({count:9,digit:100}),
        brColor:"#994c5a",
        bgColor:"#994c5a6b",
    },
    {
        id:"Pages",
        data:fakeArrayGenetator({count:9,digit:100}),
        brColor:"#4c7d99",
        bgColor:"#4c7d9966",
    },
    {
        id:"New Visitor",
        data:fakeArrayGenetator({count:9,digit:100}),
        brColor:"#744c99",
        bgColor:"#744c996e",
    },
    {
        id:"Total Visitor",
        data:fakeArrayGenetator({count:9,digit:100}),
        brColor:"#998f4c",
        bgColor:"#998f4c6e",
    },
];