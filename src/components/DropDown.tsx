import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const DropdownComponent = ({ data, label, onChange, value }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(50);

  const renderLabel = () => {
    if (value) {
      return (
        <Text style={[styles.label, isFocus && { color: "transparent" }]}>
          {label}
        </Text>
      );
    }
    return null;
  };

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        {item.icon}
        <Text style={[styles.itemTextStyle, { marginLeft: 10 }]}>
          {item.label}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && { borderColor: "transparent" },
          { height: dropdownHeight },
        ]}
        placeholderStyle={styles.placeholderStyle}
        containerStyle={styles.containerStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemContainerStyle={styles.itemContainerStyle}
        itemTextStyle={styles.itemTextStyle}
        data={data}
        activeColor="#475467"
        backgroundColor="#060a107f"
        maxHeight={190}
        labelField="label"
        valueField="value"
        placeholder={`${label}`}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          onChange(item.value);
          setIsFocus(false);
          setDropdownHeight(70);
        }}
        renderItem={renderItem}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  containerStyle: {
    borderColor: "black",
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: "#1D2939",
  },
  dropdown: {
    height: 50,
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#1D2939",
  },
  itemContainerStyle: {
    backgroundColor: "transparent",
  },
  itemTextStyle: {
    color: "#FCFCFD",
  },
  icon: {
    marginRight: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  label: {
    position: "absolute",
    backgroundColor: "transparent",
    left: 10,
    top: 15,
    zIndex: 999,
    paddingHorizontal: 4,
    fontSize: 14,
    color: "#98A2B3",
  },
  placeholderStyle: {
    fontSize: 16,
    marginLeft: 5,
    color: "#98A2B3",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#FCFCFD",
    marginLeft: 5,
    marginTop: 20,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
