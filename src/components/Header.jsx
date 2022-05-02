import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Menu as MenuIcon,
} from '@mui/icons-material';
import LogoIcon from './LogoIcon';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from '@mui/material';

function Header () {
  const [sectionList] = useState(() => [
    {
      label: 'Acerca de mí',
      path: '#about'
    },
    {
      label: 'Portafolio',
      path: '#portfolio'
    },
    {
      label: 'Contacto',
      path: '#contact'
    }
  ]);
  const theme = useTheme();
  const sizeMatch = useMediaQuery(theme.breakpoints.up('sm'));

  /**
   * Fix to scroll-behavior: 'smooth' problem with OverlayScrollbars.
   */
  const handleOnClick = () => {
    // Get scroll page container element.
    let element = document.querySelector('.os-viewport');

    if (element) {
      // Change scroll-behavior to 'smooth' before the scroll action.
      element.style.scrollBehavior = 'smooth';
      // Return scroll-behavior to 'auto' after the scroll action.
      setTimeout(() => {
        element.style.scrollBehavior = 'auto';
      }, 50);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ height: 100 }}>
        <Box sx={{ flexGrow: 1 }}>
          <LogoIcon
            sx={theme => ({
              fontSize: 55,
              color: theme.palette.primary.contrastText
            })}
          />
        </Box>

        {
          sizeMatch ? (
            sectionList.map(section => (
              <Button
                key={`link-to-${section.path}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component="a"
                href={section.path}
                onClick={handleOnClick}
              >
                { section.label }
              </Button>
            ))
          ) : (
            <IconButton
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          )
        }
      </Toolbar>
    </AppBar>
  );
}

export default Header;
