import { useAuth } from "@/src/providers/AuthProvider";
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
            headerShown: false,
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
