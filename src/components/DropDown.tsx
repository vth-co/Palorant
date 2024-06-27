import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Ascendant3 from './Ranks/Ascendant3';
import Immortal3 from './Ranks/Immortal3';
import Radiant from './Ranks/Radiant';
import Silver3 from './Ranks/Silver3';
import Gold3 from './Ranks/Gold3';
import Diamond3 from './Ranks/Diamond3';
import Platinum3 from './Ranks/Platinum3';
import Iron3 from './Ranks/Iron3';
import Unranked from './Ranks/Unranked';
import Bronze3 from './Ranks/Bronze3';

const data = [
  { label: 'Radiant', value: '1', icon: <Radiant width={32} height={32} /> },
  { label: 'Immortal', value: '2', icon: <Immortal3 width={32} height={32} /> },
  { label: 'Ascendant', value: '3', icon: <Ascendant3 width={32} height={32} /> },
  { label: 'Diamond', value: '4', icon: <Diamond3 width={32} height={32} /> },
  { label: 'Platinum', value: '5', icon: <Platinum3 width={32} height={32} /> },
  { label: 'Gold', value: '6', icon: <Gold3 width={32} height={32} /> },
  { label: 'Silver', value: '7', icon: <Silver3 width={32} height={32} /> },
  { label: 'Bronze', value: '8', icon: <Bronze3 width={32} height={32} /> },
  { label: 'Iron', value: '9', icon: <Iron3 width={32} height={32} /> },
  { label: 'Unranked', value: '10', icon: <Unranked width={32} height={32} /> },
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

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        {item.icon}
        <Text style={[styles.itemTextStyle, { marginLeft: 10 }]}>{item.label}</Text>
      </View>
    );
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
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
    marginLeft: 5,
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
