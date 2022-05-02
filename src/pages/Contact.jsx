import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { SectionBase } from '../components';

function Contact () {
  return (
    <SectionBase id="contact" title="Contacto">
      <CardContent>
        <Typography paragraph>
          ¿Quieres ponerte en contacto conmigo?
        </Typography>

        <Typography align="justify">
          Si te intereso mi trabajo y deseas comunicarte conmigo no dudes en hacerlo,
          actualmente me encuentro en la busqueda de nuevas oportunidades laborales por lo
          que estare más que encantado de atender tus mensajes o preguntas.
        </Typography>
      </CardContent>

      <CardActions>
        <Grid justifyContent="center" container>
          <Button
            component="a"
            variant="outlined"
            href="mailto:hapablazag@gmail.com"
          >
            Enviar un mensaje
          </Button>
        </Grid>
      </CardActions>
    </SectionBase>
  );
}

export default Contact;
