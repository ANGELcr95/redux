/* eslint-disable */
import Banner from './HomePage/Banner';
import ExclusiveBrands from './HomePage/ExclusiveBrands';
import Information from './HomePage/Information';
import Laboratories from './HomePage/Laboratories';
import NavigationBar from './HomePage/NavigationBar';
import Services from './HomePage/Services';
import Suggestions from './HomePage/Suggestions';
import Telefares from './HomePage/Telefares';

const HomePage = () => {
    
    return (
        <div className="HomePage">
            <Information/>
            <NavigationBar/>
            <Banner/>
            <Telefares/>
            <Suggestions/>
            <Services/>
            <Laboratories/>
            <ExclusiveBrands/>
        </div>
    );
};

export default HomePage;