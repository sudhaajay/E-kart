import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';


function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  console.log('====CART ARRAY======');
  console.log(cartArray);
  const dispatch = useDispatch()

  const [total, setTotal] = useState(0)
  const getTotal = () => {
    let sum = 0;
    cartArray.forEach(item => {
      sum = sum + item.price
    });
    setTotal(sum)
  }

  useEffect(() => {
    getTotal()
  }, [cartArray])


  return (

    <>
      <Link to={'/'}><button className='btn btn-success m-5' ><i class="fa-solid fa-arrow-left me-2"></i> Back to home</button></Link>
      <div style={{ marginTop: '50px' }} >

        {
          cartArray?.length > 0 ?
            <div className='row w-100  '>
              <div className='col-lg-6 m-5 '>
                <table className='table shadow border'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product title</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.title}</td>
                          <td><img src={item.image} alt="" height={'50px'} width={'60px'} /></td>
                          <td>&#8377; {item.price}</td>
                          <td><Button variant='outline-danger' onClick={() => dispatch(removeFromCart(item.id))}>
                            <i class="fa-solid fa-trash"></i>
                          </Button></td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>
              <div className='col-lg-4 '>
                <div className='border shadow p-5'>
                  <h3 className='d-flex text-primary align-items-center justify-content-center mb-4'>Cart Summary</h3>
                  <h5>Total number of products: <span className='text-warning fw-bold'>{cartArray?.length}</span></h5>
                  <h5>Total price: <span className='text-warning fw-bold'>{total.toFixed(2)}</span></h5>
                  <button className='btn btn-success rounded w-100 mt-3'>Checkout</button>

                </div>
              </div>
            </div> :
            <div>
              <div className='d-flex justify-content-center align-items-center flex-column fa-fade '>
                <img height={'300px'} width={'450px'} src="https://cdn.dribbble.com/users/2058104/screenshots/4198771/media/6a7fbadba54f099e51e634281956fae0.jpg?resize=400x300&vertical=center" alt="" />
                <h2 className='text-danger'>YOUR CART IS EMPTY</h2>
              </div>
            </div>
        }

      </div>
    </>
  )
}

export default Cart