import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function Result() {
    const navigate = useNavigate();
    const data = useSelector((state)=> state.resultReducer);
    const name = useSelector((state)=> state.nameReducer);
    

    const handleDownload = () => {
        navigate("/certificate");
    }
  return (
    <div className='min-h-[calc(100vh-80px)] flex flex-col items-center justify-center max-w-7xl mx-auto'>
        <div className='w-[95%] mx-auto sm:mx-0 sm:w-[500px] flex flex-col justify-between bg-white border rounded-lg h-[300px] shadow-sm'>
            <div className='border-b text-2xl text-center py-4 font-bold text-slate-700'>
                Typing Result
            </div>
            <div className='text-center text-2xl'>
                <h1>WPM : {data.wpm}</h1>
                <h1>Mistakes : {data.mistakes}</h1>
                <h1>Accuracy : {data.accuracy}%</h1>
            </div>
            <div className='border-t text-xl text-center py-4 bg-slate  text-slate-700'>
                <span onClick={handleDownload} className='bg-yellow-300 p-2 rounded-full px-5 cursor-pointer'>Download Certificate</span>
            </div>
        </div>
    </div>
  )
}
