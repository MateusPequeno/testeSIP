import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import "../CSS/App.css";
import React, { Component } from "react";
import { Button } from "primereact/button";

const InserirFormFunc = (props) => {
  
  const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
  return (
    <form >
      <label>Nome: </label>
      <br></br>
      <Field type="text" component="input" name="nome"></Field>
      <Field name="password" type="password" component={renderField} label="Senha: "/>

      <br></br>
      <div class="btn-enviar">
        <Button center label="Inserir" type="Submit" />
      </div>
    </form>
  );
};

const InserirForm = reduxForm({
  form: "formLing",
})(InserirFormFunc);

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, )(InserirForm);
