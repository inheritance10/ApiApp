import React, {Component} from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
const apiUrl = 'http://dev.besttransformer.com/sistapapi/api/silisliSacTeslimAlma/ambarlar';

export default class Details extends Component {
    constructor(props) {
        super(props);
        const data = props.route.params;
        /*this.state = {
           id: data.id,
            ambarAdi : data.AmbarAdi,
            ambarKodu: data.AmbarKodu,
            Silindi: data.Silindi
        }*/
    }

    render(props) {
        let{id,AmbarAdi,AmbarKodu, Silindi} = this.props.route.params;
        return (
            <View style={styles.container}>
                <View style={styles.container_item}>
                    <Text style={styles.container_item_text}>
                        Ambar Kodu : {AmbarKodu}
                    </Text>
                </View>

                <View style={styles.container_item}>
                    <Text style={styles.container_item_text}>
                        Ambar Adı : {AmbarAdi}
                    </Text>
                </View>
                <View style={styles.container_item}>
                    <Text style={styles.container_item_text}>
                        Silinme Durumu : {Silindi}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
   },
    container_item:{
        padding: 12,
        backgroundColor: '#007700',
        margin: 12,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        borderRadius: 8
    },
    container_item_text:{
       fontSize: 22,
        fontWeight: "bold",
        color: '#fff'
    }
});
