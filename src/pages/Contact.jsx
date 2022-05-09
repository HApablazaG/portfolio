import PropTypes from 'prop-types';
import externalLinks from '../assets/json/external-links.json';
import { Send as SendIcon } from '@mui/icons-material';
import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { SectionBase } from '../components';

function Contact (props) {
  const { id } = props;

  return (
    <SectionBase id={id} title="Conversemos" nextIsFooter>
      <Grid alignItems="center" container>
        <Grid xs={12} md={8} item>
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
        </Grid>

        <Grid xs={12} md={4} item>
          <CardActions>
            <Grid justifyContent="center" container>
              <Button
                component="a"
                variant="outlined"
                startIcon={<SendIcon />}
                href={`mailto:${externalLinks.email}`}
              >
                Enviar mensaje
              </Button>
            </Grid>
          </CardActions>
        </Grid>
      </Grid>
    </SectionBase>
  );
}

// Define received props types for validation.
Contact.propTypes = {
  id: PropTypes.string.isRequired
};

export default Contact;
