import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RedditIcon from '@material-ui/icons/Reddit';
import Checkbox from '@material-ui/core/Checkbox';
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
                     <Avatar style={avatarStyle}><HomeIcon/></Avatar>
                    <h2>Página de Login</h2>
                    <p><span>Some text</span></p>
                </Grid>
                <TextField label='Usuário' placeholder='Entre com o nome de usuário' fullWidth required/>
                <TextField label='Senha' placeholder='Entre com a senha' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Lembrar de mim"
                 />
                 <Link href = "/ecommerce">
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>
                </Link>
                <br></br><br></br>
                <Typography>
                    Entrar com :
                </Typography>
                <center>  
                    
               <Avatar style={avatarStyle}><FacebookIcon/></Avatar> 
                <Avatar style={avatarStyle}><LinkedInIcon/></Avatar>   
                <Avatar style={avatarStyle}><RedditIcon/></Avatar>   
               
                </center>
                <Typography >
                     <Link href="#" >
                       Esqueci minha senha
                </Link>
                </Typography> 
                <Typography > Ainda não tem conta?
                     <Link href="/cadastrar" >
                        Criar conta
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login