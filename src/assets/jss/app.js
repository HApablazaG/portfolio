const appStyles = {
  container: theme => ({
    backgroundColor: theme.palette.primary.main,
    paddingX: theme.spacing(12),
    [theme.breakpoints.down('md')]: {
      paddingX: theme.spacing(5)
    }
  })
};

export default appStyles;
