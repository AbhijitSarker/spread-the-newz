import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img className='w-50' src={logo} alt="" />
                <p className='mb-0'>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;