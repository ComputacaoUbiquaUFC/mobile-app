import React, {useEffect, useState, useRef} from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
import config from '../../config/index.json';

function Mapa(){

    const [location, setLocation] = useState(null);
    const mapEl = useRef<any>({});
    const [origin, setOrigin] = useState<any>({});
    const [destination, setDestination] = useState<any>({});
    const [distance, setDistance] = useState(null);

    useEffect(() => {
      async function userLocation(){
        const { status } = await Location.requestPermissionsAsync();
        if (status === 'granted') {
          let location = await Location.getCurrentPositionAsync({ });
          setOrigin({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })
        }else {
          throw new Error('Permissão de localização não garantida');
        }
      }
      //console.log(origin);
      userLocation();
    }, []);

    console.log(origin);

      return (
        <View style={styles.container}>
          
          <MapView style={styles.map}
            initialRegion={origin}
            showsUserLocation={true}
            loadingEnabled={true}
            ref={mapEl}
          >
            {destination &&
              <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={config.googleApi}
                strokeWidth={3}
                onReady={result=>{
                  setDistance(result.distance);
                  mapEl.current.fitToCoordinates(
                    result.coordinates,{
                      edgePadding:{
                        top:50,
                        bottom: 50,
                        left:50,
                        right:50
                      }
                    }
                  )
                }}
              />
            }
          </MapView>

          <View style={styles.search}>
            <GooglePlacesAutocomplete
              placeholder='Para onde vamos?'
              onPress={(data, details = null) => {
                setDestination({
                  latitude: details?.geometry.location.lat,
                  longitude: details?.geometry.location.lng,
                  latitudeDelta: 0.00922,
                  longitudeDelta: 0.00421,
                })
              }}
              query={{
                key: config.googleApi,
                language: 'pt-br',
              }}
              fetchDetails={true}
            />
            {/*
            <View>
              
              {distance &&
                <Text>Distância: {distance}m</Text>
              }
            </View>
            */}
          </View>
          
        </View>
      );

} export default Mapa;
