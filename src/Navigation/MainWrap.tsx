
import { Routes } from './ScreenName';
import Home from '../Screens/Home';
import More from '../Screens/More';
import MyModal from '../Screens/MyModal';
import AddData from '../Screens/AddData';
import { BottomNavigation } from '../Config/NavigationComponent';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, presist } from '../Redux/Store';

const WrapComponent = (name: any, Route: any) => {
    Navigation.registerComponent(
        name,
        () => props =>
        (
            <Provider store={store}>
                <PersistGate loading={null} persistor={presist}>
                    <Route {...props} />
                </PersistGate>
            </Provider>
        ),
        () => Route,
    );
};

export default function MainWrapComponent(): any {
    WrapComponent(Routes.Home, Home);
    WrapComponent(Routes.More, More);
    WrapComponent(Routes.Modal, MyModal)
    WrapComponent(Routes.Add, AddData)
    BottomNavigation()
}




