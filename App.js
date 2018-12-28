import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
  Platform,
  WebView,
  StatusBar
} from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    fetch('https://uinames.com/api/?ext&amount=50')
      .then((response) => {
        return response.json();
      }).then((json) => {
        // console.log(typeof json);
        this.setState({
          data: json,
          isLoading: false
        });
      }).catch(error => console.log(error));
  }

  renderNames() {
    const items = [];
    for (let i = 0; i < this.state.data.length; i++) {
      items.push(<Text key={i}>{this.state.data[i].email}</Text>);
    }
    return items;
  }

  render() {
    // Alert.alert('Webview sample', 'react-native');
    console.log(this.state.isLoading);
    return (
      <View>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <View>
          {
            !this.state.isLoading && this.renderNames()
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
