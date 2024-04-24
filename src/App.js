import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LeaderBoardsList from './pages/LeaderBoardsList';
import customTheme from './config/theme';
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  }
  
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <BrowserRouter>
          <Sidebar handleDrawerOpen={handleDrawer} drawerOpen={open} />
          <Header handleDrawerOpen={handleDrawer} drawerOpen={open} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/leaderboards" element={<LeaderBoardsList />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
