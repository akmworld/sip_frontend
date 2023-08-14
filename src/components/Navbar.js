import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../Asset/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">&nbsp;&nbsp;<img src={Logo} style={{width:'130px'}}/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to='home' class="nav-link">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        
                        <li class="nav-item">
                            <Link to='about' class="nav-link" href="#">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='contact' class="nav-link" href="#">Contact</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='login' class="nav-link" href="#">Login</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Registraion</a>
                        </li>
                        
                        
                    </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar
