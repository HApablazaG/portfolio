const headerStyles = {
  logo: theme => ({
    position: 'absolute',
    display: 'block',
    fontSize: '5rem',
    margin: 1,
    color: theme.palette.primary.contrastText
  }),
  menuIcon: theme => ({
    position: 'fixed',
    right: 0,
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    margin: 1,
    transition: theme.transitions.create(
      ['background-color', 'transform', 'margin'],
      { duration: theme.transitions.duration.standard }
    ),
    '&:hover': {
      margin: 2,
      backgroundColor: theme.palette.primary.contrastText,
      transform: 'scale(1.3)'
    }
  }),
  closeIcon: theme => ({
    zIndex: 500,
    position: 'fixed',
    right: 0,
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.dark,
    margin: 1,
    transition: theme.transitions.create(
      ['background-color', 'transform', 'margin'],
      { duration: theme.transitions.duration.standard }
    ),
    '&:hover': {
      margin: 2,
      backgroundColor: theme.palette.secondary.contrastText,
      transform: 'scale(1.3)'
    }
  }),
  menuContainer: theme => ({
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.contrastText
  }),
  menuFooterContainer: {
    marginY: 1
  },
};

export default headerStyles;
