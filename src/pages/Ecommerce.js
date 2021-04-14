import React, { Component } from 'react';
import { products } from '../ProdutosLista';
import { Message } from 'primereact/message';
import "../CSS/Produtos.css";
import imgIPhoneXL from "../imagens/imgIPhoneXL4.jpg";
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
//Estilo do "Retangulo container"
const paperStyle={padding :20,height:'25vh',width:280, margin:"20px auto"}
//Estilo do fundo do icone
//Estilo do botão
const btnstyle={margin:'8px 0'}
export default class ProductList extends Component {
  share() {
      window.alert('Produto Adicionado ao carrinho!');
  }
  getProduct(product, index) {
      return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
          <div key={index}>
              <h3>
                  <a title={product.name + ' details'} href="/">{product.name}</a>
              </h3>
              <p>Preço:{product.price} </p>
              <p>Descrição: {product.description} </p>
              
              <button className="btn" onClick={this.share}><AddShoppingCartSharpIcon fontSize="small" /></button>
          </div>
          </Grid>
          </Paper>
          </Grid>
      )
  }
  render() {
      return (
          <>
          <center>
              <h2>Produtos</h2>
              <Link to="/cart" className="navbar-item">
                  Cart
                  <span
                    className="tag is-primary"
                    style={{ marginLeft: "5px" }}
                  />
              <img height = '250' width = '725' src={imgIPhoneXL}/>
              </center>
              <br/>
              <div>
                  {
                      products.map((product, index) => {
                          return this.getProduct(product, index);
                      })
                  }
              </div>
          </>
      );
  }
}