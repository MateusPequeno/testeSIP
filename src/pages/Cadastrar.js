import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Calendar } from 'primereact/calendar';

const Login=()=>{
    //Estilo do "Retangulo container"
    const paperStyle={padding :20,height:'75vh',width:310, margin:"20px auto"}
    //Estilo do fundo do icone
    const avatarStyle={backgroundColor:' #1487f3bb'}
    //Estilo do botão
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><ContactMailTwoToneIcon/></Avatar>
                    <h2>Cadastrar usuário</h2>
                </Grid>
                <TextField label='Usuário' placeholder='Entre com o nome de usuário' fullWidth required/>
                <TextField label='Senha' placeholder='Entre com a senha' type='password' fullWidth required/>
                <br></br><br></br>
                <FormControl component="fieldset">
      <FormLabel component="legend">Gênero</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
        <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
        <FormControlLabel value="Não Declarar" control={<Radio />} label="Não Declarar" />
      </RadioGroup>
    </FormControl>
                 <Link href = "/">
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Cadastrar</Button>
                </Link>
            </Paper>
        </Grid>
    )
}

export default Login