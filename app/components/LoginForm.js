import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {connect} from "react-redux";
import {login, register} from "../redux/actions/Auth";
import {LOGIN} from "../redux/constants/ActionTypes";

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
            <KeyboardAvoidingView style={styles.login_form} behaviour="padding">

                <Text style={styles.header}>Login</Text>

                <TextInput style={styles.text_input} placeholder="Email" placeholderTextColor="white"
                           underlineColorAndroid={'transparent'} keyboardType="email-address" onChangeText={(text) => this.setState({ email : text })}/>
                <TextInput style={styles.text_input} placeholder="Password" placeholderTextColor="white"
                           underlineColorAndroid={'transparent'} onChangeText={(text) => this.setState({ password : text })}
                           secureTextEntry={true}/>

                <TouchableOpacity style={styles.button} onPress={(e) => this.login(e)}>
                    <Text style={styles.btn_text}>Login</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    login_form: {
        alignSelf: 'stretch',

    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1
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

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(login(username, password)); }
    }
};

connect(mapStateToProps, mapDispatchToProps)(LoginForm);