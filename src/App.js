// import BarraFinal from './Components/BarraFinal';
import RouterDom from './Components/RouterDom';
import Navbar from './Components/Navbar';
import { ThemeProvider } from '@mui/material';
import theme from "./Constants/configTheme";
import './css/App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <RouterDom />
        {/* <BarraFinal /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
