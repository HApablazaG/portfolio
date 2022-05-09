import PropTypes from 'prop-types';
import sectionBaseStyles from '../assets/jss/sectionBase';
import { styled } from '@mui/material/styles';
import {
  CardHeader,
  Container,
  Grid
} from '@mui/material';

const StyledContainer = styled(Grid,)(sectionBaseStyles.container);

function SectionBase (props) {
  const { id, title, children } = props;

  return (
    <StyledContainer
      id={id}
      alignItems="center"
      container
    >
      <Grid
        component={Container}
        justifyContent="center"
        container
      >
        <CardHeader
          title={title}
          titleTypographyProps={{
            sx: sectionBaseStyles.title,
            variant: 'h4',
            align: 'center',
          }}
        />

        { children }
      </Grid>
    </StyledContainer>
  );
}

// Define received props types for validation.
SectionBase.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default SectionBase;
