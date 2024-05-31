import React from "react";
import { Button, Image, Text, View } from "react-native";
import GlobalStyles from "../GlobalStyles";

export default class Contract extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Contract Component',
        }
    }
    render() {
        return (
            <View style={GlobalStyles.container}>
                <Text style={GlobalStyles.textStyle}>Hello from {this.state.title}</Text>
                <Text style={GlobalStyles.textStyle}>Contact type: {this.props.type}</Text>
                <Image source={require('../images/logo.jpg')} style={GlobalStyles.imageStyle}></Image>
                <Button style={{}} onPress={() => this.onGotoSearch()} title="Search"></Button>
            </View>
        );
    }

    onGotoSearch() {
        this.props.navigation.navigate('Search');
    }
}