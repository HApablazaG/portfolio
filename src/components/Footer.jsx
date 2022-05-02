import PropTypes from 'prop-types';
import footerStyles from '../assets/jss/footer';
import externalLinks from '../assets/json/external-links.json';
import {
  MailOutline as EmailIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';
import {
  AppBar,
  Grid,
  IconButton,
  Typography
} from '@mui/material';

function IconLink (props) {
  const { link, IconComponent, ...otherProps } = props;

  return (
    <Grid sx={footerStyles.iconContainer} item>
      <IconButton
        component="a"
        target="_blank"
        href={link}
        {...otherProps}
      >
        <IconComponent
          sx={theme => ({
            color: theme.palette.primary.contrastText
          })}
          fontSize="large"
        />
      </IconButton>
    </Grid>
  );
}

// Define received props types for validation.
IconLink.propTypes = {
  link: PropTypes.string.isRequired,
  IconComponent: PropTypes.elementType.isRequired
};

function Footer () {
  return (
    <AppBar position="static">
      <Grid
        sx={footerStyles.container}
        spacing={1}
        justifyContent="center"
        container
      >
        <IconLink
          IconComponent={GitHubIcon}
          link={externalLinks.github}
        />

        <IconLink
          IconComponent={LinkedInIcon}
          link={externalLinks.linkedin}
        />

        <IconLink
          IconComponent={EmailIcon}
          link={`mailto:${externalLinks.email}`}
          target="_self"
        />

        <IconLink
          IconComponent={InstagramIcon}
          link={externalLinks.instagram}
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
