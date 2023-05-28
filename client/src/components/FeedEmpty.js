import { Text, View } from "react-native";

export function FeedEmpty() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
            <Text style={{ color: '#000', fontWeight: '700' }}>
                Nenhum conteúdo encontrado
            </Text>
        </View>
    )
}