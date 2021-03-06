const homeStyles = {
  container: theme => ({
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingY: theme.spacing(8)
  }),
  iconContainer: theme => ({
    paddingX: theme.spacing(1)
  }),
  mediaIcon: theme => ({
    color: theme.palette.primary.contrastText
  })
};

export default homeStyles;
