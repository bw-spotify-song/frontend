import { createMuiTheme } from "@material-ui/core/styles"
import green from '@material-ui/core/colors/green'
import orange from '@material-ui/core/colors/orange'
import grey from '@material-ui/core/colors/grey'


export const theme = createMuiTheme({
  palette: {
        primary: {
          main: green[800]
    },
        secondary: {
        main: orange[900]
        },
        background: {
            paper: grey[100],
            default: grey[100]
        }
  },
})