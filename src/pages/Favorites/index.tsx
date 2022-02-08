import React, { useEffect, useState, useRef } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker, MarkerAnimated } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from '@expo/vector-icons';
import MapViewDirections from "react-native-maps-directions";
import styles from "./styles";
import config from "../../config/index.json";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../theme";
import { apiStation } from "../../services/api";
function Favorites() {
  const [location, setLocation] = useState(null);
  const mapEl = useRef<any>({});
  const [origin, setOrigin] = useState<any>({});
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [region, setRegion] = useState<any>(null);
  const [stations, setStations] = useState<any|null>({});

  const { navigate } = useNavigation();
  function handleToReport() {
    navigate("Report");
  }

  useEffect(() => {
    async function userLocation() {

      const { data } = await apiStation.get('/estacoes');
      setStations(data);

      const { status } = await Location.requestPermissionsAsync();
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } else {
        throw new Error("Permissão de localização não garantida");
      }
    }
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
              <RectButton style={styles.reportButton} onPress={handleToReport}>
                 <Ionicons name="warning" size={24} color={COLORS.WHITE}/>
              </RectButton>
            </View>
        <View style={styles.search}>
          <View style={styles.distance}>
            {distance && (
              <>
                <Text>Estação: {stations.properties.nome}</Text>
                <Text>Endereço: {stations.properties.endereco}</Text>
                <Text>
                  Bikes disponíveis: {stations.properties.qtd_bikes_total}
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
          </MapView>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
export default Favorites;
