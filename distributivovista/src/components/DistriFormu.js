import { Button, Card, CardContent, Grid, TextField} from "@mui/material";
import {useState} from 'react'


export default function DistriFormu() {
    
    const [distriformu, setdistriformu]= useState ({
        codigo:"",
        descri:"",
       

    });

    const handleSubmit = async(e) => {
      e.preventDefault();
      const res= await fetch('http://localhost:3000/distrifun', {
        method: 'POST',
        body: JSON.stringify(distriformu),
        headers: { "Content-Type":"application/json"},
      });
      const data= await res.json()
      
      console.log(data)
      
    };
    
    const handleChange= e=>
      setdistriformu({...distriformu, [e.target.name]: e.target.value});
    

  return (
     <Grid container direction={"column"} alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={5}>
          <Card>
              <CardContent>
                <form onSubmit={handleSubmit} >
                  <h2 style={{color : 'blue'}}>Funciones Sustantivas</h2>
                    
                  <TextField
                    
                    variant="filled"
                    label = "Codigo"
                    required id="standard-required"
                    sx={{
                      display:'block',
                      margin:'.7rem 0',
                      }}
                      name="codigo"
                      onChange={handleChange}
                  />
                   <TextField
                    variant="filled"
                    label = "Funcion Sustantiva"
                    required id="standard-required"
                    sx={{
                      display:'block',
                      margin:'.7rem 0',
                      }}
                      name="descri"
                      onChange={handleChange}
                  />
                  <Button style={{marginLeft:'0.8rem' }} variant="contained" color="secondary" type="submit">Nuevo</Button>
                  <Button style={{marginLeft:'0.8rem' }} variant="contained" color="primary" type="submit">Grabar</Button>
                 
                </form>
              </CardContent>
            
          </Card>
        </Grid>
     </Grid>
    );
  }