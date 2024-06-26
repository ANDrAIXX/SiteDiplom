//import React from 'react';
import {Router,Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes } from '../Route';
import { publicRoutes } from '../Route';
import {HomePageRoute} from '../utils/constanta';
import { useContext } from 'react';
import { Context } from '../index';

const AppRoute = () => {
    const {user} =useContext(Context);
    console.log(user);
    
    return ( 
        <Routes>
            {user.isAuth === true && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} exact/>
            )};

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} exact/>
            )};

            <Route path='*' element={<Navigate to={HomePageRoute} replace />} />
        </Routes>
    );
}

export default AppRoute;