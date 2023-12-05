import React, { useState } from 'react'
import CustomerView from './CustomerView'
import { addCustomers as addCustomerAction } from "./Slice/customerSlice";
import { useDispatch } from 'react-redux'


const CustomerAdd = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    // const [customers, setCustomers] = useState([])

    function addCustomers(){
        if(input){
            // setCustomers((prevDate)=> [...prevDate, input])
            dispatch(addCustomerAction(input))
            setInput('')
        }
    }

  return (
    <div>
        <h3>Add Customer</h3>
        <input value={input} onChange={(e)=> setInput(e.target.value)} type='text' />
        <button onClick={addCustomers} >Add Now</button>
        <CustomerView />
    </div>
  )
}

export default CustomerAdd