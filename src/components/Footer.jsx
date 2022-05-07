import footerStyles from '../assets/jss/footer';
import {
  AppBar,
  Grid,
  Typography
} from '@mui/material';
import { MediaLinkContainer } from './index';

function Footer () {
  return (
    <AppBar component="footer" position="static">
      <Grid
        sx={footerStyles.container}
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
