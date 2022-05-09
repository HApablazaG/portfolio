import { FOOTER_HEIGHT } from './theme';

const sectionBaseStyles = {
  container: ({ theme, sectionName }) => ({
    minHeight:
      sectionName === 'contact'
        ? `calc(100vh - ${FOOTER_HEIGHT}px)`
        : '100vh',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2.5)
    }
  }),
  title: theme => ({
    marginBottom: 3,
    color: theme.palette.secondary.dark
  })
};

export default sectionBaseStyles;
