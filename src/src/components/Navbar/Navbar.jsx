import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css'

const drawerWidth = 320;
const mobilenavItems = [
  {
    title: '☛  Sobre Nós',
    url: '#about-section',
  },
  {
    title: '☛  Our Solutions',
    url: '/our-solutions',
  },
  {
    title: '☛  Carreiras',
    url: '/carreiras',
  },
  {
    title: '☛  Contactos',
    url: '#contacts-section',
  },
];

const navItems = [
  {
    title: 'Sobre Nós',
    url: '#about-section',
  },
  {
    title: 'Our Solutions',
    url: '/our-solutions',
  },
  {
    title: 'Carreiras',
    url: '/carreiras',
  },
  {
    title: 'Contactos',
    url: '#contacts-section',
  },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p>#DEV</p> 
      <Divider />
      <List>
        {mobilenavItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <a href={item.url} onClick={() => scrollToSection(item.url)}> 
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <div className='mobile-alignment'>
          <IconButton
            color="inherit"
            aria-label="Abrir menu"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          </div>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to="/">
              <p>#DEV</p> 
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <a key={item.title} href={item.url} onClick={() => scrollToSection(item.url)}>  
              <Button  sx={{ color: '#fff' ,  mr: 1.2, ml:1.2, textTransform:'none', fontSize: 17 }}>
                {item.title}
              </Button>
            </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'var(--dirty-lime)'},
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default NavBar;
