import React from 'react';

const FooterComponent = () => {
    return (
        <div>
            <footer>
            <ul className='list1'>
                    <img src="/images/coffee-logo.svg" alt="" className='coffe-logo-img' />
                    <li className='footer-text'>Coffee house</li>
                </ul>
                    <ul className='list'>
                    <li className='footer-text'>Our coffee</li>
                    <li className='footer-text'>For your pleasure</li>
                    </ul>
            </footer>
                    <div className="footer-img-block">
                        <img src="/icons/beens.svg" alt="" />
                    </div>
        </div>
    );
}

export default FooterComponent;
