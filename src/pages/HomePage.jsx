import homeStyles from '../assets/jss/home';
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography
} from '@mui/material';

function HomePage () {
  return (
    <Grid
      sx={homeStyles.container}
      alignItems="center"
      justifyContent="center"
      direction="column"
      container
    >
      <Card
        sx={homeStyles.cardContainer}
        elevation={0}
      >
        <Grid justifyContent="center" container>
          <Grid xs={12} sm={9} item>
            <CardHeader
              title={(
                <Typography variant="h5">
                  Hola, mi nombre es
                </Typography>
              )}
              subheader={(
                <Typography variant="h3" color="secondary">
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
                Actualmente me encuentro en busca de oportunidades laborales, por lo que te
                invito a que continues leyendo para conocer más sobre mi perfil profesional.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default HomePage;
