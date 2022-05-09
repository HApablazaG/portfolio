import PropTypes from 'prop-types';
import aboutStyles from '../assets/jss/about';
import photoImage from '../assets/images/photo.webp';
import {
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';
import { MediaLinkContainer, SectionBase } from '../components';

function AboutMe (props) {
  const { id } = props;

  return (
    <SectionBase id={id} title="Acerca de mí">
      <Grid justifyContent="space-evenly" container>
        <Grid xs={12} md={6} item>
          <CardContent>
            <Typography align="justify" gutterBottom>
              Me presento, mi nombre es <strong>Hugo Apablaza</strong> y soy titulado de la
              carrera de <strong>Ingeniería Civil en Computación e informática</strong> en la
              Universidad Católica del Norte en el año 2017. Desde entonces me he desempeñado
              principalmente como desarrollador Full-Stack, por lo que tengo más de 5 años de
              experiencia en la elaboración y diseño de software y sistemas web utilizando
              metodologías ágiles.
            </Typography>

            <Typography align="justify" gutterBottom>
              Estoy siempre comprometido en entregar código de calidad y en la aplicación de
              las buenas prácticas para el trabajo que realizo.
            </Typography>

            <Typography align="justify" paragraph>
              Considero que tengo facilidades (y por supuesto la motivación!!) para aprender
              nuevas tecnologías y aplicarlas rápidamente a un nivel productivo.
            </Typography>

            <Typography>
              Algunas de las tecnologías que domino:
            </Typography>

            <ul>
              <Typography component="li">
                <strong>Lenguajes de programación:</strong> JavaScript (ES6+), PHP, Python
              </Typography>

              <Typography component="li">
                <strong>Frameworks y otros:</strong> HTML5, CSS3, React.js, React Native,
                Node.js, Express, Koa.js, Webpack
              </Typography>

              <Typography component="li">
                <strong>Base de datos:</strong> PostgreSQL, MySQL, SQLite
              </Typography>

              <Typography component="li">
                <strong>Control de Versiones:</strong> svn, git
              </Typography>
            </ul>
          </CardContent>
        </Grid>

        <Grid
          sx={aboutStyles.flexCointainer}
          xs={12}
          md={5}
          item
        >
          <Grid justifyContent="space-evenly" container>
            <Grid sx={aboutStyles.flexCointainer} xs={12} item>
              <CardMedia
                sx={aboutStyles.cardMedia}
                component="img"
                src={photoImage}
              />
            </Grid>

            <MediaLinkContainer
              linkStyles={aboutStyles.iconContainer}
              iconStyles={aboutStyles.mediaIcon}
            />
          </Grid>

        </Grid>
      </Grid>
    </SectionBase>
  );
}

// Define received props types for validation.
AboutMe.propTypes = {
  id: PropTypes.string.isRequired
};

export default AboutMe;
