import React, { Component } from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "./styles";
import { Card } from "../../components/Card";
import LocationImage from "../../../assets/history.png";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from "../../components/Header";

const HistoryItems = ({ mapImage, tollGate, amount, expiry_date }) => (
  <Card style={styles.weeklySection}>
    <Image style={styles.image} source={mapImage} />
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
      }}
    >
      <View style={styles.weeklyIndicator} />
      <Text style={styles.subHeading}>{tollGate}</Text>
      <View />
    </View>

    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        paddingTop: 0
      }}
    >
      <View
        style={{
          flexDirection: "column"
        }}
      >
        <Text style={styles.paragraph}>Amount</Text>

        <Text style={styles.paragraph}>GHS {amount} </Text>
        <View />
      </View>
      <View
        style={{
          flexDirection: "column"
        }}
      >
        <Text style={styles.paragraph}>Date</Text>

        <Text style={styles.paragraph}>{expiry_date}</Text>
      </View>
    </View>
  </Card>
);

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      {
        mapImage: LocationImage,
        tollGate: "Toll Gate Name",
        amount: 120.0,
        expiry_date: "04/June/2019"
      }
    ];

    const { navigation } = this.props;
    const { main } = this.props.screenProps;
    return (
      <View style={styles.container}>
        <Header
          toggleDrawer={navigation.toggleDrawer}
          title={"eToll History"}
          onNotificationPress={() => main.navigate("Notifications")}
        />

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <HistoryItems
              mapImage={item.mapImage}
              expiry_date={item.expiry_date}
              amount={item.amount}
              tollGate={item.tollGate}
            />
          )}
        />
      </View>
    );
  }
}

export default History;
