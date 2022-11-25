import React from 'react';
import HeaderTwo from '../components/HeaderTwo';
import SectionTwo from '../components/SectionTwo';
import ScreenFour from '../components/ScreenFour';
import CoffeItems from '../components/CoffeItems';
import FooterComponent from '../components/FooterComponent';

const arr2 = [
	{
		id: 1,
		img: 'types.png',
		title: 'AROMISTICO Coffee 1 kg',
		price: 6.99,
		country: 'Brazil'
	},
	{
		id: 2,
		img: 'types.png',
		title: 'AROMISTICO Coffee 2 kg',
		price: 11.00,
		country: 'Kenya'
	},
	{
		id: 3,
		img: 'types.png',
		title: 'AROMISTICO Coffee 4 kg',
		price: 25.99,
		country: 'Columbia'
	},
	{
		id: 4,
		img: 'types.png',
		title: 'AROMISTICO Coffee 6 kg',
		price: 38.99,
		country: 'Brazil'
	},
	{
		id: 5,
		img: 'types.png',
		title: 'AROMISTICO Coffee 8 kg',
		price: 50.00,
		country: 'Kenya'
	},
	{
		id: 6,
		img: 'types.png',
		title: 'AROMISTICO Coffee 10 kg',
		price: 62.00,
		country: 'Columbia'
	},
]
const About = () => {
    return (
        <div>
            <HeaderTwo></HeaderTwo>
            <SectionTwo></SectionTwo>
            <ScreenFour></ScreenFour>
              <CoffeItems data={arr2} />
			  <FooterComponent></FooterComponent>
        </div>
    );
}

export default About;
