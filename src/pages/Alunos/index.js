import './styles.css';
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import { FiXCircle, FiEdit, FiUserX } from 'react-icons/fi';

import logoCadastro from '../../assets/cadastro1.png';

export default function Alunos() {
    return(
        <div className='aluno-container'>
            <header>
                <img src={logoCadastro} alt="Cadastro" />
                <span>Bem vindo, <strong>Carlos h</strong></span>
                <Link className='button' to="/aluno/novo/0">Novo Aluno</Link>
                <button type='button'>
                    <FiXCircle size={35} color='#17202a'></FiXCircle>
                </button>
            </header>
            <form>
                <input type='text' placeholder='Nome'></input>
                <button type='button' className='button'>Filtra aluno por nome (parcial)</button>
            </form>
            <h1>Relação de Alunos</h1>
            <ul>
                <li>
                    <b>Nome:</b>Paulo<br/><br/>
                    <b>Email:</b>paulo@hotmail.com<br/><br/>
                    <b>Idade:</b>32<br/><br/>
                    <button type="button">
                            <FiEdit size="25" color="#17202a" />
                    </button>
                    <button type="button" > 
                            <FiUserX size="25" color="#17202a" />
                    </button>
                </li>
            </ul>

        </div>


    )
}