const appStyles = {
  container: theme => ({
    backgroundColor: theme.palette.primary.dark,
    paddingX: theme.spacing(12),
    [theme.breakpoints.down('md')]: {
      paddingX: theme.spacing(2)
    }
  })
};

export default appStyles;
