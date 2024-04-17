import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Link } from 'expo-router';
import Button from '@/src/components/Button';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Hi Hi</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}

      <Link href={'/sign-up'} asChild>
        <Button text='Create an account' />
      </Link>
      <Link href={'/sign-in'} asChild>
        <Button text='Log in' />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
