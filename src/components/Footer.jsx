import footerStyles from '../assets/jss/footer';
import {
  AppBar,
  Grid,
  Typography
} from '@mui/material';
import { MediaLinkContainer } from './index';

function Footer () {
  return (
    <AppBar
      sx={footerStyles.container}
      component="footer"
      position="fixed"
      elevation={0}
    >
      <Grid
        spacing={1}
        justifyContent="center"
        container
      >
        <MediaLinkContainer
          linkStyles={footerStyles.iconContainer}
          iconStyles={footerStyles.mediaIcon}
        />

        <Grid xs={12} item>
          <Typography align="center">
            © Hugo Apablaza
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Footer;
