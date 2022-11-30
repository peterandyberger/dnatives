import { Typography, Box } from '@mui/material';

const RESULT = (props) => {
  return (
    <div className="result">
      <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <Typography variant="h5" component="h5">
          {props.result}
        </Typography>
      </Box>
    </div>
  );
};

export default RESULT;
