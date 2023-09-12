import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";

import Divider from "../components/Divider";
import Switch from "../components/Switch";
import Button from "../components/Button";
const ChoiceMap = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  // const [snapPoints, setSnapPoints] = useState(["90%", "45%"]);
  const [isOpen, setIsOpen]  = useState(false);
const [index, setIndex] = useState(1)
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["45%", "90%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);

    if (index === 1) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }

  }, []);
  return (
    <SafeAreaView
      style={{ position: "relative", flex: 1 }}
      edges={["left", "right", "top"]}
    >
      <Image
        source={require("../../assets/image14.png")}
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
          position: "absolute",
        }}
      />
      <View style={{ padding: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
          onPress={() => navigation.goBack()}
        >
          <Entypo name="chevron-small-left" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "flex-end", position: "relative", top: -25 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              backgroundColor: "#4460ef",
              textAlign: "center",
              padding: 5,
            }}
          >
            4 {"\n"} Min
          </Text>
       
          <Text>University of {"\n"} SouthernCalifornia</Text>
       
          <Entypo name="chevron-small-right" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            padding: 10,
            borderRadius: 5,
            width: Dimensions.get("screen").width - 20,
            margin: "auto",
            backgroundColor: "white",
          }}
        >
          <Octicons name="dot-fill" size={24} color="black" />
          <TextInput
            placeholder="Where to?"
            style={{ width: "100%" }}
            placeholderTextColor="black"
          />
        </View>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <ScrollView style={styles.contentContainer}>
          <View
            style={{
              borderBottomColor: "#cccccc",
              borderBottomWidth: StyleSheet.hairlineWidth,
              width: Dimensions.get("screen").width - 24,
              paddingVertical: 8,
            }}
          >
            <Text
              style={{ fontWeight: "800", fontSize: 18, textAlign: "center" }}
            >
              Choose a Ride
            </Text>
          </View>
          <View style={{ display: isOpen? "none":"flex" }}>
            <View style={{ width: "100%", padding: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <Image
                  source={require("../../assets/carrem.png")}
                  style={{ width: 70, height: 60 }}
                  resizeMode="cover"
                  resizeMethod="scale"
                />

                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: Dimensions.get("screen").width - 110,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "800",
                        fontSize: 16,
                      }}
                    >
                      Black Hourly
                    </Text>
                    <Text
                      style={{
                        fontWeight: "800",
                        fontSize: Dimensions.get("screen").fontScale * 18,
                      }}
                    >
                      $110.75
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: Dimensions.get("screen").width - 110,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 16,
                      }}
                    >
                      4 min away
                    </Text>
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 16,
                      }}
                    >
                      $55.38/hour
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: Dimensions.get("screen").width - 110,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 16,
                      }}
                    >
                      30 min included
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ width: "100%" }}>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  gap: 20,
                  padding: 10,
                }}
              >
                <Image
                  source={require("../../assets/careme.png")}
                  style={{ width: 70, height: 60 }}
                  resizeMode="cover"
                  resizeMethod="scale"
                />

                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: Dimensions.get("screen").width - 110,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "800",
                        fontSize: 16,
                      }}
                    >
                      Black SUV Hourly
                    </Text>
                    <Text
                      style={{
                        fontWeight: "800",
                        fontSize: 16,
                      }}
                    >
                      $140.75
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: Dimensions.get("screen").width - 110,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 16,
                      }}
                    >
                      6 min away
                    </Text>
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 16,
                      }}
                    >
                      $55.38/hour
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: Dimensions.get("screen").width - 110,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "300",
                        fontSize: 16,
                      }}
                    >
                      30 min included
                    </Text>
                  </View>
                </View>
              </View>
              <Divider />
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  paddingHorizontal: 10,
                  justifyContent: "space-between",
                  alignItems: "center",

                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "space-between",
                    paddingVertical: 10,
                    alignItems: "center",
                  }}
                >
                  <Switch value={isEnabled} onPress={toggleSwitch} />
                  <View>
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: 16,
                      }}
                    >
                      {isEnabled ? "Personal" : "Business"}
                    </Text>

                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 14,
                      }}
                    >
                      Visa 1590
                    </Text>
                  </View>
                </View>

                <FontAwesome name="angle-right" size={24} color="black" />
              </View>
            </View>
          </View>
          <View style={{ flex: 1 , display:isOpen?"flex":"none"}}>
            {/* recommended */}
            <View>
              <View
                style={{
                  borderBottomColor: "#cccccc",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  width: Dimensions.get("screen").width - 24,
                  paddingVertical: 8,
                  paddingLeft: 10,
                }}
              >
                <Text
                  style={{ fontWeight: "800", fontSize: 18, textAlign: "left" }}
                >
                  Recommended
                </Text>
              </View>

              <View style={{ width: "100%", padding: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <Image
                    source={require("../../assets/carrem.png")}
                    style={{ width: 70, height: 60 }}
                    resizeMode="cover"
                    resizeMethod="scale"
                  />

                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: Dimensions.get("screen").width - 110,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "800",
                          fontSize: 16,
                        }}
                      >
                        Black Hourly
                      </Text>
                      <Text
                        style={{
                          fontWeight: "800",
                          fontSize: Dimensions.get("screen").fontScale * 18,
                        }}
                      >
                        $110.75
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: Dimensions.get("screen").width - 110,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "300",
                          fontSize: 16,
                        }}
                      >
                        4 min away
                      </Text>
                      <Text
                        style={{
                          fontWeight: "300",
                          fontSize: 16,
                        }}
                      >
                        $55.38/hour
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: Dimensions.get("screen").width - 110,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "300",
                          fontSize: 16,
                        }}
                      >
                        30 min included
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={{ width: "100%", padding: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <Image
                    source={require("../../assets/carrem.png")}
                    style={{ width: 70, height: 60 }}
                    resizeMode="cover"
                    resizeMethod="scale"
                  />

                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: Dimensions.get("screen").width - 110,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "800",
                          fontSize: 16,
                        }}
                      >
                        Black Hourly
                      </Text>
                      <Text
                        style={{
                          fontWeight: "800",
                          fontSize: Dimensions.get("screen").fontScale * 18,
                        }}
                      >
                        $110.75
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: Dimensions.get("screen").width - 110,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "300",
                          fontSize: 16,
                        }}
                      >
                        4 min away
                      </Text>
                      <Text
                        style={{
                          fontWeight: "300",
                          fontSize: 16,
                        }}
                      >
                        $55.38/hour
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: Dimensions.get("screen").width - 110,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "300",
                          fontSize: 16,
                        }}
                      >
                        30 min included
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* recommmended */}

            {/* economy */}
            <View>
              <View
                style={{
                  borderBottomColor: "#cccccc",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  width: Dimensions.get("screen").width - 24,
                  paddingVertical: 8,
                  paddingLeft: 10,
                }}
              >
                <Text
                  style={{ fontWeight: "800", fontSize: 18, textAlign: "left" }}
                >
                  Economy
                </Text>
              </View>

              {
                Array.from([1,2,3,4,5], (a, b) => {
                  return (
                    
              <View style={{ width: "100%", padding: 10 }}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <Image
                    source={require("../../assets/carrem.png")}
                    style={{ width: 70, height: 60 }}
                    resizeMode="cover"
                    resizeMethod="scale"
                  />

                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: Dimensions.get("screen").width - 110,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "800",
                          fontSize: 16,
                        }}
                      >
                        Black Hourly
                      </Text>
                      <Text
                        style={{
                          fontWeight: "800",
                          fontSize: Dimensions.get("screen").fontScale * 18,
                        }}
                      >
                        $110.75
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: Dimensions.get("screen").width - 110,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "300",
                          fontSize: 16,
                        }}
                      >
                        4 min away
                      </Text>
                      <Text
                        style={{
                          fontWeight: "300",
                          fontSize: 16,
                        }}
                      >
                        $55.38/hour
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: Dimensions.get("screen").width - 110,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "300",
                          fontSize: 16,
                        }}
                      >
                        30 min included
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
                  )
                })
              }


            </View>
            {/* economy */}
          </View>
        </ScrollView>
      </BottomSheet>
      <View
        style={{
       
          alignItems: "center",
          marginTop: "auto",

          bottom: 40,
        }}
      >
        <Button text="Choose Black Hourly" />
      </View>
    </SafeAreaView>
  );
};

export default ChoiceMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "red",
  },
  contentContainer: {
    flex: 1,
    // alignItems: "center",
    height:"100%",
    paddingBottom: 40,
  },
});
