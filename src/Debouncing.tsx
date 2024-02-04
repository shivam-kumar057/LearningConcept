import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput } from "react-native";

// In the React native the easiest way to do debouncing is lodash (this is the third party library)
import { debounce } from 'lodash';


const Debouncing = () => {
    const [data, setData] = useState('')

    {/* In JavaScript, debounce is a powerful technique used to optimize event handling
     by delaying the execution of a function until after a specified period of inactivity. 
     It helps prevent excessive function calls triggered by rapid events, such as keystrokes 
    or scroll movements. */}
    
    const debouncingConcept =
        useCallback(
            debounce(textParam => {
                // In this section we are calling api call to avoid unwanted rendering
                console.log("text===", textParam)
            }, 500),
            [],
        )

    // here i change the text of the textInput
    const onChnageText = (text: string) => {
        setData(text)
        debouncingConcept(text)
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                value={data}
                placeholder="Enter Text"
                style={styles.inputStyle}
                placeholderTextColor={"black"}
                onChangeText={onChnageText}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        height: 50,
        borderRadius: 10
    }
})
export default Debouncing