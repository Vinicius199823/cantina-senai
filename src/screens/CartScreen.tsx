import React, {useContext} from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { CartContext } from "../context/CartContext";

export default function CartScreen() {
    const { cartItem, removeFromCart, getTotal } = useContext(CartContext);

    return (
        <View>
            <FlatList 
                data={cartItem}
                renderItem={({item, index}) => (
                    <View>
                        <Text>{item.name}</Text>
                        <TouchableOpacity onPress={() => removeFromCart(index)}>
                            <Text>Remover</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(_, index) => index.toString()}
            >
            </FlatList>

            <Text>Total: R${getTotal().toFixed(2)}</Text>
        </View>
    )
}