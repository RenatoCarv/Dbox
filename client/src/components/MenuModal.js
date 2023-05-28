import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function MenuModal({ isEnabled, setEnabled }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isEnabled}
            onRequestClose={() => { setEnabled(false) }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>
                        A D-Box, caixa de doação, tem como objetivo facilitar a doação de alimentos entre um restaurante ou estabelecimento de alimentos para uma ong. Os Restaurantes que trabalham com preparo de comida em grandes quantidades que geralmente sobram e tem a intenção de fazer doações para ajudar pessoas em situação de fome. As ONGs teriam mais facilidade em receber doações de alimentos, verificando pelo aplicativo quais restaurantes, também a quantidade de marmitas e descrições da doação, estão disponíveis e a localização.
                    </Text>
                    <TouchableOpacity
                        onPress={() => { setEnabled(false) }}
                        style={[styles.botao, { width: '100%' }]}>

                        <Text style={styles.textBotao}>
                            Fechar
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    botao: {

        backgroundColor: "#64a252",
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
});