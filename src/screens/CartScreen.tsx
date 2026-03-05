import React, {useContext} from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { CartContext } from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {

    const { cartItem, removeFromCart, getTotal } = useContext(CartContext);
    const navigation = useNavigation();

    return (
        <View style={{flex:1, padding:20}}>

            <TouchableOpacity
                style={{
                    backgroundColor:"#E30613",
                    padding:10,
                    borderRadius:8,
                    marginBottom:20,
                    alignItems:"center"
                }}
                onPress={() => navigation.goBack()}
            >
                <Text style={{color:"#fff"}}>Voltar</Text>
            </TouchableOpacity>

            <FlatList 
                data={cartItem}
                renderItem={({item, index}) => (
                    <View style={{marginBottom:10}}>
                        <Text>{item.name}</Text>

                        <TouchableOpacity onPress={() => removeFromCart(index)}>
                            <Text>Remover</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(_, index) => index.toString()}
            />

            <Text style={{marginTop:20, fontWeight:"bold"}}>
                Total: R${getTotal().toFixed(2)}
            </Text>

        </View>
    )
}