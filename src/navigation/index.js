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
import My from 'containers/My';
import { colors } from 'styles';

import styles from './styles';


const ModalNavigation = createStackNavigator({
  Tabs: createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Город',
          tabBarIcon: TabIcon({
            image: assets.home,
            imageFocused: assets.homeFill,
          }),
        },
      },
      Map: {
        screen: Map,
        navigationOptions: {
          tabBarLabel: 'Город',
          tabBarIcon: TabIcon({
            image: require('../assets/img/icon/map-pointer.png'),
            imageFocused: require('../assets/img/icon/map-pointer-s.png'),
          }),
        },
      },
      User: {
        screen: My,
        navigationOptions: {
          tabBarLabel: 'Мой маршрут',
          tabBarIcon: TabIcon({
            image: require('../assets/img/person-non.png'),
            imageFocused: require('../assets/img/person.png'),
          }),
        },
      },
    },
    {
      initialRouteName: 'Home',
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
  initialRouteName: 'Tabs',
  headerMode: 'none',
});

export default createAppContainer(ModalNavigation);
