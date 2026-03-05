import React from "react";
import {View, Text, TouchableOpacity, Alert } from 'react-native'

export default function CheckoutScreen(){
    function finalizarPedido(): void {
        Alert.alert("Pedido realizado com sucesso!");
    }

    return (
        <View>
            <Text>Confirme seu Pedido</Text>

            <TouchableOpacity onPress={finalizarPedido}>
                <Text>Confirmar</Text>
            </TouchableOpacity>
        </View>
    )
}