import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import { FontAwesome } from '@expo/vector-icons'; // Use an icon library for the check mark

const MultiSelectComponent = ({ data, label }) => {
  const [selected, setSelected] = useState([]);

  const renderItem = (item) => {
    const isSelected = selected.includes(item.value);

    return (
      <View style={styles.item}>
        <Text style={styles.itemTextStyle}>{item.label}</Text>
        <View style={[styles.checkbox, isSelected && styles.checked]}>
          {isSelected && <FontAwesome name="check" size={14} color="white" />}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        containerStyle={styles.containerStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemContainerStyle={styles.itemContainerStyle}
        itemTextStyle={styles.itemTextStyle}
        activeColor="#transparent"
        backgroundColor="#060a107f"
        // search
        data={data}
        labelField="label"
        valueField="value"
        placeholder={`${label}`}
        searchPlaceholder="Search..."
        value={selected}
        onChange={item => {
          setSelected(item);
        }}
        renderItem={renderItem}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  );
};

export default MultiSelectComponent;

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
    justifyContent: "space-between",
    padding: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#FCFCFD",
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: "#475467",
  },
  label: {
    position: "absolute",
    backgroundColor: "transparent",
    left: 10,
    top: 15,
    zIndex: 999,
    paddingHorizontal: 8,
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
    marginLeft: 10,
  },
  selectedStyle: {
    backgroundColor: "#344054",
    borderRadius: 10,
    borderColor: "transparent",
    marginTop: 10,
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
