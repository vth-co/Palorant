import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Link } from 'expo-router';
import Button from '@/src/components/Button';
import Colors from '@/src/constants/Colors';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Hi Hi</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      <Image 
        source={require('./palorant.png')}
        // source={{uri: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww'}}
        style={styles.image}
      />
      <Text style={styles.title}>
        Meet Palorant
      </Text>
      <Text style={styles.description}>
        A safe space for female VALORANT players to meet and play with other female players
      </Text>
      <Link href={'/sign-up'} asChild>
        <Button text='Create an account' />
      </Link>
      <Link  href={'/sign-in'}  asChild >
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
    backgroundColor: '#101828'
  },
  image: {
    width: 500,
    height: 500,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark.tint
  },
  description: {
    fontSize: 15,
    color: Colors.dark.tint,
    textAlign: 'center',
    paddingHorizontal: 75,
    marginBottom: 50
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
