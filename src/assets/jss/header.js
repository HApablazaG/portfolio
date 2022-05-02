const headerStyles = {
  toolbar: {
    height: 74
  },
  logoContainer: {
    flexGrow: 1
  },
  logo: theme => ({
    display: 'block',
    fontSize: 55,
    color: theme.palette.primary.contrastText
  }),
  sectionButton: {
    marginY: 2,
    color: 'white',
    display: 'block'
  }
};

export default headerStyles;
