import React, { useEffect, useRef } from 'react'
import Table from './Table'
import { MdOutlineCancel } from "react-icons/md";

const Modal = ({ showPopupData, setShowPopupData }) => {
    const overlayRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                setShowPopupData(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [overlayRef, setShowPopupData]);

    return (
        <div className='fixed inset-0 bg-gray-900 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50'>
            <div ref={overlayRef} className='bg-gray-950 p-7 lg:w-auto md:w-98 w-[90%] rounded-xl relative'>
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold pb-3'>Table</h3>
                    <button onClick={() => setShowPopupData(null)} className='p-2'>
                        <MdOutlineCancel size={26} className='text-rose-500 hover:text-rose-600' />
                    </button>
                </div>
                <Table data={showPopupData.data} name={showPopupData.name} />
            </div>
        </div>
    )
}

export default Modal