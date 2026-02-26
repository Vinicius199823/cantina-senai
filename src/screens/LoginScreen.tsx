import React, {useContext} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { COLORS } from '../theme/colors';

export default function LoginScreen() {
    const { login } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CANTINA SENAI</Text>
            <TouchableOpacity style={styles.button} onPress={login}>
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.primary,
        justifyContent: "center",
        alignItems:"center"
    },
    title: {
        color: "#FFF",
        fontSize: 22,
        marginBottom: 20
    },
    button: {
        backgroundColor: "#FFF",
        padding: 12,
        borderRadius: 8
    },
    buttonText: {
        color: COLORS.primary,
        fontWeight: "bold"
    }
});