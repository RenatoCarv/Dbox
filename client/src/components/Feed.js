import { FeedEmpty } from "./FeedEmpty";
import { EvilIcons } from '@expo/vector-icons';
import { useCallback, useState } from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { api } from "../lib/api";

export function Feed() {
  const [contents, setContents] = useState([]);

  // Toda vez que o usuário entrar na tela, ele vai carregar os conteúdos por causa do useFocusEffect
  // useCallback é para não chamar várias vezes a função
  useFocusEffect(useCallback(() => {
    getContents();
  }, []));

  function formatDistanceToNow(date) {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} ano${years > 1 ? "s" : ""}`;
    } else if (months > 0) {
      return `${months} ${months > 1 ? "meses" : "mês"}`;
    } else if (weeks > 0) {
      return `${weeks} ${weeks > 1 ? "semanas" : "semana"}`;
    } else if (days > 0) {
      return `${days} dia${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      return `${hours} hora${hours > 1 ? "s" : ""}`;
    } else if (minutes > 0) {
      return `${minutes} minuto${minutes > 1 ? "s" : ""}`;
    } else {
      return `${seconds} segundo${seconds > 1 ? "s" : ""}`;
    }
  }

  async function getContents() {
    try {
      const { data } = await api.get('/')
      setContents(data);
    } catch (error) {
      console.log('Não foi possível carregar os conteúdos');
    }
  }

  async function deleteContent(id) {
    const newContents = contents.filter(item => item.id !== id)

    setContents(newContents)

    try {
      await axios.delete(`http://192.168.18.7:3001/${id}`)
    } catch (error) {
      console.log('Não foi possível deletar o conteúdo');
    }
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={contents}
      renderItem={(item) => (
        <View style={{ marginTop: 16, flex: 1 }}>

          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flexDirection: "row", rowGap: 10, alignItems: "center" }}>
              <Image
                style={styles.fotoPerfil}
                source={{ uri: item.item.profile_url }}
              />

              <View style={{ paddingLeft: 6 }}>
                <Text style={styles.name}>{item.item.name}</Text>

                <View style={styles.subtitulo}>
                  <Text style={styles.location}>{item.item.location}</Text>
                  <Text>•</Text>
                  <Text style={styles.data}>
                    {formatDistanceToNow(new Date(item.item.date))} atrás
                  </Text>
                </View>

              </View>
            </View>

            <EvilIcons name="trash" size={32} color="#F54242" onPress={() => deleteContent(item.item.id)} />
          </View>

          <Image
            style={styles.publicacao}
            source={{ uri: item.item.image_url }}
          />
        </View>
      )}
      ListEmptyComponent={() => <FeedEmpty />}
    />
  );
}

const styles = StyleSheet.create({
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 999,
  },

  subtitulo: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
  },

  name: {
    fontSize: 20,
  },

  publicacao: {
    width: 400,
    height: 350,
    marginTop: 10,
    borderRadius: 8,
  },
});
