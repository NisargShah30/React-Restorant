import React, { useRef } from 'react'
import './header.css'
import { Container } from "reactstrap"

const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Menu',
        url: '#'
    },
    {
        display: 'Recipes',
        url: '#'
    },
    {
        display: 'Contact',
        url: '#'
    },
]

const Header = () => {

    const menuRef = useRef()
    const menuToggle = () => menuRef.current.classList.toggle('active_menu')
    return (
        <header className='header'>
            <Container>
                <div className='navigastion'>
                    <div className='logo'>
                        <h2 className='d-flex align-items-center gap-1'>
                            <span><i class="ri-restaurant-2-fill" style={{color:'orange'}}></i></span>
                            Chef Food
                        </h2>
                    </div>
                    <div className='nav_menu' ref={menuRef}>

                        <div className='nav_list_wrapper d-flex align-items-center gap-5'>
                            <ul className='nav_list'>
                                {
                                    navLinks.map((item, index) => (
                                        <li className='nav_item' key={index}><a href={item.url} onClick={menuToggle}>{item.display}</a></li>
                                    ))
                                }
                            </ul>
                            <div className='menu_right'>
                                <div className='custom_search'>
                                    <input type='text' placeholder='Search Item....' />
                                    <span><i className='ri-search-line'></i></span>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div>
                        <span className='cart_icon'>
                            <i className='ri-shopping-basket-line'></i>
                            <span className='badge'>2</span>
                        </span>
                    </div>


                    <div className='mobile_menu'>
                        <span><i className='ri-menu-line' onClick={menuToggle}></i></span>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
//header ne pages na Home ma import kairu che // 
