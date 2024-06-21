import { useAuth } from "@/src/providers/AuthProvider";
import { StackActions } from "@react-navigation/native";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {

  const {session } = useAuth();

  // if (session) {
  //   return <Redirect href={'/home'} />;
  // }

  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            // headerShown: false,
            headerStyle: {
              backgroundColor: "#101828",
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            // headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
