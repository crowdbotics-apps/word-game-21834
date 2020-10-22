import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile155815Navigator from '../features/UserProfile155815/navigator';
import Maps155796Navigator from '../features/Maps155796/navigator';
import Settings155774Navigator from '../features/Settings155774/navigator';
import Settings155759Navigator from '../features/Settings155759/navigator';
import NotificationList155758Navigator from '../features/NotificationList155758/navigator';
import Maps155757Navigator from '../features/Maps155757/navigator';
import Settings155742Navigator from '../features/Settings155742/navigator';
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
UserProfile155815: { screen: UserProfile155815Navigator },
Maps155796: { screen: Maps155796Navigator },
Settings155774: { screen: Settings155774Navigator },
Settings155759: { screen: Settings155759Navigator },
NotificationList155758: { screen: NotificationList155758Navigator },
Maps155757: { screen: Maps155757Navigator },
Settings155742: { screen: Settings155742Navigator },
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
