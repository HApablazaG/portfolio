import { FOOTER_HEIGHT } from './theme';

const footerStyles = {
  container: {
    minHeight: FOOTER_HEIGHT,
    padding: 2
  },
  iconContainer: {
    paddingX: 3
  },
  mediaIcon: theme => ({
    color: theme.palette.primary.contrastText
  })
};

export default footerStyles;
