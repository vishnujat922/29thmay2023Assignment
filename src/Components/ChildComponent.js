import axios from 'axios';
import React, { useState } from 'react'

const ChildComponent = () => {

const [name , setName]= useState('')
const [surname , setSurname]= useState('');
const [address , setAddress]= useState('');


const handleSubmit = (e) => {
    alert('Hello Student Your Data is Successully added')
    e.preventDefault();
    axios.post('https://6475042e7de100807b1c11bc.mockapi.io/form-data',{
        s_name:name,
        s_surname:surname,
        s_address:address,
    })

}


    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='bg-primary p-4 text-center text-white'>
                        <h1>Create Form Data</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Enter Your Name</label>
                            <input type='text' placeholder='name' className='form-control' onChange={(e)=> setName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Your Surname</label>
                            <input type='text' placeholder='Surname' className='form-control' onChange={(e)=> setSurname(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Your Address</label>
                            <input type='text' placeholder='address' className='form-control' onChange={(e)=> setAddress(e.target.value)} />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='submit' className='btn btn-primary' />
                        </div>
                    </form>
                    {name}
                    <br/>
                    {surname}
                    <br/>
                    {address}
                </div>
            </div>
        </>
    )
}

export default ChildComponent