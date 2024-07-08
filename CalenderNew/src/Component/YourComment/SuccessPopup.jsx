import React from 'react'

const SuccessPopup=({message, show, onClose})=>{


  return (
    <>
    {show && (
        <div className="fixed inset-0 flex items-start justify-center z-50 top-10">
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <span>{message}</span>
              <button onClick={onClose} className="ml-4 bg-red-500 text-white p-2 rounded-lg">
                
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SuccessPopup