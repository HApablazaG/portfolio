import PropTypes from 'prop-types';
import sectionBaseStyles from '../assets/jss/sectionBase';
import {
  Box,
  Card,
  CardHeader
} from '@mui/material';

function SectionBase (props) {
  const { id, title, children } = props;

  return (
    <Box
      id={id}
      sx={sectionBaseStyles.container}
    >
      <Card
        sx={sectionBaseStyles.cardContainer}
        raised
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
      </Card>
    </Box>
  );
}

// Define received props types for validation.
SectionBase.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default SectionBase;
