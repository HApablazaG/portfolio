const projectListStyles = {
  listHeader: theme => ({
    backgroundColor: theme.palette.primary.main,
    '& th': {
      color: theme.palette.primary.contrastText
    }
  }),
  listRow: {
    '&:last-child td': {
      border: 0
    }
  },
  listIcon: {
    width: 80,
    height: 'auto',
    objectFit: 'contain'
  }
};

export default projectListStyles;
