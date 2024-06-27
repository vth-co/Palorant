import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(50);

  const renderLabel = () => {
    if (value ) {
      return (
        <Text style={[styles.label, isFocus && { color: 'transparent' }]}>
          Rank
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'transparent' }, {height: dropdownHeight}]}
        placeholderStyle={styles.placeholderStyle}
        containerStyle={styles.containerStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemContainerStyle={styles.itemContainerStyle}
        itemTextStyle={styles.itemTextStyle}
        data={data}
        activeColor='#475467'
        backgroundColor='#060a107f'
        // search
        maxHeight={190}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select your rank' : 'Select your rank'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          setDropdownHeight(70);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign
        //     style={styles.icon}
        //     color={isFocus ? 'blue' : 'black'}
        //     name="Safety"
        //     size={20}
        //   />
        // )}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  containerStyle: {
    borderColor: 'black',
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#1D2939',
  },
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#1D2939',
  },
  itemContainerStyle: {
    backgroundColor: 'transparent',

  },
  itemTextStyle: {
    color: '#FCFCFD',
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'transparent',
    left: 10,
    top: 15,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#98A2B3',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#98A2B3'
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#FCFCFD',
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
