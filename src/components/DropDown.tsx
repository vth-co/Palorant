import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Ascendant3 from "./Ranks/Ascendant3";
import Immortal3 from "./Ranks/Immortal3";
import Radiant from "./Ranks/Radiant";
import Silver3 from "./Ranks/Silver3";
import Gold3 from "./Ranks/Gold3";
import Diamond3 from "./Ranks/Diamond3";
import Platinum3 from "./Ranks/Platinum3";
import Iron3 from "./Ranks/Iron3";
import Unranked from "./Ranks/Unranked";
import Bronze3 from "./Ranks/Bronze3";
import Immortal1 from "./Ranks/Immortal1";
import Immortal2 from "./Ranks/Immortal2";
import Ascendant1 from "./Ranks/Ascendant1";
import Ascendant2 from "./Ranks/Ascendant2";
import Diamond1 from "./Ranks/Diamond1";
import Diamond2 from "./Ranks/Diamond2";
import Platinum1 from "./Ranks/Platinum1";
import Platinum2 from "./Ranks/Platinum2";
import Gold2 from "./Ranks/Gold2";
import Gold1 from "./Ranks/Gold1";
import Silver2 from "./Ranks/Silver2";
import Silver1 from "./Ranks/Silver1";
import Bronze1 from "./Ranks/Bronze1";
import Bronze2 from "./Ranks/Bronze2";
import Iron2 from "./Ranks/Iron2";
import Iron1 from "./Ranks/Iron1";

const rankData = [
  {
    label: "Radiant",
    value: "Radiant",
    icon: <Radiant width={32} height={32} />,
  },
  {
    label: "Immortal",
    value: "Immortal",
    icon: <Immortal3 width={32} height={32} />,
  },
  {
    label: "Ascendant",
    value: "Ascendant",
    icon: <Ascendant3 width={32} height={32} />,
  },
  {
    label: "Diamond",
    value: "Diamond",
    icon: <Diamond3 width={32} height={32} />,
  },
  {
    label: "Platinum",
    value: "Platinum",
    icon: <Platinum3 width={32} height={32} />,
  },
  { label: "Gold", value: "Gold", icon: <Gold3 width={32} height={32} /> },
  {
    label: "Silver",
    value: "Silver",
    icon: <Silver3 width={32} height={32} />,
  },
  {
    label: "Bronze",
    value: "Bronze",
    icon: <Bronze3 width={32} height={32} />,
  },
  { label: "Iron", value: "Iron", icon: <Iron3 width={32} height={32} /> },
  {
    label: "Unranked",
    value: "Unranked",
    icon: <Unranked width={32} height={32} />,
  },
];

const tierData = {
  Immortal: [
    { label: "Immortal 1", value: "Immortal 1", icon: <Immortal1 width={32} height={32} /> },
    { label: "Immortal 2", value: "Immortal 2", icon: <Immortal2 width={32} height={32} /> },
    { label: "Immortal 3", value: "Immortal 3", icon: <Immortal3 width={32} height={32} /> },
  ],
  Ascendant: [
    { label: "Ascendant 1", value: "Ascendant 1", icon: <Ascendant1 width={32} height={32} /> },
    { label: "Ascendant 2", value: "Ascendant 2", icon: <Ascendant2 width={32} height={32} /> },
    { label: "Ascendant 3", value: "Ascendant 3", icon: <Ascendant3 width={32} height={32} /> },
  ],
  Diamond: [
    { label: "Diamond 1", value: "Diamond 1", icon: <Diamond1 width={32} height={32} /> },
    { label: "Diamond 2", value: "Diamond 2", icon: <Diamond2 width={32} height={32} /> },
    { label: "Diamond 3", value: "Diamond 3", icon: <Diamond3 width={32} height={32} /> },
  ],
  Platinum: [
    { label: "Platinum 1", value: "Platinum 1", icon: <Platinum1 width={32} height={32} /> },
    { label: "Platinum 2", value: "Platinum 2", icon: <Platinum2 width={32} height={32} /> },
    { label: "Platinum 3", value: "Platinum 3", icon: <Platinum3 width={32} height={32} /> },
  ],
  Gold: [
    { label: "Gold 1", value: "Gold 1", icon: <Gold1 width={32} height={32} /> },
    { label: "Gold 2", value: "Gold 2", icon: <Gold2 width={32} height={32} /> },
    { label: "Gold 3", value: "Gold 3", icon: <Gold3 width={32} height={32} /> },
  ],
  Silver: [
    { label: "Silver 1", value: "Silver 1", icon: <Silver1 width={32} height={32} /> },
    { label: "Silver 2", value: "Silver 2", icon: <Silver2 width={32} height={32} /> },
    { label: "Silver 3", value: "Silver 3", icon: <Silver3 width={32} height={32} /> },
  ],
  Bronze: [
    { label: "Bronze 1", value: "Bronze 1", icon: <Bronze1 width={32} height={32} /> },
    { label: "Bronze 2", value: "Bronze 2", icon: <Bronze2 width={32} height={32} /> },
    { label: "Bronze 3", value: "Bronze 3", icon: <Bronze3 width={32} height={32} /> },
  ],
  Iron: [
    { label: "Iron 1", value: "Iron 1", icon: <Iron1  width={32} height={32} /> },
    { label: "Iron 2", value: "Iron 2", icon: <Iron2 width={32} height={32} /> },
    { label: "Iron 3", value: "Iron 3", icon: <Iron3 width={32} height={32} /> },
  ],
  // Add more tiers for other ranks as needed
};

const DropdownComponent = () => {
  const [selectedRank, setSelectedRank] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(50);

  const renderLabel = () => {
    if (selectedRank) {
      return (
        <Text style={[styles.label, isFocus && { color: "transparent" }]}>
          Rank
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
        data={rankData}
        activeColor="#475467"
        backgroundColor="#060a107f"
        // search
        maxHeight={190}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select your rank" : "Select your rank"}
        searchPlaceholder="Search..."
        value={selectedRank}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setSelectedRank(item.value);
          setSelectedTier(null); // Reset tier selection when rank changes
          setIsFocus(false);
          setDropdownHeight(70);
        }}
        renderItem={renderItem}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color={isFocus ? 'blue' : 'black'}
        //     name="Safety"
        //     size={20}
        //   />
        // )}
      />
      {selectedRank && tierData[selectedRank] && (
        <Dropdown
          style={[styles.dropdown, { marginTop: 10 }]}
          placeholderStyle={styles.placeholderStyle}
          containerStyle={styles.containerStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          itemContainerStyle={styles.itemContainerStyle}
          itemTextStyle={styles.itemTextStyle}
          data={tierData[selectedRank]}
          activeColor="#475467"
          backgroundColor="#060a107f"
          // search
          maxHeight={190}
          labelField="label"
          valueField="value"
          placeholder="Select your tier"
          searchPlaceholder="Search..."
          value={selectedTier}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setSelectedTier(item.value);
            setIsFocus(false);
          }}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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
    marginTop: 15,
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
