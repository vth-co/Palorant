import { DatePicker } from "react-native-woodpicker";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const DatePickerComponent = ({ title }) => {
  const [pickedDate, setPickedDate] = useState<Date>();

  const handleText = (): string =>
    pickedDate ? pickedDate.toDateString() : "Date of Birth";

  //   const renderLabel = () => {
  //     if (value) {
  //       return (
  //         <Text style={[styles.label, isFocus && { color: "transparent" }]}>
  //           Date of Birth
  //         </Text>
  //       );
  //     }
  //     return null;
  //   };

  return (
    <View style={styles.container}>
      {pickedDate && <Text className="text-secondary-400">{title}</Text>}
      <DatePicker
        containerStyle={styles.containerStyle}
        textInputStyle={styles.textInputStyle}
        value={pickedDate}
        onDateChange={setPickedDate}
        title="When is your birthday?"
        text={handleText()}
        isNullable={true}
        backdropAnimation={{ opacity: 0.5, duration: 1000, delay: 300 }}
        //minimumDate={new Date(Date.now())}
        //maximumDate={new Date(Date.now()+2000000000)}
        iosMode="date"
        //androidMode="countdown"
        iosDisplay="spinner"
        //androidDisplay="spinner"
        //locale="fr"
        textColor="black"
      />
    </View>
  );
};

export default DatePickerComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    backgroundColor: "#1D2939",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  containerStyle: {
    height: 20,
  },
  textInputStyle: {
    color: "white",
  },
});
