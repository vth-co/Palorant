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
          name="pageRiotId"
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
      </Stack>
    </>
  );
}
