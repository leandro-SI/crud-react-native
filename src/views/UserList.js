import { Avatar, Button, Icon, ListItem } from "@rneui/base";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import React from "react";
import { View, Text, FlatList, Alert } from "react-native";
import users from "../data/users";

export default props => {

    function confirmuserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('delete ' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"                
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button 
                    onPress={() => confirmuserDeletion(user)}
                    type="clear"                
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem  bottomDivider key={user.id} onPress={() => props.navigation.navigate('UserForm', user)} >
                <Avatar source={{uri: user.avatarUrl}}  />
                <ListItemContent>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>                    
                </ListItemContent>
                <ListItemContent
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        flexGrow: 0.3
                    }}
                
                >
                    {getActions(user)}
                </ListItemContent>
                
            </ListItem>
        )
    }

    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()} 
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}