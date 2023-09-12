import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
export const colors = {
  black: "#0d1317",
  blue: "#4460ef",
  grey: "#545454",
  white: "#ffffff",
  lightgrey: "#eeeeee",
  red: "#D00000",
};
export const homestyle = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.lightgrey,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  hero: {
    padding: 10,
    height: Dimensions.get("screen").height - 400,
  },

  heroImg: {
    position: "absolute",
    zIndex: -1,
    width: Dimensions.get("screen").width,
    objectFit: "cover",
    height: "100%",
  },

  heroText: {
    fontWeight: "700",
    fontSize: Dimensions.get("screen").width / 16,
    width: Dimensions.get("screen").width - 100,

    color: "#000000",
  },

  recommendation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  recommendationButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  recommendationButtonText: {
    fontWeight: "300",
    fontSize: Dimensions.get("screen").fontScale * 13,

    marginLeft: 10,
  },

  location: {
    padding: 10,
    flexDirection: "row",
  },
  locationContainer: {
    // flex: 1,
    height: 400,
    paddingBottom: 100,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    // justifyContent: 'space-around',
    backgroundColor: "#fff",
  },

  locationButton: {
    flexDirection: "row",
    width: Dimensions.get("screen").width - 50,
    alignItems: "center",

    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  locationButtonMid: {
    flexDirection: "row",
    width: Dimensions.get("screen").width - 50,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "space-between",
  },

  locationIconsArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIconsArea2: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcons: {
    width: 30,
  },
  locationButtonTextBold: {
    fontWeight: "700",
    paddingVertical: 5,
    fontSize: Dimensions.get("screen").fontScale * 16,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
  },
  locationButtonTextUnstyled: {
    fontSize: Dimensions.get("screen").fontScale * 16,
    color: colors.grey,
  },
});

export const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: "#4460ef",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("screen").width - 30,
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});




export const locationStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d7eaf9af",
  },

  headerContainer: {
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  input: {
    backgroundColor: "#d7eaf9",
    fontSize: Dimensions.get("screen").fontScale * 20,
    width: Dimensions.get("screen").width - 50,
    height: 40,
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  listItem: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {},
  listItemContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});


// export const badgeStyle = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     fontSize: 16,
//   },
//   text: {
//     marginLeft: -1,
//     textAlignVertical: "top",
//     fontWeight: "700",
//   },
// });





export const hourlystyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgrey,
    // backgroundColor: colors.white,
    // justifyContent: "space-between",
   
  },
  section: {
    height: 500,

    padding: 10,
    paddingBottom: 20,
    backgroundColor: "#fff",
    flex: 1,
    // height: Dimensions.get("screen").height - 300,
  },
 
  hero: {
    padding: 10,
    height: 350,
    // height: Dimensions.get("screen").height / 3,
  },

  sectionTitleText: {
    fontSize: Dimensions.get("screen").fontScale * 20,
    fontWeight: "bold",
  },

  listContainer: {},

  listItem: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  listItemText: {
    fontSize: Dimensions.get("screen").fontScale * 16,
  },
  buttoncontainer: {
    marginTop: 100,
  },
});
