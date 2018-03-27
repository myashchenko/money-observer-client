import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {login} from "../redux/actions/Auth";
import {LOGIN} from "../redux/constants/ActionTypes";

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => {
            dispatch(login(username, password));
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            route: LOGIN,
            email: '',
            password: ''
        }
    }

    login(e) {
        this.props.onLogin(this.state.email, this.state.password);
        e.preventDefault();
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.login_form} behaviour="padding">

                    <TextInput style={styles.text_input} placeholder="Email" placeholderTextColor="white"
                               underlineColorAndroid={'transparent'} keyboardType="email-address"
                               onChangeText={(text) => this.setState({email: text})}/>
                    <TextInput style={styles.text_input} placeholder="Password" placeholderTextColor="white"
                               underlineColorAndroid={'transparent'}
                               onChangeText={(text) => this.setState({password: text})}
                               secureTextEntry={true}/>

                    <TouchableOpacity style={styles.button} onPress={(e) => this.login(e)}>
                        <Text style={styles.btn_text}>Login</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft: 60,
        paddingRight: 60
    },
    login_form: {
        alignSelf: 'stretch',

    },
    text_input: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30
    },
    btn_text: {
        color: '#fff',
        fontWeight: 'bold'
    }
});