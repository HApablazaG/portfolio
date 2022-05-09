import PropTypes from 'prop-types';
import projectBaseStyles from '../assets/jss/projectBase';
import {
  Avatar,
  Box,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@mui/material';

function ProjectBase (props) {
  const { name, year, companyLogo, techList, children } = props;

  return (
    <Box sx={projectBaseStyles.cardContainer}>
        <CardHeader
          title={name}
          subheader={year}
          subheaderTypographyProps={{
            sx: projectBaseStyles.subheader
          }}
          action={(
            <Avatar
              sx={projectBaseStyles.avatar}
              imgProps={{
                sx: projectBaseStyles.avatarImg
              }}
              variant="square"
              src={companyLogo}
            />
          )}
        />

        <CardContent>
          { children }
        </CardContent>

        <Divider sx={projectBaseStyles.divider} />

        <Typography
          sx={projectBaseStyles.techContainer}
          component="div"
          align="center"
          variant="overline"
        >
          { techList?.join(' | ') }
        </Typography>
    </Box>
  );
}

// Define received props types for validation.
ProjectBase.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  companyLogo: PropTypes.string.isRequired,
  techList: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node
};

export default ProjectBase;
