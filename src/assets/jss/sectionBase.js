const sectionBaseStyles = {
  container: ({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default
  }),
  title: theme => ({
    marginBottom: 3,
    color: theme.palette.secondary.dark
  })
};

export default sectionBaseStyles;
