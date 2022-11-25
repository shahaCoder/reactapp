import React from 'react';
import HeaderComponent from './HeaderComponent'
const ScreenFirst = () => {
    return (
        <div className="firstScreenWrapper">
            <HeaderComponent></HeaderComponent>
            <section className="firstScreen" >
            <div className="heading">
                <h1>Everything You Love About Coffee</h1>
                <img src="/icons/beens.svg" alt="" />
                <p>
                    We makes every day full of energy and taste
                    Want to try our beans?  
                </p>
                <button>
                    More
                </button>
            </div>
        </section>
        </div>
    );
};


export default ScreenFirst;