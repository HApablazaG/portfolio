import {
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { SectionBase } from '../components';

function AboutMe () {
  return (
    <SectionBase id="about" title="Acerca de mí">
      <Grid justifyContent="flex-end" container>
        <Grid xs={12} md={6} item>
          <CardContent>
            <Typography align="justify" paragraph>
              Me presento, mi nombre es <strong>Hugo Apablaza</strong> y soy titulado de la
              carrera de <strong>Ingeniería Civil en Computación e informática</strong> en la
              Universidad Católica del Norte en el año 2017. Desde entonces me he desempeñado
              principalmente como desarrollador Full-Stack, por lo que tengo más de 5 años de
              experiencia en la elaboración y diseño de software y sistemas web utilizando
              metodologías ágiles.
            </Typography>

            <Typography align="justify" paragraph>
              Estoy siempre comprometido en entregar código de calidad y en la aplicación de
              las buenas prácticas para el trabajo que realizo.
            </Typography>

            <Typography align="justify">
              Considero que tengo facilidades (y por supuesto la motivación!!) para aprender
              nuevas tecnologías y aplicarlas rápidamente a un nivel productivo.
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          sx={{ display: 'flex' }}
          xs={12}
          md={5}
          item
        >
          <CardMedia
            sx={{
              width: 200,
              margin: 'auto',
            }}
            component="img"
            src="/images/person_avatar.png"
          />
        </Grid>
      </Grid>
    </SectionBase>
  );
}

export default AboutMe;
