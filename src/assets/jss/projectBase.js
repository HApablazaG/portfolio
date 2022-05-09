const projectBaseStyles = {
  cardContainer: theme => ({
    // backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    paddingX: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      paddingX: theme.spacing(3)
    }
  }),
  subheader: theme => ({
    color: theme.palette.common.white
  }),
  avatar: {
    alignItems: 'flex-start',
    width: 100,
    height: 80,
    marginLeft: 1,
    marginBottom: -2
  },
  avatarImg: {
    objectFit: 'contain'
  },
  divider: theme => ({
    borderColor: theme.palette.common.white
  }),
  techContainer: {
    padding: 1
  }
};

export default projectBaseStyles;
