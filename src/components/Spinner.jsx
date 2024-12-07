import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
        <div className='text-center'>
            <img className="my-2" src={loading} alt="Loading" />
        </div>
    )

}
export default Spinner