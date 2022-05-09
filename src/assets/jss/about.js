const aboutStyles = {
  flexCointainer: {
    display: 'flex'
  },
  cardMedia: theme => ({
    width: '100%',
    maxWidth: 350,
    margin: 'auto',
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 3
  }),
  iconContainer: theme => ({
    paddingX: theme.spacing(3)
  }),
  mediaIcon: theme => ({
    color: theme.palette.secondary.dark
  })
};

export default aboutStyles;
