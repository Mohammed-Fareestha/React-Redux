import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {deleteCustomer} from './Slice/customerSlice'



const CustomerView = () => {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch()

  function deleteHandler(index){
    dispatch(deleteCustomer(index))
  }



  return (
    <div>
        <h5>View Added Customers</h5>
        <ul>
            {
              customers.map((customer, index) =><li>{customer} <button onClick={() => deleteHandler(index)}>Delete</button></li> )
            }
        </ul>
    </div>
  )
}

export default CustomerView