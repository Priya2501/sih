import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css';

class Navbar extends Component{
    state = { clicked:false }
    
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>OverSight</h1>
                {/* for hamburger menu */}
                <div className='menu-icon' onClick={this.handleClick}> 
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index) => {
                        return(
                            <li key={index}>
                                <a className={item.cname} href={item.url}> 
                                {item.name} 
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        )
    };
}

export default Navbar;