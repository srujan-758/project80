import React from 'react'
import {TabNavigator} from '../App'
import SettingScreen from '../screens/SettingScreen'
import {createDrawerNavigator} from 'react-navigation-drawer'
import customSideBarMenu from './customSideBarMenu'

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
     screen:TabNavigator   
    },

    Settings : {
     screen:SettingScreen   
    }

   },

   {
    contentComponent:customSideBarMenu
   },

   {
    initialRouteName:'Home'
})