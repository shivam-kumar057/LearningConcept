import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, FlatList } from "react-native";

// In the React native the easiest way to do debouncing is lodash (this is the third party library)
import { debounce } from 'lodash';
import { nameArray } from "./AppConstant";


const Debouncing = () => {
    const [data, setData] = useState('')
    const [searchText, setSearchText] = useState('')
    const [list, setList] = useState([])

    {/* In JavaScript, debounce is a powerful technique used to optimize event handling
     by delaying the execution of a function until after a specified period of inactivity. 
     It helps prevent excessive function calls triggered by rapid events, such as keystrokes 
    or scroll movements. */}

    const debouncingConcept =
        useCallback(
            debounce(textParam => {
                // In this section we are calling api call to avoid unwanted rendering
                filteredData(textParam)
            }, 500),
            [],
        )

    const filteredData = (text: string) => {
        if (text !== '') {
            // setSearchText(text)
            let filteredData:any = nameArray.filter((item) => {
                return item.name.toLowerCase().includes(text);
            })
            setList(filteredData)
            console.log("filteredData===", filteredData)
        } else (
            setList([])
        )
    }

    // here i change the text of the textInput
    const onChnageText = (text: string) => {
        setData(text)
        debouncingConcept(text)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    value={data}
                    placeholder="Enter Text"
                    style={styles.inputStyle}
                    placeholderTextColor={"black"}
                    onChangeText={onChnageText}
                />
                <View style={{ width: '90%', alignSelf: 'center', position: 'absolute', top: 70, zIndex: 1 }}>
                    {
                        list.length >0 && (
                            <View style={{ margin: 5, padding: 5, borderColor: 'lightgray', borderBottomWidth: 1 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Suggestions</Text>
                            </View>
                        )
                    }
                    <FlatList
                        data={list}
                        keyExtractor={(item: any) => item.id}
                        renderItem={({ item }: any) => {
                            return (
                                <View style={{ margin: 5, padding: 10, borderColor: 'lightgray', borderBottomWidth: 1 }}>
                                    <Text >{item.name}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle: {
       // backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        height: 50,
        borderRadius: 10,
        borderColor:'lightgray',
        borderWidth:2
    }
})
export default Debouncing