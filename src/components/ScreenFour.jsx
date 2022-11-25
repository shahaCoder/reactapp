import React from 'react';

const ScreenFour = () => {
    return (
        <>
            <div className="ScreenFour">
                <div className="left-box">
                    <p>Looking for</p>
                    <input type="text" placeholder='Start typing here' />
                </div>
                <div className="right-box">
                    <p>Or filter</p>
                    <div className="btns">
                        <button>Brazil</button>
                        <button>Kenya</button>
                        <button>Columbia</button>
                    </div>
                </div>
            </div>
            <div className="card-box">
            </div>
        </>
    );
}
export default ScreenFour;
