import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "@/src/components/useColorScheme";
import AuthProvider from "../providers/AuthProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */}
          <Stack.Screen
            name="sign-in"
            options={{
              title: "Log in",
              headerStyle: {
                backgroundColor: "#101828",
              },
              headerTintColor: '#D0D5DD',
              headerShadowVisible: false,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="sign-up"
            options={{
              headerShown: false,
              title: "Join Palorant",
              headerStyle: {
                backgroundColor: "#101828",
              },
              headerTintColor: '#D0D5DD',
              headerShadowVisible: false,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen 
            name="onboard"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
}
