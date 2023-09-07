import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, homestyle, locationStyle } from "../../styles/style";
import { AntDesign, Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import Divider from "../components/Divider";
import Slider from "@react-native-community/slider";
import Button from "../components/Button";
const SelectTime = ({ navigation }) => {
  const [count, setCount] = useState(2);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value) => {
    setSliderValue(value);
    setCount(value);
  };

  const showModeAndroid = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: onChangeAndroid,
      mode: currentMode,
      is24Hour: true,
    });
  };
  useEffect(() => {
    setSliderValue(count);
  }, [count]);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState("none");
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const onChangeAndroid = (event, selectedDate) => {
    if (event.type === "set") {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
      navigation.navigate("ChoiceMap");
      return;
    }
  };

  return (
    <SafeAreaView style={homestyle.container}>
      <TouchableOpacity
        style={locationStyle.listItem}
        onPress={() => navigation.goBack()}
      >
        <View style={locationStyle.listItemContent}>
          <Entypo name="chevron-small-left" size={30} color="black" />

          <Text
            style={{
              fontSize: Dimensions.get("screen").fontScale * 16,
              color: colors.grey,
            }}
          >
            Select Time
          </Text>
        </View>

        <Ionicons name="md-options-outline" size={24} color="black" />
      </TouchableOpacity>
      <Divider />
      <Text style={{ fontWeight: "800", fontSize: 20, padding: 15 }}>
        How Much time do You need?
      </Text>

      <View style={{ paddingHorizontal: 20, paddingTop: 20, flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#d7eaf9af",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              width: 50,
              height: 50,
            }}
            onPress={() => {
              if (count === 2) return;

              setCount((prev) => (prev >= 2 ? prev - 1 : 2));
            }}
          >
            <AntDesign name="minus" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,

              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            {count} Hours
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#d7eaf9af",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              width: 50,
              height: 50,
            }}
            onPress={() => setCount((prev) => (prev < 7 ? prev + 1 : 7))}
          >
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Slider
          style={{ width: 300 }}
          value={sliderValue}
          minimumValue={2}
          maximumValue={7}
          thumbTintColor="#4460ef"
          minimumTrackTintColor="#4460ef"
          step={1}
          onValueChange={handleSliderChange}
        />

        <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#4460ef",

              width: Dimensions.get("screen").width / 4,
              borderRadius: 50,
              padding: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: Dimensions.get("screen").fontScale * 16,
              }}
            >
              Leave now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#d7eaf9af",
              width: 120,
              borderRadius: 50,
              padding: 5,
              justifyContent: "center",
              gap: 5,
            }}
            onPress={() => {
              Platform.OS === "android"
                ? showModeAndroid("date")
                : setOpen("flex");
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: Dimensions.get("screen").fontScale * 16,
              }}
            >
              Leave later{" "}
            </Text>
            <FontAwesome name="angle-down" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "auto" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text>Starting at</Text>
            <View>
              <Text style={homestyle.locationButtonTextBold}>$110.76</Text>
              <Text style={{ color: "#969696" }}>$55.38/hour</Text>
            </View>
          </View>
          <Button
            text="Get Started"
            onPress={() => navigation.navigate("SelectTime")}
          ></Button>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#808080b9",
          position: "absolute",
          bottom: 0,
          zIndex: 3,
          flex: 1,
          top: 0,
          width: Dimensions.get("screen").width,
          justifyContent: "flex-end",
          display: open,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: Dimensions.get("screen").height / 2,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            padding: 10,
          }}
        >
          <View
            style={{
              borderBottomColor: "gray",
              borderBottomWidth: StyleSheet.hairlineWidth,
              padding: 10,
            }}
          >
            <Text
              style={{ fontWeight: "700", textAlign: "center", fontSize: 18 }}
            >
              When would you like to leave?
            </Text>
          </View>

          {Platform.OS === "ios" ? (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"datetime"}
              display={Platform.OS === "ios" ? "spinner" : "default"}
              is24Hour={true}
              onChange={onChange}
            />
          ) : (
            ""
          )}

          <Button
            text="Confirm"
            onPress={() => navigation.navigate("ChoiceMap")}
          />
          <TouchableOpacity
            style={{ padding: 10 }}
            onPress={() => {
              setOpen("none");
            }}
          >
            <Text
              style={{ fontSize: 17, fontWeight: "700", textAlign: "center" }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectTime;
