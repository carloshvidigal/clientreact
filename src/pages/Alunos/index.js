import './styles.css';
import {Link, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import { FiXCircle, FiEdit, FiUserX } from 'react-icons/fi';

import logoCadastro from '../../assets/cadastro1.png';

export default function Alunos() {

     //filtrar dados
     const [searchInput,setSearchInput]  = useState('');
     const [filtro, setFiltro] = useState([]);

     const [alunos, setAlunos] = useState([]);

     const email = localStorage.getItem('email');
     const token = localStorage.getItem('token');

    const navigate = useNavigate();

    const authorization = {
         headers : {
           Authorization : `Bearer ${token}`
         }
     }

    useEffect(() => {
        if (!token) {
            navigate('/');
            return;}

        api.get('api/alunos', authorization)
       .then(response => {
        setAlunos(response.data);
    })
    
    .catch(err => {
      if (err.response?.status === 401) {logout();}
      else { console.error(err);}
    });}, [token]);

    
    async function logout(){
       try{
          localStorage.clear();
          localStorage.setItem('token','');
          authorization.headers ='';
          navigate('/'); 
       }catch(err){
        alert('Não foi possível fazer o logout' + err);
       }
     }
    
    
    return(
        <div className='aluno-container'>
            <header>
                <img src={logoCadastro} alt="Cadastro" />
                <span>Bem vindo, <strong>{email}</strong></span>
                <Link className='button' to="/aluno/novo/0">Novo Aluno</Link>
                <button onClick={logout} type='button'>
                    <FiXCircle size={35} color='#17202a'></FiXCircle>
                </button>
            </header>
            <form>
                <input type='text' placeholder='Nome'></input>
                <button type='button' className='button'>Filtra aluno por nome (parcial)</button>
            </form>
            <h1>Relação de Alunos</h1>
            <ul>
               {alunos.map(aluno=>(
                 <li key={aluno.id}>
                  <b>Nome:</b>{aluno.nome}<br/><br/>
                  <b>Email:</b>{aluno.email}<br/><br/>
                  <b>Idade:</b>{aluno.idade}<br/><br/>
{/* 
                <button onClick={()=> editAluno(aluno.id)} type="button">
                     <FiEdit size="25" color="#17202a" />
                 </button> */}

                 {/* <button type="button" onClick= {()=> deleteAluno(aluno.id)}> 
                     <FiUserX size="25" color="#17202a" />
                 </button> */}
               </li>
               ))}
            </ul>

        </div>


    )
}