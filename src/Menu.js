import React from 'react';
const Menu = (props) => {
    return (<li className="bloc">
    <a  className={ props.data.active ? "blue" :"black" } href={props.data.link}>{props.data.text}</a>
    
    
    {props.data.submenu && <ul className="option"> {props.data.submenu.map(el=> <li>{el}</li>)} </ul>}
    </li>
       )
    }
    export default Menu;