import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { add } from '../redux/name/actions';

export default function Start() {
    const dispatch = useDispatch();
    const [Name, setName] = useState('');
    const [show, setShow] = useState(false);

    const handleContinue = () => {
        if (Name !== '') {
            dispatch(add(Name));
        }
    };

    useEffect(()=> {
        if(Name !== ""){
            setShow(true);
        }
    },[Name]);

    return (
        <div className='flex items-center min-h-[calc(100vh-80px)] justify-center mb-20'>
            <div className='bg-yellow-300 rounded-lg mx-3  p-5 sm:p-10'>
                <h1 className='text-2xl font-[500]'>Let's start</h1><br />
                <div className='flex flex-col sm:flex-row gap-5'>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        required
                        className='rounded-full px-5 font-xl h-12 border'
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Enter your name'
                    />
                    {show ? (
                        <Link to="/continue" className="px-8 w-fit sm:w-auto hover:shadow-md py-2 bg-white rounded-full text-xl font-[500]" onClick={handleContinue} >Continue</Link>
                    ) : ""}
                </div>
            </div>
        </div>
    );
}
