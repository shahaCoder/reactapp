import React from 'react';

const ItemTwo = ({item}) => {
    return (
        <div>
             <div className='item-component2' >
            <img src={`/images/${item.img}`} alt="" />
            <p className='title'>
                {item.title}
            </p>
            <div className="txt">
            <p className='country'>
                {item.country}
            </p>
            <p className='price'>{item.price}$</p>
            </div>
        </div>
        </div>
    );
}

export default ItemTwo;
