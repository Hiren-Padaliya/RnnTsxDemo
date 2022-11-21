import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';

registerScreens();
export const start = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BOTTOM_TABS_LAYOUT',
          children: [
            {
              stack: {
                id: 'HOME_TAB',
                children: [
                  {
                    component: {
                      id: 'HOME_SCREEN',
                      name: 'HomeScreen'
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    icon: require('../accests/home.png'),
                    text: "Home"
                  }
                }
              }
            },
            {
              stack: {
                id: 'PROFILE_TAB',
                children: [
                  {
                    component: {
                      id: 'PROFILE_SCREEN',
                      name: 'MoreScreen'
                    }
                  }
                ],
                options: {
                  bottomTab: {
                    icon: require('../accests/menu.png'),
                    text: "More",
                    
                  }
                  
                }
              }
            }
          ]
        }
      },
    });
  });
};
