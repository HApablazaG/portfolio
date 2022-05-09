const experienceStyles = {
  timelineItem: theme => ({
    minHeight: 100,
    [theme.breakpoints.down('md')]: {
      '&::before': {
        padding: 0
      }
    }
  }),
  oppositeContent: {
    margin: 'auto 0'
  },
  itemButton: ({ theme, isActive }) => ({
    marginY: theme.spacing(1),
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.common.white,
    borderRadius: '50%',
    opacity: 0.7,
    ...(isActive && {
      opacity: 1
    })
  }),
  itemAvatar: {
    width: 50,
    height: 50
  },
  avatarImg: {
    objectFit: 'contain'
  },
  content: {
    py: 1.5,
    px: 2
  },
  cardAvatar: {
    width: 'auto',
    height: 70
  },
  cardContent: theme => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }),
  contentList: {
    paddingInlineStart: 2.5
  }
};

export default experienceStyles;
