import React, { useEffect, useState, useRef } from "react";
import { View, Text, KeyboardAvoidingView, ActivityIndicator } from "react-native";
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
function Mapa() {
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
      setLoading(false);
      } else {
        throw new Error("Permissão de localização não garantida");
      }
    }
    userLocation();
  }, []);

  const [loading, setLoading] = useState(true);

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        {  
           loading ? (
            <View style={styles.middle}>
            <ActivityIndicator size={42} color={COLORS.GREEN} />
            </View>
           ) :
          (
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
            {stations && stations.map((item : any) => (
            <Marker
              key = {item.id}
              title={item.properties.nome}
              description={`Bikes disponíveis: ${item.properties.qtd_bikes_total}`}
              coordinate={{
                latitude: item.geometry.coordinates[1],
                longitude: item.geometry.coordinates[0]
                }}
              />
            ))}
          </MapView>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
export default Mapa;
