import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile155730Navigator from '../features/UserProfile155730/navigator';
import Tutorial155729Navigator from '../features/Tutorial155729/navigator';
import NotificationList155701Navigator from '../features/NotificationList155701/navigator';
import Settings155700Navigator from '../features/Settings155700/navigator';
import Settings155692Navigator from '../features/Settings155692/navigator';
import UserProfile155690Navigator from '../features/UserProfile155690/navigator';
import BlankScreen0155668Navigator from '../features/BlankScreen0155668/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile155730: { screen: UserProfile155730Navigator },
Tutorial155729: { screen: Tutorial155729Navigator },
NotificationList155701: { screen: NotificationList155701Navigator },
Settings155700: { screen: Settings155700Navigator },
Settings155692: { screen: Settings155692Navigator },
UserProfile155690: { screen: UserProfile155690Navigator },
BlankScreen0155668: { screen: BlankScreen0155668Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
