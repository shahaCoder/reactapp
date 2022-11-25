
import ScreenFirst from "../components/ScreenFirst";
import ScreenThree from "../components/ScreenThree";
import ScreenTwo from "../components/ScreenTwo";
// import ScreenFour from "./components/ScreenFour";
import FooterComponent from "../components/FooterComponent";

const arr = [
	{
		id: 1,
		img: 'coffee.png',
		title: 'Solimo Coffee Beans 2 kg',
		price: 10.73,
		qt: 0
	},
	{
		id: 2,
		img: 'info.png',
		title: 'Solimo Coffee Beans 2 kg',
		price: 10.73,
		qt: 10
	},
	{
		id: 3,
		img: 'types.png',
		title: 'Solimo Coffee Beans 2 kg',
		price: 10.73,
		qt: 0
	},
]

function PagesTwo() {
	return (
		<div className="App">
			<ScreenFirst/>
			<ScreenTwo/>
			<ScreenThree data={arr} />
			<FooterComponent></FooterComponent>
		</div>
	)
}



export default PagesTwo;
