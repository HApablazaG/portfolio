import {
  MailOutline as EmailIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';

function IconLink (props) {
  const { link, IconComponent, ...otherProps } = props;

  return (
    <Grid sx={{ paddingX: 3 }} item>
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

function Footer () {
  return (
    <AppBar position="static">
      <Grid
        sx={{ padding: 2 }}
        spacing={1}
        justifyContent="center"
        container
      >
        <IconLink
          IconComponent={GitHubIcon}
          link="https://github.com/HApablazaG"
        />

        <IconLink
          IconComponent={LinkedInIcon}
          link="https://www.linkedin.com/in/hapablazag"
        />

        <IconLink
          IconComponent={EmailIcon}
          link="mailto:hapablazag@gmail.com"
          target="_self"
        />

        <IconLink
          IconComponent={InstagramIcon}
          link="https://www.instagram.com/hapablazag"
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
