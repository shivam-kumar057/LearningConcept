import React from "react";
import { StyleSheet,View,Text, SafeAreaView } from "react-native";
import Debouncing from "./src/Debouncing";

const App = () => {
    return (
        <SafeAreaView style={{flex:1}}>
             <Debouncing/>
        </SafeAreaView>
    )
}

export default App