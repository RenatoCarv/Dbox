import * as Location from "expo-location";

export async function getLocation() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    return null;
  }

  let location = await Location.getCurrentPositionAsync({});

  let loc = await Location.reverseGeocodeAsync({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  });

  return JSON.stringify(loc[0]["city"]);
}
