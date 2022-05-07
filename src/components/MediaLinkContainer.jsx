import PropTypes from 'prop-types';
import externalLinks from '../assets/json/external-links.json';
import {
  MailOutline as EmailIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';

function IconLink (props) {
  const {
    link,
    IconComponent,
    linkStyles,
    iconStyles,
    ...otherProps
  } = props;

  return (
    <Grid sx={linkStyles} item>
      <IconButton
        component="a"
        target="_blank"
        href={link}
        {...otherProps}
      >
        <IconComponent
          sx={iconStyles}
          fontSize="large"
        />
      </IconButton>
    </Grid>
  );
}

// Define received props types for validation.
IconLink.propTypes = {
  link: PropTypes.string.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
  linkStyles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
  iconStyles: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ])
};

function MediaLinkContainer (props) {
  return (
    <>
      <IconLink
        IconComponent={GitHubIcon}
        link={externalLinks.github}
        {...props}
      />

      <IconLink
        IconComponent={LinkedInIcon}
        link={externalLinks.linkedin}
        {...props}
      />

      <IconLink
        IconComponent={EmailIcon}
        link={`mailto:${externalLinks.email}`}
        target="_self"
        {...props}
      />

      <IconLink
        IconComponent={InstagramIcon}
        link={externalLinks.instagram}
        {...props}
      />
    </>
  );
}

export default MediaLinkContainer;
