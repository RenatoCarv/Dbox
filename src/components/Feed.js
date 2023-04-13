import { FlatList, View, Text, Image, StyleSheet } from "react-native";

const contents = [
  {
    perfil:
      "https://instagram.frec43-1.fna.fbcdn.net/v/t51.2885-19/332549138_3491939301071353_2489612567426788014_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.frec43-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=iohiVVc0WJMAX8uGzPJ&edm=ANmP7GQBAAAA&ccb=7-5&oh=00_AfCkNO-88NDcIszTjLDydeP_u3U-QroO-g2Jq8RxdF611A&oe=643750D5&_nc_sid=276363.jpg",
    name: "Slay Burguer",
    location: "Olinda-PE",

    data: new Date("2023-04-08T03:07:00"),
    image:
      "https://noticiasconcursos.com.br/wp-content/uploads/2021/09/noticiasconcursos.com.br-sao-paulo-decide-acabar-com-projeto-de-distribuicao-de-marmitas-para-vulneraveis-406.jpg",
  },
  {
    perfil:
      "https://blog.cancaonova.com/felipeaquino/files/2015/03/caridadee.jpg",
    name: "Instituto vida",
    location: "Recife-PE",

    data: new Date("2023-04-08"),
    image:
      "https://marmitexdesucesso.com/wp-content/uploads/2019/08/como-est%C3%A1-o-mercado-de-marmitas-1200x675.jpg",
  },
  {
    perfil:
      "https://media-cdn.tripadvisor.com/media/photo-s/19/bf/f6/27/brooklyn-bar.jpg",
    name: "Restaurante do Brooklyn",
    location: "Olinda-PE",

    data: new Date("2023-03-25"),
    image:
      "https://conteudo.imguol.com.br/c/tab/52/2021/05/06/para-nao-fechar-as-portas-restaurante-paulistano-cria-campanha-de-doacao-de-marmitas-para-moradores-de-rua-na-regiao-central-1620304971494_v2_3x4.jpg",
  },
  {
    perfil:
      "https://i.pinimg.com/564x/1c/7b/82/1c7b822f4c31931a28933e4435cdd2de.jpg",
    name: "Fundação porta aberta",
    location: "Graças Derby",

    data: new Date("2023-02-22"),
    image:
      "https://i.pinimg.com/564x/ed/80/28/ed80289e9799a918d3c1bb3fc408a314.jpg",
  },
  {
    perfil:
      "https://i.pinimg.com/564x/e4/64/81/e46481f0aec6a0bcc5b8d40b914be142.jpg",
    name: "Almoço de mainha",
    location: "Jaboatão dos Guararapes",

    data: new Date("2023-01-07"),
    image:
      "https://midias.jornalcruzeiro.com.br/wp-content/uploads/2021/02/marmita.jpg",
  },
];

export function Feed() {
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
  return (
    <FlatList
      keyExtractor={(item) => item.perfil}
      data={contents}
      
      
      renderItem={(item) => (
        <View style={{marginTop: 16, flex: 1}}> 
            
          <View style={{ flexDirection: "row", gap: 6 }}>
            <Image
              style={styles.fotoPerfil}
              source={{ uri: item.item.perfil }}
            />

            <View>
              <Text style={styles.name}>{item.item.name}</Text>
              <View style={styles.subtitulo}>
                <Text style={styles.location}>{item.item.location}</Text>
                <Text>•</Text>
                <Text style={styles.data}>
                  {formatDistanceToNow(item.item.data)} atrás
                </Text>
              </View>
            </View>
          </View>

          <Image style={styles.publicacao} source={{ uri: item.item.image }} />
        </View>
      )}
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
  },
});
