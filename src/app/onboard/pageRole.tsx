import { Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import CircleButton from "@/components/CircleButton";
import ControllerSVG from "@/components/SVG Assets/Roles/Controller";
import DuelistSVG from "@/components/SVG Assets/Roles/Duelist";
import SentinelSVG from "@/components/SVG Assets/Roles/Sentinel";
import InitiatorSVG from "@/components/SVG Assets/Roles/Initiator";
import FillSVG from "@/components/SVG Assets/Roles/Fill";

const pageRole = () => {

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <View className="flex-1 bg-[#101828] p-5">
      <Text className="text-white text-3xl font-bold">Choose your main</Text>
      <Text className="text-secondary-400 text-xl mt-3">
        Select your role(s) and agent(s).
      </Text>
      <View className="flex-row mt-10">
        <CircleButton Icon={ControllerSVG} />
        <CircleButton Icon={DuelistSVG} />
        <CircleButton Icon={InitiatorSVG} />
        <CircleButton Icon={SentinelSVG} />
        <CircleButton Icon={FillSVG} />
      </View>
      {/* <View>
        {isOpen && <View>
          
          </View>}
      </View> */}
      <View className="absolute bottom-20 left-5">
        <CustomButton
          title="Next"
          handlePress={() => router.push("/onboard/pageRank")}
        />
      </View>
    </View>
  );
};

export default pageRole;
