import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      Kota: '',
      forecast: {
        main: '-',
        description: '-',
        Suhu: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
  }
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=2e62f78ca2aa2fd0c2a9eef06bd7cea6&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  }
  );

}
  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.box2}>
          <Text style={{ textAlign: 'center', paddingTop: 15,fontSize: 20, }}> Masukan Nama Kota </Text>
          <TextInput
              placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}
                  style={{ height: 40, width: 150, textAlign: 'center', backgroundColor: '#FFECB3',}}
            />
            <Button
              onPress={() => this.getWeather()}
              title="Cari"
              color="#FF9800"
            />
      </View>
        <View style={styles.button}>
        <View style={styles.iconContainer}>
          <Text> Suhu : { this.state.forecast.temp} </Text>
            <Text> Cuaca : { this.state.forecast.main} </Text>
              <Text> Deskripsi : { this.state.forecast.description} </Text>
        </View>
        </View>
        </View>

    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FFD54F',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.7,
    backgroundColor: '#FFC107',
  },
  box2: {
    flex: 0.4,
    backgroundColor: '#FFC107',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 0.5,
    backgroundColor: 'red',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 0.3,
    backgroundColor: '#FFA000',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'

}
});
