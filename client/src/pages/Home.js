import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { getLocation } from "../components/Location";
import { Feed } from "../components/Feed";
import { MenuModal } from "../components/MenuModal";

export function Home({ navigation }) {
  const [city, setCity] = useState("Carregando...");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    (async () => {
      let city = await getLocation();

      if (!city || city == null || city == 'null') setCity('Localização recusada')
      else setCity(city);
    })();
  }, []);

  return (
    <>
      <MenuModal isEnabled={isModalOpen} setEnabled={setIsModalOpen} />

      <View style={styles.containerPrincipal}>

        <View style={styles.container}>
          <View style={styles.BuscaA}>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Entypo name="location-pin" size={26} color="#808080" />

              <TextInput
                style={styles.TextoBusca}
                placeholder={city.replace(/\"/g, "")}
              />
            </View>
            <AntDesign name="caretright" size={20} color="#808080" />
          </View>

          <AntDesign name="search1" size={34} color="#808080" />
        </View>

        <View style={styles.Banner}>
          <Image
            style={styles.donationBox}
            source={require("../../assets/donationBox.png")}
          />

          <Text style={styles.Titulo}> D-BOX </Text>
          <Text style={styles.Subtitulo}> Cadastre-se ou Faça Login </Text>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.login}
              onPress={() => navigation.navigate('register')}

            >
              <Text style={styles.loginText}> Cadastre-se </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.login}
              onPress={() => navigation.navigate('login')}

            >
              <Text style={styles.loginText}> Login </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerIcones}>

          <View style={styles.icones}>
            <Image
              style={styles.iconeApp}
              source={require("../../assets/ImagemApp.png")}
            />
          </View>

          <View style={styles.icones}>
            <Image
              style={styles.iconeComida}
              source={require("../../assets/ImagemComida.png")}
            />
          </View>

          <View style={styles.icones}>
            <Image
              style={styles.iconeEntrega}
              source={require("../../assets/ImagemEntrega.png")}
            />
          </View>

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={openModal}
            style={[styles.botao, { width: '48%' }]}>

            <Text style={styles.textBotao}>
              Sobre o App
            </Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('create')}
            style={[styles.botao, { width: '48%' }]}>

            <Text style={styles.textBotao}>
              Criar publicação
            </Text>

          </TouchableOpacity>
        </View>

        <View style={styles.feedDescriçao}>

          <Text style={styles.feedText}> Veja nosso Feed </Text>

        </View>

        <Feed />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 25,
  },

  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 6,
  },

  BuscaA: {
    borderWidth: 3,
    borderColor: "#dcdcdc",
    backgroundColor: "#dcdcdc",
    padding: 5,
    width: 340,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  BuscaB: {
    flex: 1,
    padding: 15,

    width: 55,
    alignItems: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  TextoBusca: {
    fontSize: 16,
  },

  Banner: {
    backgroundColor: "#64a252",
    width: "100%",
    height: 150,
    borderRadius: 20,
    marginTop: 25,
    position: "relative",
  },

  donationBox: {
    width: 150,
    height: 150,
    position: "absolute",
    right: 0,
    bottom: 0,
  },

  Titulo: {
    fontSize: 30,
    color: "#fff",
    marginTop: 13,
    marginStart: 10,
    fontWeight: 700,
    textShadowColor: "rgba(255,255,255,0.5)",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
    fontWeight: "800",
  },

  Subtitulo: {
    color: "#fff",
    fontSize: 16,
    marginTop: 15,
    marginStart: 13,
  },

  login: {
    backgroundColor: "#508242",
    width: 100,
    padding: 8,
    marginTop: 10,
    marginStart: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  loginText: {
    color: "#fff",
    textAlign: "center",
  },

  containerIcones: {
    marginTop: 25,
    flexDirection: "row",
    rowGap: 12,
    justifyContent: "space-between",
  },

  iconeApp: {
    width: 58,
    height: 75,
  },

  icones: {
    width: 100,
    height: 100,
    backgroundColor: "#adc4a3",
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconeComida: {
    width: 80,
    height: 75,
  },



  iconeEntrega: {
    width: 85,
    height: 85,
  },

  botaoInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  Teste: {
    backgroundColor: "blue",
    width: 50,
    height: 50,
  },

  botao: {

    backgroundColor: "#adc4a3",
    width: 125,
    padding: 8,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",

  },

  textBotao: {

    color: '#FFF',

  },

  feedDescriçao: {
    fontSize: 20,
    marginTop: 25,
    backgroundColor: "#64a252",
    width: "100%",
    height: 65,
    borderRadius: 16,
    alignItems: 'center',

  },

  feedText: {
    fontSize: 25,
    color: "#fff",
    marginTop: 13,
    marginStart: 10,
    fontWeight: 700,
    textShadowColor: "rgba(255,255,255,0.5)",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
    fontWeight: "800",

  },

});
