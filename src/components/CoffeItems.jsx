import React from 'react';
import ItemTwo from './_childs/ItemTwo';


const CoffeItems = (props) => {
    const Items = () => {
       return props.data.map((item, index) => <ItemTwo item={item} key={index} />)
    }
    return (
        <div>
             <div className="for-flex">
                <Items />
             </div>
        </div>
    );
}

export default CoffeItems;
