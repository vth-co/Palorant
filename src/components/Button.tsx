import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';
import { forwardRef } from 'react';

type ButtonProps = {
  text: string;
  textStyle?: object;
  containerStyle?: object;
} & React.ComponentPropsWithoutRef<typeof Pressable>;


const Button = forwardRef<View | null, ButtonProps>(
  ({ text, textStyle, containerStyle, ...pressableProps }, ref) => {
    return (
      // <Pressable ref={ref} {...pressableProps} style={[styles.container, containerStyle]}>
      //   <Text style={[styles.text, textStyle]}>{text}</Text>
      // </Pressable>
      <TouchableOpacity ref={ref} {...pressableProps} style={[styles.container, containerStyle]}>
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});

export default Button;
