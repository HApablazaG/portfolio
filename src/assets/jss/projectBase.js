const projectBaseStyles = {
  cardContainer: theme => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  }),
  subheader: theme => ({
    color: theme.palette.common.white
  }),
  avatar: {
    alignItems: 'flex-start',
    width: 80,
    height: 80,
    marginBottom: -2
  },
  avatarImg: {
    height: 'auto',
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
