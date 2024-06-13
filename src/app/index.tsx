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
      <View>

      <Image source={require('../../assets/images/palorant.png')} style={styles.image}/>
        </View>
      <Text style={styles.title}>
        Meet Palorant
      </Text>
      <Text style={styles.description}>
        A safe space for female VALORANT players to meet and play with other female players
      </Text>
      <Link href={'/sign-up'} asChild>
        <Button text='Create an account' 
        containerStyle={{
          width: '90%',
        }}
        />
      </Link>
      <Link  href={'/sign-in'}  asChild >
        <Button text='Log in' 
        containerStyle={{
          backgroundColor: '#1D2939',
          width: '90%',
        }}
        />
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
    width: 400,
    height: 400,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.dark.tint
  },
  description: {
    fontSize: 20,
    color: 'lightgray',
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 50,
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
