import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { initialWindowMetrics } from "react-native-safe-area-context";

const BoxScreen = () => {
  const boxes = (
    title,
    mainStyle,
    titleStyle,
    box1Style,
    box2Style,
    box3Style
  ) => (
    <View style={styles.rootStyle}>
      <Text style={titleStyle}>{title}</Text>
      <View style={mainStyle}>
        <Text
          style={
            box1Style !== undefined && box1Style !== null
              ? box1Style
              : styles.box1Style
          }
        >
          Box 1
        </Text>
        <Text
          style={
            box2Style !== undefined && box2Style !== null
              ? box2Style
              : styles.box2Style
          }
        >
          Box 2
        </Text>
        <Text
          style={
            box3Style !== undefined && box3Style !== null
              ? box3Style
              : styles.box3Style
          }
        >
          Box 3
        </Text>
      </View>
    </View>
  );

  const sectionTitle = (sectionTitle) => (
    <Text
      style={{
        fontSize: 22,
        margin: 10,
        fontWeight: "bold",
      }}
    >
      {sectionTitle}
    </Text>
  );

  return (
    <ScrollView>
      {sectionTitle("Exercise")}
      {boxes(
        "Exercise",
        {
          height: 210,
          borderColor: "#FF0000",
          borderWidth: 4,
          flexDirection: "row",
          justifyContent: "space-between",
        },
        styles.titleStyle,
        [styles.box1Style, { height: 100, width: 100 }],
        [
          styles.box2Style,
          {
            height: 100,
            width: 100,
            alignSelf: "flex-end",
          },
        ],
        [styles.box3Style, { height: 100, width: 100 }]
      )}

      {/* alignItems, justifyContent, flexDirection will always be applied to parent view */}
      {sectionTitle("alignItems")}
      {boxes(
        "alignItems: stretch - by default",
        { alignItems: "stretch" },
        styles.titleStyle
      )}
      {boxes(
        "alignItems: flex-start",
        { alignItems: "flex-start" },
        styles.titleStyle
      )}
      {boxes("alignItems: center", { alignItems: "center" }, styles.titleStyle)}
      {boxes(
        "alignItems: flex-end",
        { alignItems: "flex-end" },
        styles.titleStyle
      )}

      {sectionTitle("flexDirection")}
      {boxes(
        "flexDirection: column - by default",
        { flexDirection: "column" },
        styles.titleStyle
      )}
      {boxes(
        "flexDirection: column, alignItems: flex-start",
        { flexDirection: "column", alignItems: "flex-start" },
        styles.titleStyle
      )}
      {boxes(
        "flexDirection: column, alignItems: center",
        { flexDirection: "column", alignItems: "center" },
        styles.titleStyle
      )}
      {boxes(
        "flexDirection: column, alignItems: flex-end",
        { flexDirection: "column", alignItems: "flex-end" },
        styles.titleStyle
      )}

      {boxes(
        "flexDirection: row - by default",
        {
          flexDirection: "row",
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle
      )}
      {boxes(
        "flexDirection: row, alignItems: flex-start",
        {
          flexDirection: "row",
          height: 200,
          alignItems: "flex-start",
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle
      )}
      {boxes(
        "flexDirection: row, alignItems: center",
        {
          flexDirection: "row",
          height: 200,
          alignItems: "center",
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle
      )}
      {boxes(
        "flexDirection: row, alignItems: flex-end",
        {
          flexDirection: "row",
          height: 200,
          alignItems: "flex-end",
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle
      )}

      {sectionTitle("justifyContent")}
      {boxes(
        "justifyContent: start - by default",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle
      )}
      {boxes(
        "justifyContent: center",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
          justifyContent: "center",
        },
        styles.titleStyle
      )}
      {boxes(
        "justifyContent: space-between",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
          justifyContent: "space-between",
        },
        styles.titleStyle
      )}
      {boxes(
        "justifyContent: space-around",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
          justifyContent: "space-around",
        },
        styles.titleStyle
      )}

      {boxes(
        "justifyContent: start - by default",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
          flexDirection: "row",
        },
        styles.titleStyle
      )}
      {boxes(
        "justifyContent: center",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
          justifyContent: "center",
          flexDirection: "row",
        },
        styles.titleStyle
      )}
      {boxes(
        "justifyContent: space-between",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
          justifyContent: "space-between",
          flexDirection: "row",
        },
        styles.titleStyle
      )}
      {boxes(
        "justifyContent: space-around",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
          justifyContent: "space-around",
          flexDirection: "row",
        },
        styles.titleStyle
      )}

      {boxes(
        "flex: 0, flex: 1, flex: 0",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, { flex: 0 }],
        [styles.box2Style, { flex: 1 }],
        [styles.box3Style, { flex: 0 }]
      )}

      {boxes(
        "flexDirection: row, flex: 0, flex: 1, flex: 0",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
          flexDirection: "row",
        },
        styles.titleStyle,
        [styles.box1Style, { flex: 0 }],
        [styles.box2Style, { flex: 1 }],
        [styles.box3Style, { flex: 0 }]
      )}

      {boxes(
        "flex: 1, flex: 1, flex: 1",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, { flex: 1 }],
        [styles.box2Style, { flex: 1 }],
        [styles.box3Style, { flex: 1 }]
      )}

      {boxes(
        "flexDirection: row, flex: 1, flex: 1, flex: 1",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
          flexDirection: "row",
        },
        styles.titleStyle,
        [styles.box1Style, { flex: 1 }],
        [styles.box2Style, { flex: 1 }],
        [styles.box3Style, { flex: 1 }]
      )}

      {/* below is based on 40% 40% and 20%  */}
      {/* to calculate 4+4+2=10, you can even use up to 100 total units for finer precision */}
      {boxes(
        "justifyContent: start - by default",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, { flex: 4 }],
        [styles.box2Style, { flex: 4 }],
        [styles.box3Style, { flex: 2 }]
      )}

      {boxes(
        "justifyContent: start - by default",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
          flexDirection: "row",
        },
        styles.titleStyle,
        [styles.box1Style, { flex: 40 }],
        [styles.box2Style, { flex: 40 }],
        [styles.box3Style, { flex: 20 }]
      )}

      {sectionTitle("alignSelf")}
      {boxes(
        "alignSelf: center - on Box 2",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, {}],
        [styles.box2Style, { alignSelf: "center" }],
        [styles.box3Style, {}]
      )}

      {boxes(
        "alignSelf: stretch - on Box 2",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, {}],
        [styles.box2Style, { alignSelf: "stretch" }],
        [styles.box3Style, {}]
      )}

      {boxes(
        "alignSelf: flex-start - on Box 2",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, {}],
        [styles.box2Style, { alignSelf: "flex-start" }],
        [styles.box3Style, {}]
      )}

      {boxes(
        "alignSelf: flex-end - on Box 2",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, {}],
        [styles.box2Style, { alignSelf: "flex-end" }],
        [styles.box3Style, {}]
      )}

      {sectionTitle("position")}
      {boxes(
        "position: relative - by default",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, {}],
        [styles.box2Style, {}],
        [styles.box3Style, {}]
      )}
      {boxes(
        "position: absolute - Box 2 on top Box 1 and ignores as it doesn't exist",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, {}],
        [styles.box2Style, { position: "absolute" }],
        [styles.box3Style, {}]
      )}

      {sectionTitle("top, bottom, left, right")}
      {boxes(
        "top: 10 - on Box 2",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, {}],
        [styles.box2Style, { top: 10 }],
        [styles.box3Style, {}]
      )}
      {boxes(
        "bottom: 10 - on Box 2",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, {}],
        [styles.box2Style, { bottom: 10 }],
        [styles.box3Style, {}]
      )}
      {boxes(
        "left: 10 - on Box 2",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, {}],
        [styles.box2Style, { left: 10 }],
        [styles.box3Style, {}]
      )}
      {boxes(
        "right: 10 - on Box 2",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, {}],
        [styles.box2Style, { right: 10 }],
        [styles.box3Style, {}]
      )}

      {sectionTitle("position, top, bottom, right, left (absoluteFillObject)")}
      {boxes(
        "left: 10 - on Box 2",
        {
          height: 200,
          borderColor: "#FF0000",
          borderWidth: 4,
        },
        styles.titleStyle,
        [styles.box1Style, {}],
        [
          styles.box2Style,
          // {position: "absolute",top: 0,right: 0,bottom: 0,left: 0}, same as line below
          { ...StyleSheet.absoluteFillObject },
        ],
        [styles.box3Style, {}]
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootStyle: {
    margin: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontStyle: initialWindowMetrics,
    paddingBottom: 4,
  },
  box1Style: {
    borderWidth: 1,
    backgroundColor: "#92B4A7",
    borderColor: "#000",
    fontSize: 18,
    padding: 2,
  },
  box2Style: {
    borderWidth: 1,
    backgroundColor: "#EFC7C2",
    borderColor: "#000",
    fontSize: 18,
    padding: 2,
  },
  box3Style: {
    borderWidth: 1,
    backgroundColor: "#F7EC59",
    borderColor: "#000",
    fontSize: 18,
    padding: 2,
  },
});

export default BoxScreen;
