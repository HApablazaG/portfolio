const sectionBaseStyles = {
  container: {
    paddingTop: 10,
    paddingBottom: 20
  },
  cardContainer: theme => ({
    backgroundColor: theme.palette.background.default,
    borderRadius: 6
  }),
  title: theme => ({
    marginBottom: 3,
    color: theme.palette.secondary.dark
  })
};

export default sectionBaseStyles;
