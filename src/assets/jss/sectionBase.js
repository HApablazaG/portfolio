import { FOOTER_HEIGHT } from './theme';

const sectionBaseStyles = {
  container: ({ theme, id }) => ({
    minHeight:
      id === 'contact'
        ? `calc(100vh - ${FOOTER_HEIGHT}px)`
        : '100vh',
    backgroundColor: theme.palette.background.default,
    // paddingY: theme.spacing(5),
    // paddingX: theme.spacing(5),
    // [theme.breakpoints.down('md')]: {
    //   paddingY: theme.spacing(2.5),
    //   paddingX: theme.spacing(1.5),
    // }
  }),
  title: theme => ({
    marginBottom: 3,
    color: theme.palette.secondary.dark
  })
};

export default sectionBaseStyles;
