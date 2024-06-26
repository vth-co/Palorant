import { useAuth } from "@/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";

export default function OnBoardLayout() {

  const {session } = useAuth();

  // if (session) {
  //   return <Redirect href={'/home'} />;
  // }

  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="pageRole"
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#101828",
            },
            headerTintColor: '#D0D5DD',
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="pageRank"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="pageHabits"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="pageDisplay"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="pageProfilePicture"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
