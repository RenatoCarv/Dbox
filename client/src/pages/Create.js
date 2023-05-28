import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import { api } from "../lib/api";

export function Create({ navigation }) {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [profileImageUrl, setProfileImageUrl] = useState("");

    async function createPublication() {
        if (!name.trim() || !imageUrl.trim() || !profileImageUrl.trim()) {
            return Alert.alert("Preencha todos os campos!");
        }

        try {
            await api.post('/', {
                name: name.trim(),
                location: location.trim(),
                image_url: imageUrl.trim(),
                profile_url: profileImageUrl.trim(),
            })

            navigation.navigate('home')
        } catch (error) {
            Alert.alert('Não foi possível criar a publicação');

            console.log(error);
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.Titulo}>
                Nova publicação
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do perfil"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.input}
                placeholder="Local"
                value={location}
                onChangeText={setLocation}
            />

            <TextInput
                style={styles.input}
                placeholder="Imagem da publicação"
                value={imageUrl}
                onChangeText={setImageUrl}
            />

            <TextInput
                style={styles.input}
                placeholder="Imagem do perfil"
                value={profileImageUrl}
                onChangeText={setProfileImageUrl}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={createPublication}>

                <Text style={styles.botaoText}>
                    Publicar
                </Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },

    Titulo: {
        fontSize: 40,
        fontWeight: '700',
        color: "#64a252",
        textAlign: 'center'
    },

    TextInput: {
        borderWidth: 3,
        borderColor: "#A9A9A9",
        padding: 10,
        marginTop: 18,
        width: 200,
        height: 150,
        borderRadius: 7,
        fontSize: 16,
        flexDirection: "row",
    },

    botao: {
        width: 350,
        height: 50,
        backgroundColor: "#64a252",
        marginTop: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    botaoText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },


    input: {
        borderWidth: 3,
        borderColor: "#A9A9A9",
        padding: 10,
        marginTop: 18,
        width: 350,
        height: 50,
        borderRadius: 7,
        fontSize: 16,
        flexDirection: "row",
    },

});