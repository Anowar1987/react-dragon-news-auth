import logo from '../../../assets/Images/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center items-center mt-12'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;