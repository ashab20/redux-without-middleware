import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <h4>Hot Link</h4>
            <ul>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Product</Link></li>
                <li><Link to="#">Services</Link></li>
                <li><Link to="#">Contact</Link></li>
                <li><Link to="#">Term and Condition</Link></li>
            </ul>
        </div>
        <div>
           <h4>About Us</h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vitae iste ipsa. Aut totam dignissimos omnis, quam sunt dolore modi voluptas cupiditate quos maxime! Numquam iure voluptatibus cum quae ex.</p>
        </div>
        <div>
             <h4>Quick Jump</h4>
            <ul>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Product</Link></li>
                <li><Link to="#">Services</Link></li>
                <li><Link to="#">Contact</Link></li>
                <li><Link to="#">Term and Condition</Link></li>
            </ul>
        </div>
        <div>
            <input type="email"  placeholder='subscribe'/>
            <input type="button" value="Subscribe" />
        </div>
    </div>
  )
}

export default Footer