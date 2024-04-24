import { createTheme } from "@mui/material/styles";

const myTheme = createTheme({
    root: {
        display: "flex",
    }, 
    palette: {
        mode: 'light',
        primary: {
            main: '#FFFFFF'
        }
    },
    typography: {
        fontFamily: "Gilroy-Light",
        fontSize: 18,
        fontWeight: 400,
        h1: {
            fontFamily: "Gilroy-ExtraBold",
            fontSize: 40,
            fontWeight: 500,
            color: '#212529',
        },
        h2: {
            fontFamily: "Gilroy-ExtraBold",
            fontSize: 32,
            fontWeight: 500,
            color: '#87AED0'
        },
        h3: {
            fontFamily: "Gilroy-ExtraBold",
            fontSize: 32,
            fontWeight: 500,
            color: '#212529'
        },
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#662E9B",
            },
        },
    },
})

export default createTheme(myTheme);