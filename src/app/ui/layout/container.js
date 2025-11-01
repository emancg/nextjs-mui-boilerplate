import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


export default function SimpleContainer(props) {
  const { children } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{padding:0, width:'100%', justifyContent: 'center', display: 'flex', backgroundColor:'transparent'}}>
        {children}
      </Container>
    </React.Fragment>
  );
}
