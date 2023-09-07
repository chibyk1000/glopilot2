import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgUri } from "react-native-svg";
import { colors, homestyle, hourlystyle } from "../../styles/style";
import {
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import Button from "../components/Button";
import Img from "../../assets/car-pana.svg";

const Hourly = ({ navigation }) => {
  const handNavigate = (name) => navigation.navigate(name);

  return (
    <SafeAreaView style={homestyle.container} edges={["right", "top", "left"]}>
      <View style={hourlystyle.hero}>
        <View style={homestyle.recommendation}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Entypo name="chevron-small-left" size={30} color="black" />
            <Text style={{ fontSize: 17 }}>Rent By Hours</Text>
          </TouchableOpacity>

          <TouchableOpacity style={homestyle.recommendationButton}>
            <MaterialCommunityIcons
              name="calendar-outline"
              size={24}
              color={colors.black}
            />
            <Text style={{ fontSize: 16 }}>Upcoming Trips</Text>
          </TouchableOpacity>
        </View>

        <Img />
      </View>

      <View style={hourlystyle.section}>
        <Text style={hourlystyle.sectionTitleText}>Hourly Forecast</Text>

        <View style={hourlystyle.listContainer}>
          <View style={hourlystyle.listItem}>
            <Ionicons name="car-outline" size={27} color="black" />
            <Text style={hourlystyle.listItemText}>
              As many stops as you need in one car
            </Text>
          </View>
          <View style={hourlystyle.listItem}>
            <Image
              source={require("../../assets/icons8-change-80.png")}
              style={{ width: 30, height: 30 }}
            />
            <Text style={hourlystyle.listItemText}>
              As many stops as you need in one car
            </Text>
          </View>

          <View style={hourlystyle.listItem}>
            <AntDesign name="trademark" size={24} color="black" />
            <Text style={hourlystyle.listItemText}>
              As many stops as you need in one car
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            marginTop: "auto",
            paddingBottom: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
              width: "95%",
            }}
          >
            <Text>Starting at</Text>
            <Text style={homestyle.locationButtonTextBold}>$55.38/hour</Text>
          </View>

          <Button
            text="Get Started"
            onPress={() => navigation.navigate("SelectTime")}
          ></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Hourly;
