import {AppBar, Box, Button, Container, Toolbar, Typography} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function DistriLista() {
    const navigate =useNavigate()
    return (
      <Box sx= {{flexGrow: 1}}>
        <AppBar position='static' color='transparent'>
            <Container>
                <Toolbar>
                    <Typography sx= {{flexGrow: 1}}>
                        <Link te="/">PERN</Link>
                    </Typography>
                    <Button variant='contained' color='primary' onClick={()=> navigate("/Formulario")}>
                        XXX
                    </Button>
                    <Button variant='contained' color='secondary' onClick={()=> navigate("/Formulario")}>
                        XXX
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
      </Box>
    );
  }