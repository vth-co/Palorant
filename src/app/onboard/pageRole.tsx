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
import Brimstone from "@/components/SVG Assets/Agents/Brimstone";

const pageRole = () => {

  const [selectedRoles, setSelectedRoles] = useState({});
  const [selectedAgents, setSelectedAgents] = useState({});

  const roleButtons = [
    { Icon: ControllerSVG, name: 'Controller' },
    { Icon: DuelistSVG, name: 'Duelist' },
    { Icon: InitiatorSVG, name: 'Initiator' },
    { Icon: SentinelSVG, name: 'Sentinel' },
    { Icon: FillSVG, name: 'Fill' },
  ];

  const agentButtons = {
    Controller: [Brimstone, 'Agent 2', 'Agent 3'],
    Duelist: ['Agent 4', 'Agent 5', 'Agent 6'],
    Initiator: ['Agent 7', 'Agent 8', 'Agent 9'],
    Sentinel: ['Agent 10', 'Agent 11', 'Agent 12'],
    Fill: ['Agent 13', 'Agent 14', 'Agent 15'],
  };

  const toggleRole = (role) => {
    setSelectedRoles((prev) => ({
      ...prev,
      [role]: !prev[role],
    }));
  };

  const toggleAgent = (role, agent) => {
    setSelectedAgents((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [agent]: !prev[role]?.[agent],
      },
    }));
  };

  return (
    <View className="flex-1 bg-[#101828] p-5">
    <Text className="text-white text-3xl font-bold">Choose your main</Text>
    <Text className="text-secondary-400 text-xl mt-3">
      Select your role(s) and agent(s).
    </Text>
    <View className="flex-row mt-10">
      {roleButtons.map((role) => (
        <CircleButton
          key={role.name}
          Icon={role.Icon}
          onPress={() => toggleRole(role.name)}
          isSelected={selectedRoles[role.name]}
        />
      ))}
    </View>
    {Object.keys(selectedRoles).map(
      (role) =>
        selectedRoles[role] && (
          <View key={role} style={styles.agentContainer}>
            {agentButtons[role].map((agent) => (
              <CustomButton
                key={agent}
                title={agent}
                handlePress={() => toggleAgent(role, agent)}
                isSelected={selectedAgents[role]?.[agent]}
              />
            ))}
          </View>
        )
    )}
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
