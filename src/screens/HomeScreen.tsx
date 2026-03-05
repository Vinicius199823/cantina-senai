import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { PRODUCTS, Product } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">

export default function HomeScreen(){
    const navigation = useNavigation<NavigationProps>();

    return(
        <View style={{flex:1, backgroundColor:"#f2f2f2"}}>
            <TouchableOpacity
                style={{
                    backgroundColor:"#E30613",
                    padding:15,
                    margin:10,
                    borderRadius:8,
                    alignItems:"center"
                }}
                onPress={() => navigation.navigate("Cart")}
            >
                <Text style={{color:"#fff", fontWeight:"bold"}}>
                    Ver Carrinho
                </Text>
            </TouchableOpacity>

            <FlatList
                data={PRODUCTS}
                renderItem={({item}:{item:Product}) =>(
                    <ProductCard product={item}></ProductCard>
                )}
                keyExtractor={(item) => item.id}
            >
                
            </FlatList>
        </View>
    );
}