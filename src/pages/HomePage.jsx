import PropTypes from 'prop-types';
import homeStyles from '../assets/jss/home';
import {
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography
} from '@mui/material';
import { MediaLinkContainer } from '../components';

function CurrentWork () {
  return (
    <Typography
      component="a"
      color="secondary.light"
      href="https://www.buk.cl/"
      target="_blank"
    >
      buk
    </Typography>
  );
}

function HomePage (props) {
  const { id } = props;

  return (
    <Grid
      id={id}
      sx={homeStyles.container}
      alignItems="center"
      container
    >
      <Grid
        component={Container}
        justifyContent="center"
        container
      >
        <Grid xs={12} sm={9} item>
          <CardHeader
            title={(
              <Typography variant="h5">
                Hola, mi nombre es
              </Typography>
            )}
            subheader={(
              <Typography variant="h3" color="secondary.light">
                Hugo Apablaza Guerrero
              </Typography>
            )}
            disableTypography
          />

          <CardContent>
            <Typography align="justify" gutterBottom>
              Soy un ingeniero informático, con gran experiencia como desarrollador Full-Stack
              implementando sistemas web para apoyar en la gestión y digitalización de procesos
              claves.
            </Typography>

            <Typography align="justify">
              Actualmente me encuentro me encuentro trabajando en <CurrentWork />. Aun así, te
              invito a que continues leyendo para conocer más sobre mi perfil profesional.
            </Typography>
          </CardContent>

          <Grid
            justifyContent="flex-end"
            container
          >
            <MediaLinkContainer
              linkStyles={homeStyles.iconContainer}
              iconStyles={homeStyles.mediaIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

// Define received props types for validation.
HomePage.propTypes = {
  id: PropTypes.string.isRequired
};

export default HomePage;
