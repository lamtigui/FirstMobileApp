import React from "react";
import { Button, Text, View } from "react-native";
import GlobalStyles from "../GlobalStyles";

export default class Search extends React.Component { 
    render() {
        return (
            <View style={GlobalStyles.container}>
                <Text style={GlobalStyles.textStyle}>Search Page</Text>
                <Button style={{}} onPress={() => this.onGoBack()} title="Back"></Button>
            </View>
        );
    }

    onGoBack() {
        this.props.navigation.goBack();
    }
}