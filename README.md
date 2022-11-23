
# React-Native + Redux + Redux-Persist + RNN with TypeScript 

### Key Benefits of TypeScript?
> - Strict typing : Everything stays the way we define it
> - Structural typing : Indispensable when you care about fully defining the actual structure you use
> - A handy way of saying explicitly what type should be used
> - Type inference :  Implicit typing performed by TypeScript itself, so that your developers don’t need to provide types where the compiler can find them on its own

### Purpose of the repo 
> 1. Bottom tab navigation : HOME, MORE
> 2. Home Screen : White screen
> 3. More Screen : There is "Open Model" button to show model where fetch user data from gorest.co.in api and show data in flatList with Card
> 4. Use Wix navigation: https://github.com/wix/react-native-navigation
> 5. Use Modal : https://wix.github.io/react-native-navigation/docs/modal/
> 6. There is a button "Add" button,on click of it should go to a subview within the same modal where we can add some text and press DONE.
> 7. When we add the text and press done, we should automatically go back to the modal and the text that we added should be in a card on top of the list.
> 6. If we close the app and relaunch it, we should see the same list in the modal (with redux persist). (No need to fetch again, only first time)

### Folder Structure

```package.json
- /project_root
# This is the root directory of the project
    - .env
    # setup environment variables for the app
    - index.js
    # entry point of the app to be registered as registerAppLauncherListner with RNN
    - app.tsx
    # return MainWrap() where all the screens where registered

    - /src  
    # This is the root of all sub-directories of tsx file
        - /Assets
            /images
            # put images here such as .png,jpg,jpeg
            /icons
            # put icons here such as .svg,.png
            /vectors
            # put vectors here such as .svg only
            /fonts
            # put fonts here which will be used in app
            /json
            # put json file to use in app
        
        - /Config
        # configure list of icons, navigation routes,colors etc...

        -/Navigation    
            -/ScreenNames.tsx
            # naming routes of the screens
            -/MainWrap.tsx
            # wrapping of routes with screen, registerComponent with individual Screen
            with Redux's Persist Gate and Redux's Provider with Store
        -/Components
            -/AppInputs.tsx
            # text input Component
            -/Button.tsx
            # primary button Component
            -/Container.tsx
            # primary view Component
            -/Loader.tsx
            # progress loader Component
            -/props.tsx
            # common props for all Components
            -/Toobar.tsx
            # statusbar Component

        -/Screens
            -/Home
                -/index.tsx
                # tab 1 screen
            -/More
                -/index.tsx
                # tab 2 screen, button to open modal
            -/MyModal
                -/index.tsx
                # modal component - parent component
                -/ModalList.tsx
                # flatList component - child component, fetch data and set into flatList
            -/AddData
                -/index.tsx
                # AppInputs to take input from user and dispatch action to add into Store

        -/Redux
            -/ActionType.tsx
            # constant naming of action's ScreenNames
            -/Actions.tsx
            # implement actions such as LOADER and FETCH_DATA
            # LOADER: show loading on the screen
            # FETCH_DATA: call REST api through axios to get the data and dispatch to reducer
            -/Reducer
                -/index.js
                # combine all the Reducers into open
                -/Reducers.tsx
                # inital state and handle states
            -/Store.tsx
            # createStore, persist Store


## Tech Stack

**Client:** React-native, typescript, Redux, Redux-Persist, wix/react-native/navigation

**Server:** REST API gorest.co.in


## API Reference

#### Get all Users
Get users name to show in flatlist

```http
  GET https://gorest.co.in/public/v2/users
```


## Appendix

Wix navigation: https://github.com/wix/react-native-navigation
Modal: https://wix.github.io/react-native-navigation/docs/modal/
Redux store: https://redux.js.org/api/store
Redux persist: https://github.com/rt2zz/redux-persist

https://www.npmjs.com/package/react-native-navigation-hooks
npmjs.com/package/@react-native-community/async-storage
https://www.npmjs.com/package/redux-thunk

## Output



## Demo

Scan QR Code to Install app
 


## Installation

Run Android app with NPM

```bash
  npm install
  npm run android
```

Run iOS with NPM

```bash
  cd ios
  pod install
  npm run ios
```
    
## Support
Dark Mode Support Comming Soon...🙂


