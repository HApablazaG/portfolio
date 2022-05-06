import { useState } from 'react';
import headerStyles from '../assets/jss/header';
import {
  Close as CloseIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import LogoIcon from './LogoIcon';
import {
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

function Menu (props) {
  const { open, onClose, menuList } = props;

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
    <Drawer
      anchor="top"
      variant="persistent"
      PaperProps={{
        sx: headerStyles.menuContainer
      }}
      open={open}
      onClose={onClose}
    >
      <IconButton
        sx={headerStyles.closeIcon}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>

      <List>
        {
          menuList.map(section => (
            <ListItem
              key={`link-to-${section.path}`}
              component="a"
              href={section.path}
              onClick={handleOnClick}
              button
            >
              <ListItemText
                primary={section.label}
                primaryTypographyProps={{
                  align: 'center'
                }}
              />
            </ListItem>
          ))
        }
      </List>

      <Divider />

      <Grid
        sx={headerStyles.menuFooterContainer}
        justifyContent="center"
        container
      >
        <Button
          variant="outlined"
          color="inherit"
          component="a"
          href="/CV-Hugo-Apablaza-Guerrero.pdf"
          download
        >
          Curriculum
        </Button>
      </Grid>
    </Drawer>
  );
}

function Header () {
  const [open, setOpen] = useState(false);
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <LogoIcon sx={headerStyles.logo} />

      <IconButton
        sx={headerStyles.menuIcon}
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        open={open}
        onClose={handleDrawerClose}
        menuList={sectionList}
      />
    </>
  );
}

export default Header;
