import { Avatar, ListItem } from "@rneui/base";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import React from "react";
import { View, Text, FlatList } from "react-native";
import users from "../data/users";

export default props => {

    function dados(user) {
        console.warn(user)
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem bottomDivider key={user.id} onPress={() => props.navigation.navigate('UserForm')} >
                <Avatar source={{uri: user.avatarUrl}} />
                <ListItemContent>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
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