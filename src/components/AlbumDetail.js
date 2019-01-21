import React from "react";
import { View, Text } from "react-native";
import Card from "./Card";

const AlbumDetail = props => {
  return (
    <View>
      <Card>{props.album.title}</Card>
    </View>
  );
};

export default AlbumDetail;
