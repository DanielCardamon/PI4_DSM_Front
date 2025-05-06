
import React from 'react'


const Itemmenu = ({ img, gastos, data }) => {
    return (
        <>
            <div className="grid">
                <div className="menuitem"><img src={img} alt="img" /></div>
                <div className="display=inline-flex ">
                    <div className='menuitem'>{gastos}</div>
                    <div className='menuitem2'>{data}</div>
                </div>
            </div>

        </>

    )
}

export default Itemmenu

