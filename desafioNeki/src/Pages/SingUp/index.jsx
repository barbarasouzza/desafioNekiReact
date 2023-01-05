import React from 'react'
import './styles.css'
import { useState } from 'react'

import Logo from '../../assets/img/logo.png'
import Ilustracao from '../../assets/img/ilustracao.svg'
import api from '../../service/api/api';

const SingUp = () => {

  const [id, setId] = useState("")
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [lastLoginDate, setLastLoginDate] = useState("")

  const [users, setUsers] = useState("")

  const handleSingUp = async (e) => {
    e.preventDefault()
    const user = {
      id,
      login,
      password,
      lastLoginDate
    }

    // Coleta todos os usuraios da api 
    api
    .get("api/users")
    .then((response) => setUsers(response.data))

    // console.log(users)

    // Verificação se ha usuario igual 
    const verificacao = false

    for ( let cont in users ) {
      if (user.login == users[cont].login) {
        alert("Esse usuario já esta cadastrado")
        verificacao = true
        break
      } 
    }

    if ( verificacao == false ) {
      // Verificação de senha
      if (password != confirmPassword) {
        alert("As senhas não coincidem")
      } 
  
      // Cadastro de usuario
      api
      .post("api/users", {
        login: login,
        password: password,
      })
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error("ocorreu um erro " + err);
      })

      navigation.navigate("Login")

    }
  }

  return (
    <>
      <header className='header'>
        <img src={Logo} className='logo' alt="Logo" /><br />
      </header>

      <div className='container'>

        <img src={Ilustracao} className='ilustracao' alt="Logo" /><br />

        <div id='login'>

          <div>
            <h1 className='login'>Cadastro</h1>
          </div>

          <div className="input">
            <input type="input" className="inputUser" placeholder="Usuário" name="name" id='name' required onChange={(e) => setLogin(e.target.value)} /><br />
            <input type="password" className="inputUser" placeholder="Senha" name="name" id='name' required onChange={(e) => setPassword(e.target.value)} /><br />
            <input type="password" className="inputUser" placeholder="Confirme sua senha" name="name" id='name' required onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>

          <div id='button'>
            <button
              onClick={handleSingUp}
              className='button'
            >Entrar</button>
          </div>

          {/* <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to="/Cadastro"
        exact
      >
        <p className='cadastro'> Cadastre-se </p>
      </NavLink> */}
        </div>
      </div>


    </>
  )
}

export default SingUp