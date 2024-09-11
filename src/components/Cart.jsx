import React from 'react'

const Cart = ({ filteredData }) => {
    if (filteredData.length < 1) {
        return (
            <h2 style={{textAlign: "center"}}>Sorry, Nothing found</h2>
        )
    }
    return (
        <div className='cards'>
            {
                filteredData.map((element, index) => {
                    return (
                        <div className='card'>
                            <img variant='top' className='card_img' src={element.imgdata} />
                            <div className="card_body">
                                <div className="upper_data">
                                    <h4 className='mt-2'>{element.dish}</h4>
                                    <span className=''>{element.rating} <span className=''>&nbsp;★</span></span>
                                </div>
                                <div className="lower_data">
                                    <h5 style={{ fontWeight: "bold" }}><span style={{ fontWeight: "bold", color: "gray" }}>Category: </span>{element.category}</h5>
                                </div>
                                <div className="extra"></div>
                                <div className="last_data">
                                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>₹ {element.price}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart
