import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    color : {
        primary :"#303F9F",
        secondary :"#9E9E9E",
        error : '#D32F2F',
        textColor: '#fff',
        defaultTextColor: '#000',
        hover: 'rgba(0, 0, 0, 0.04)',
    },
    typography : {
        fontFamily: 'Roboto'
    },
    shape : {
        borderRadius : 4,
        backgroundColor : "#009688",
        textColor : "#fff",
        border: "#CCC"
    }
});
export default theme;
