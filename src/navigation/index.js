import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import assets from 'assets';
import { TabIcon } from 'components';
import Map from 'containers/Map';
import Home from 'containers/Home';
import PlacesFilter from 'containers/PlacesFilter';
import PlacesList from 'containers/PlacesList';
import Place from 'containers/Place';
import { colors } from 'styles';

import styles from './styles';


const ModalNavigation = createStackNavigator({
  Tabs: createBottomTabNavigator(
    {
      home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Город',
          tabBarIcon: TabIcon({
            image: assets.home,
            imageFocused: assets.homeFill,
          }),
        },
      },
      map: {
        screen: Map,
        navigationOptions: {
          tabBarLabel: 'Город',
          tabBarIcon: TabIcon({
            image: assets.home,
            imageFocused: assets.homeFill,
          }),
        },
      },
      user: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Город',
          tabBarIcon: TabIcon({
            image: assets.home,
            imageFocused: assets.homeFill,
          }),
        },
      },
    },
    {
      initialRouteName: 'home',
      lazy: false,
      tabBarOptions: {
        allowFontScaling: true,
        labelStyle: styles.tabBarLabel,
        style: styles.tabBar,
        activeTintColor: colors.accent,
        inactiveTintColor: '#000',
      },
    },
  ),
  PlacesFilter,
  PlacesList,
  Place,
}, {
  mode: 'modal',
  transparentCard: true,
  initialRouteName: 'Place',
  headerMode: 'none',
});

export default createAppContainer(ModalNavigation);
