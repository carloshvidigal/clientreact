import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import {FiCornerDownLeft, FiUserPlus } from 'react-icons/fi';


export default function NovoAluno(){ 
    return(
        <div className ="novo-aluno-container">
            <div className="content">
                
                <section className='form'>
                <FiUserPlus size="105" color="#17202a"/>
                <h1>Texto</h1>
                <Link className="back-link" to="/alunos">
                    <FiCornerDownLeft size="25" color="#17202a"/>
                    Retornar
                </Link>
                </section>
                <form>
                    <input placeholder='Nome'/>
                    <input placeholder='Email'/>
                    <input placeholder='Idade'/>
                    <button className="button" type="submit">Texto</button>
                </form>
            </div>
        </div>
    );

    
}