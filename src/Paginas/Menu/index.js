import React from 'react';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/present">Strike</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;