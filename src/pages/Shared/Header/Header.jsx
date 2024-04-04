import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='m-auto'>
            <div className='flex flex-col gap-[20px]'>
                <img src={logo} alt="logo" className='m-auto' />
                <div className='m-auto flex flex-col gap-[10px]'>
                    <p className='text-center text-xl'>Journalism Without Fear or Favour</p>
                    <p className='text-center text-xl font-bold'>{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;