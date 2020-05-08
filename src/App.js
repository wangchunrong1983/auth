
import React , {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state= {loggedIn: null}

  componentWillMount() {
    firebase.initializeApp({
            apiKey: 'AIzaSyCV4VEdZPoLgogVLcwLSZm8Ay6EFed5HJM',
            authDomain: 'auth-b9c67.firebaseapp.com',
            databaseURL: 'https://auth-b9c67.firebaseio.com',
            projectId: 'auth-b9c67',
            storageBucket: 'auth-b9c67.appspot.com',
            messagingSenderId: '84355768564',
            appId: '1:84355768564:web:3faff7d0650b8882743ea1',
            measurementId: 'G-XYVEVNM7MJ'
    });
    firebase.auth().onAuthStateChanged((user)=>{
      if(user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    });
  }

    renderContent() {
      switch(this.state.loggedIn){
        case true:
          return (
          <Button onPress={()=> {
              firebase.auth().signOut()}}>
            Log Out
          </Button>
          )
        case false:
                return <LoginForm />
        default:
          return <Spinner size="large" />
      }
    }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;