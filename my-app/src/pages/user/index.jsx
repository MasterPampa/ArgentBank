import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Profile from '../../components/profile/Profile';
import Accounts from '../../components/accounts/Accounts';

function User() {
    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="wrapper">
            <Header />
            <main className='background'>
                <Profile />
                <Accounts />
            </main>
            <Footer />
        </div>
    );
}

export default User;
