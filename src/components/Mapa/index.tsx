import React, { useEffect, useState, useRef } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker, MarkerAnimated } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import MapViewDirections from "react-native-maps-directions";
import styles from "./styles";
import config from "../../config/index.json";
import { RectButton } from "react-native-gesture-handler";
function Mapa(props) {
  const [location, setLocation] = useState(null);
  const mapEl = useRef<any>({});
  const [origin, setOrigin] = useState<any>({});
  const [destination, setDestination] = useState<any>({
    latitude: props.stations.geometry.coordinates[0],
    longitude: props.stations.geometry.coordinates[1],
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  });
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [region, setRegion] = useState<any>(null);

  useEffect(() => {
    async function userLocation() {
      const { status } = await Location.requestPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          //latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
        });
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setDestination({
          latitude: props.stations.geometry.coordinates[1],
          longitude: props.stations.geometry.coordinates[0],
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        });
      } else {
        throw new Error("Permissão de localização não garantida");
      }
    }
    //console.log(origin);
    userLocation();
  }, []);

  console.log(origin);

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
      <View
              style={{
                position: "absolute", //use absolute position to show button on top of the map
                top: "50%", //for center align
                zIndex: 999,
                alignSelf: "flex-end", //for align to right
              }}
            >
              <RectButton>
                <Text>Solicitar</Text>
              </RectButton>
            </View>
        <View style={styles.search}>
          <View style={styles.distance}>
            {distance && (
              <>
                <Text>Estação: {props.stations.properties.nome}</Text>
                <Text>Endereço: {props.stations.properties.endereco}</Text>
                <Text>
                  Bikes disponíveis: {props.stations.properties.qtd_bikes_total}
                </Text>
                <Text>Distância: {distance} m</Text>
                <Text>Tempo aproximado : {duration} min</Text>
              </>
            )}
          </View>
        </View>
        {region && (
          <MapView
            style={styles.map}
            initialRegion={region}
            showsUserLocation={true}
            loadingEnabled={true}
            ref={mapEl}
          >
            
            <Marker
              title="Minha localização"
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude,
              }}
            />

            {destination && (
              <>
                <MapViewDirections
                  origin={origin}
                  destination={destination}
                  apikey={config.googleApi}
                  strokeWidth={4}
                  mode="BICYCLING"
                  strokeColor="green"
                  onReady={(result: any) => {
                    setDistance(result.distance.toFixed(3));
                    setDuration(result.duration.toFixed(2));
                    mapEl.current.fitToCoordinates(result.coordinates, {
                      edgePadding: {
                        top: 50,
                        bottom: 50,
                        left: 50,
                        right: 50,
                      },
                    });
                  }}
                />
                <Marker
                  title={props.stations.properties.nome}
                  coordinate={{
                    latitude: destination.latitude,
                    longitude: destination.longitude,
                  }}
                />
              </>
            )}
          </MapView>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
export default Mapa;

{
  /* {destination &&
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
            } */
}
