import React from "react";
import { View, FlatList } from "react-native";
import { PRODUCTS, Product } from "../data/products";
import ProductCard from '../components/ProductCard'

export default function HomeScreen(){
    return (
        <View style={{flex: 1}}>
            <FlatList 
                data={PRODUCTS}
                renderItem={({item} : {item: Product}) => (
                    <ProductCard product={item}></ProductCard>
                )}
                keyExtractor={(item) => item.id}

            >

            </FlatList>

        </View>
    )
}