import {
    StyleSheet,
    KeyboardAvoidingView,
    View,
    Text,
    TextInput,
    TouchableOpacity,

} from 'react-native';

export function Login({ navigation }) {

    return (
        <KeyboardAvoidingView style={styles.container}>

            <View style={
                styles.form
            }>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    autoCompleteType="email"
                    autoCorrect={false}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    textContentType="password"
                    autoCapitalize="none"
                    autoCompleteType="password"
                    autoCorrect={false}
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    onPress={() => navigation.navigate('home')}

                    style={styles.buttonSubmit}>
                    <Text style={styles.submitText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('register')}

                    style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Criar conta gratuita</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#191919'
    },

    form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 25
    },

    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 22,
        borderRadius: 7,
        padding: 10
    },

    buttonSubmit: {
        backgroundColor: "#64a252",
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },

    submitText: {
        color: '#FFF',
        fontSize: 19
    },

    buttonRegister: {
        marginTop: 10
    },

    registerText: {
        color: '#FFF'
    }
});