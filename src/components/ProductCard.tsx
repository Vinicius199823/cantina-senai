import React, {useContext} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Product } from "../data/products";
import { CartContext} from '../context/CartContext';


interface Props {
    product: Product
}

export default function ProductCard({product}:Props){
    const { addToCart } = useContext(CartContext);

    function formatPrice(value: number){
        return `R$ ${value.toFixed(2).replace(".",",")}`
    }

    return (
        <View style={{padding: 2}}>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{formatPrice(product.price)}</Text>

            <TouchableOpacity onPress={() => {
                addToCart(product)
            }}>
                <Text>Add ao Carrinho</Text>
            </TouchableOpacity>
        </View>
    )
}