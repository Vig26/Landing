import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';

import { styled } from '@mui/material/styles';


const PageTitle = ({ name }) => {
  // const BootstrapTooltip = styled(({ className, ...props }) => (
  //   <Tooltip {...props} arrow classes={{ popper: className }} />
  // ))(({ theme }) => ({
  //   [`& .${tooltipClasses.arrow}`]: {
  //     color: theme.palette.common.black,
  //   },
  //   [`& .${tooltipClasses.tooltip}`]: {
  //     backgroundColor: theme.palette.common.black,
  //   },
  // }));
  return (
    <Typography sx={{ marginBottom:20,
      borderBottom: 'solid 1px #EAEAEA',
      marginBottom:"30px",
      fontWeight: "bold",
      fontSize:"18px",
      lineHeight:"2",
      color: "#2169B2" }} >{name}
     
      {/* {isButton && <Button variant="contained" onClick={handleBack && handleBack} style={{ float: 'right' }} sx={{ borderRadius: '5px' }} size={"small"}>Back</Button>} */}
      </Typography>
  )
}

export default PageTitle