import { Navigation } from 'react-native-navigation';
import { Routes } from '../Navigation/ScreenName';
import { Colors } from './Colors';

export const BottomNavigation = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              id: Routes.Home,
              children: [
                {
                  component: {
                    name: Routes.Home,
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: Routes.Home,
                  icon: require('../Assets/icon-home.png'),
                  iconColor: Colors.gray,
                  selectedIconColor: Colors.themeBlue,
                  textColor: Colors.gray,
                  selectedTextColor: Colors.themeBlue,
                },
              },
            },
          },
          {
            stack: {
              id: Routes.More,
              children: [
                {
                  component: {
                    name: Routes.More,
                    options: {
                      topBar: {
                        visible: false,
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: Routes.More,
                  icon: require('../Assets/icon-menu.png'),
                  iconColor: Colors.gray,
                  selectedIconColor: Colors.themeBlue,
                  textColor: Colors.gray,
                  selectedTextColor: Colors.themeBlue,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const OpenModal = (route?: any) => {
  Navigation.showModal({
    component: {
      name: route,
      options: {
        topBar: {
          visible: false
        },
      },
    },
  });
};
