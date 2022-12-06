import {StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import React, {Component} from "react";
const apiUrl = 'http://dev.besttransformer.com/sistapapi/api/silisliSacTeslimAlma/ambarlar';

export default class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            data: []
        }
    }

    componentDidMount() {
        try {
            fetch(apiUrl)
                .then((response) => response.json())
                .then((jsonResponse) => {
                    this.setState({
                        loading:false,
                        data: jsonResponse
                    })
                })
        }catch (error){
            alert(error)
        }
    }

    getDetail = (id, AmbarAdi, AmbarKodu , Silindi) => {
        this.props.navigation.navigate('Detail Page', {
            id: id,
            AmbarAdi: AmbarAdi,
            AmbarKodu: AmbarKodu,
            Silindi : Silindi
        })
    }

    _getDataList = ({item, index}) => {
        return(
            <TouchableOpacity onPress={() => this.getDetail(item.AmbarID,item.AmbarAdi,item.AmbarKodu, item.Silindi)}>
                <View style={styles.list}>
                    <View style={styles.list_title_container}>
                        <Text style={styles.list_title}>
                            Ambar Kodu
                        </Text>
                        <Text style={styles.list_title}>
                            Ambar Adı
                        </Text>
                    </View>
                    <View style={styles.list_item_container}>
                        <Text style={styles.list_item}>
                            {item.AmbarKodu}
                        </Text>
                        <Text style={styles.list_item}>
                            {item.AmbarAdi}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        let {data , loading} = this.state;
        if(loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" animating/>
                </View>
            );
        }else {
            return(
                <View style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={this._getDataList}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            );
        }
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35
    },
    container_title:{
        fontWeight: "bold",
        fontSize: 22,
        backgroundColor: '#009999',
        color: '#fff',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8
    },
    list:{
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#d4d4d4',
        borderRadius: 8,
        margin: 12
    },
    list_item_container:{
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    list_item: {
        margin: 10,
        color: '#456688',
        padding: 8
    },
    list_title_container:{
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    list_title:{
        fontSize: 18,
        fontWeight: "bold",
    }
});