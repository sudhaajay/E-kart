import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <> 
    <div style={{width:'100%', height:'300px'}}
    className='d-flex justify-content-center align-items-center flex-column mt-5 bg-primary'>
        <div className='d-flex justify-content-evenly align-items-center mb-5 w-100' style={{color:'white'}}>
            <div style={{width:'400px',color:'white'}}>
                <h4> <i style={{color:'white'}} className="fa-solid fa-cart-shopping fa-bounce me-3"></i>E-KART</h4>
                <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ea ducimus, illo omnis a officia. Earum dicta laborum quidem voluptatibus porro nemo inventore harum, iste impedit nesciunt commodi, officiis ea!</h6>
            </div>
            <div className='d-flex flex-column'>
              <h4>Links</h4>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
              <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
              <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
            </div>
            <div className='d-flex flex-column'>
                <h4>Guides</h4>
                <Link to={'https://react.dev/'} target='_blank' style={{textDecoration:'none',color:'white'}} >React</Link>
                <Link to={'https://react.dev/'} target='_blank' style={{textDecoration:'none',color:'white'}} >React Bootstrap</Link>
                <Link to={'https://react.dev/'} target='_blank' style={{textDecoration:'none',color:'white'}} >Boots watch</Link>
            </div>
            <div>
                <h4>Contact</h4>
                <div className='d-flex'>
                    <input type="text" className='form-control' placeholder='Enter Email Id' />
                    <button className='btn btn-warning ms-2'>Subscribe</button>
                </div>
                <div className='d-flex justify-content-evenly mt-3'>
                   <Link style={{textDecoration:'none'}} className='text-warning'><i className="fa-brands fa-instagram fa-2x"></i></Link>
                   <Link style={{textDecoration:'none'}} className='text-warning'><i className="fa-brands fa-reddit fa-2x"></i></Link>
                   <Link style={{textDecoration:'none'}} className='text-warning'><i className="fa-brands fa-facebook fa-2x"></i></Link>
                   <Link style={{textDecoration:'none'}} className='text-warning'><i className="fa-brands fa-linkedin fa-2x"></i></Link>
                </div>
            </div>
        </div>
        <p style={{color:'white'}}>copyright @2024 E-Kart build with React Redux</p>
    </div>
    </>
  )
}

export default Footer