const sliderStyles = {
  root: ({ theme }) => ({
    '--swiper-navigation-color': theme.palette.primary.contrastText,
    '--swiper-pagination-color': theme.palette.primary.contrastText,
    width: '100%',
    height: '100%',
    marginBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(5),
    '& > .swiper-button-prev': {
      left: 2
    },
    '& > .swiper-button-next': {
      right: 2
    }
  }),
  contentContainer: theme => ({
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary.main
  })
};

export default sliderStyles;
