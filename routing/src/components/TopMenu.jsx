import React from 'react';
import { Link } from 'react-router-dom';

const TopMenu = () => {
    return ( 
        <div>
            <ul>

                <li className='Menu'><Link className='MenuText' to="/">Home</Link></li>
                <li className='Menu'><Link className='MenuText' to="/products">Products</Link></li>
                <li className='Menu'><Link className='MenuText' to="/contact-us">Contact Us</Link></li>
                <li className='Menu'><Link className='MenuText' to="/privacy">Privacy Policy</Link></li>
            </ul>
        </div>
     );
}
 
export default TopMenu