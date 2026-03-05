import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Product } from "../data/products";
import { CartContext } from "../context/CartContext";

interface Props {
    product: Product
}

export default function ProductCard({product}:Props){
    const { addToCart } = useContext(CartContext);

    function formatPrice(value: number) {
        return `R$ ${value.toFixed(2).replace('.', ',')}`;
    }

    return(
        <View style={styles.card}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>{formatPrice(product.price)}</Text>

            <TouchableOpacity style={styles.button} onPress={() => addToCart(product)}>
                <Text style={styles.buttonText}>Add ao Carrinho</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: "#fff",
        margin: 10,
        padding: 15,
        borderRadius:10,
        elevation:3
    },
    title: {
        fontSize:18,
        fontWeight: "bold"
    },
    description: {
        color: "#555",
        marginTop:4
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8
    },
    button:{
        backgroundColor:"#E30613",
        padding:10,
        borderRadius:10,
        marginTop:10,
        alignItems: "center"
    },
    buttonText: {
        color:"#fff",
        fontWeight: "bold"
    }

})