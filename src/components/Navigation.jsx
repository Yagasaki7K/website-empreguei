'use client'
import React, { useState, useContext } from 'react'
import { NavigationDetails } from './NavigationDetails';
import { ThemeContext } from '../../theme/ThemeContext'
import { Switch } from 'antd';

const Navigation = (isOtherPage) => {
    
    const { theme, toggleTheme, isChecked } = useContext(ThemeContext);


    return (
        <NavigationDetails>
            <a href="/" id="nav"><img src="/logo-white.png" alt="Empreguei" /></a>

            <p className="active"><a href="/">veja todas as vagas</a></p>
            <p className="active"><a href="/anunciar">publique suas vagas</a></p>

            <Switch checked={isChecked} checkedChildren="Dark" unCheckedChildren="Light" onChange={toggleTheme}/>
        </NavigationDetails>
    )
}

export default Navigation

