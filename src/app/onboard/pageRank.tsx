import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { View } from "@/components/Themed";
import { router } from "expo-router";
import Radiant from "@/components/Ranks/Radiant";
import Immortal1 from "@/components/Ranks/Immortal1";
import Immortal2 from "@/components/Ranks/Immortal2";
import Immortal3 from "@/components/Ranks/Immortal3";
import Ascendant1 from "@/components/Ranks/Ascendant1";
import Ascendant2 from "@/components/Ranks/Ascendant2";
import Ascendant3 from "@/components/Ranks/Ascendant3";
import Diamond1 from "@/components/Ranks/Diamond1";
import Diamond2 from "@/components/Ranks/Diamond2";
import Diamond3 from "@/components/Ranks/Diamond3";
import Platinum1 from "@/components/Ranks/Platinum1";
import Platinum2 from "@/components/Ranks/Platinum2";
import Platinum3 from "@/components/Ranks/Platinum3";
import Gold1 from "@/components/Ranks/Gold1";
import Gold2 from "@/components/Ranks/Gold2";
import Gold3 from "@/components/Ranks/Gold3";
import Silver1 from "@/components/Ranks/Silver1";
import Silver2 from "@/components/Ranks/Silver2";
import Silver3 from "@/components/Ranks/Silver3";
import Bronze1 from "@/components/Ranks/Bronze1";
import Bronze2 from "@/components/Ranks/Bronze2";
import Bronze3 from "@/components/Ranks/Bronze3";
import Iron1 from "@/components/Ranks/Iron1";
import Iron2 from "@/components/Ranks/Iron2";
import Iron3 from "@/components/Ranks/Iron3";
import Unranked from "@/components/Ranks/Unranked";
import DropdownComponent from "@/components/DropDown";

const rankData = [
  {
    label: "Radiant",
    value: "Radiant",
    icon: <Radiant width={32} height={32} />,
  },
  {
    label: "Immortal",
    value: "Immortal",
    icon: <Immortal3 width={32} height={32} />,
  },
  {
    label: "Ascendant",
    value: "Ascendant",
    icon: <Ascendant3 width={32} height={32} />,
  },
  {
    label: "Diamond",
    value: "Diamond",
    icon: <Diamond3 width={32} height={32} />,
  },
  {
    label: "Platinum",
    value: "Platinum",
    icon: <Platinum3 width={32} height={32} />,
  },
  { label: "Gold", value: "Gold", icon: <Gold3 width={32} height={32} /> },
  {
    label: "Silver",
    value: "Silver",
    icon: <Silver3 width={32} height={32} />,
  },
  {
    label: "Bronze",
    value: "Bronze",
    icon: <Bronze3 width={32} height={32} />,
  },
  { label: "Iron", value: "Iron", icon: <Iron3 width={32} height={32} /> },
  {
    label: "Unranked",
    value: "Unranked",
    icon: <Unranked width={32} height={32} />,
  },
];

const tierData = {
  Immortal: [
    {
      label: "Immortal 1",
      value: "Immortal 1",
      icon: <Immortal1 width={32} height={32} />,
    },
    {
      label: "Immortal 2",
      value: "Immortal 2",
      icon: <Immortal2 width={32} height={32} />,
    },
    {
      label: "Immortal 3",
      value: "Immortal 3",
      icon: <Immortal3 width={32} height={32} />,
    },
  ],
  Ascendant: [
    {
      label: "Ascendant 1",
      value: "Ascendant 1",
      icon: <Ascendant1 width={32} height={32} />,
    },
    {
      label: "Ascendant 2",
      value: "Ascendant 2",
      icon: <Ascendant2 width={32} height={32} />,
    },
    {
      label: "Ascendant 3",
      value: "Ascendant 3",
      icon: <Ascendant3 width={32} height={32} />,
    },
  ],
  Diamond: [
    {
      label: "Diamond 1",
      value: "Diamond 1",
      icon: <Diamond1 width={32} height={32} />,
    },
    {
      label: "Diamond 2",
      value: "Diamond 2",
      icon: <Diamond2 width={32} height={32} />,
    },
    {
      label: "Diamond 3",
      value: "Diamond 3",
      icon: <Diamond3 width={32} height={32} />,
    },
  ],
  Platinum: [
    {
      label: "Platinum 1",
      value: "Platinum 1",
      icon: <Platinum1 width={32} height={32} />,
    },
    {
      label: "Platinum 2",
      value: "Platinum 2",
      icon: <Platinum2 width={32} height={32} />,
    },
    {
      label: "Platinum 3",
      value: "Platinum 3",
      icon: <Platinum3 width={32} height={32} />,
    },
  ],
  Gold: [
    {
      label: "Gold 1",
      value: "Gold 1",
      icon: <Gold1 width={32} height={32} />,
    },
    {
      label: "Gold 2",
      value: "Gold 2",
      icon: <Gold2 width={32} height={32} />,
    },
    {
      label: "Gold 3",
      value: "Gold 3",
      icon: <Gold3 width={32} height={32} />,
    },
  ],
  Silver: [
    {
      label: "Silver 1",
      value: "Silver 1",
      icon: <Silver1 width={32} height={32} />,
    },
    {
      label: "Silver 2",
      value: "Silver 2",
      icon: <Silver2 width={32} height={32} />,
    },
    {
      label: "Silver 3",
      value: "Silver 3",
      icon: <Silver3 width={32} height={32} />,
    },
  ],
  Bronze: [
    {
      label: "Bronze 1",
      value: "Bronze 1",
      icon: <Bronze1 width={32} height={32} />,
    },
    {
      label: "Bronze 2",
      value: "Bronze 2",
      icon: <Bronze2 width={32} height={32} />,
    },
    {
      label: "Bronze 3",
      value: "Bronze 3",
      icon: <Bronze3 width={32} height={32} />,
    },
  ],
  Iron: [
    {
      label: "Iron 1",
      value: "Iron 1",
      icon: <Iron1 width={32} height={32} />,
    },
    {
      label: "Iron 2",
      value: "Iron 2",
      icon: <Iron2 width={32} height={32} />,
    },
    {
      label: "Iron 3",
      value: "Iron 3",
      icon: <Iron3 width={32} height={32} />,
    },
  ],
  // Add more tiers for other ranks as needed
};

const pageRank = () => {
  const [selectedRank, setSelectedRank] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);

  const handleRankChange = (value) => {
    setSelectedRank(value);
    setSelectedTier(null); // Reset tier when rank changes
  };

  const handleTierChange = (value) => {
    setSelectedTier(value);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#101828] p-5">
      <Text className="text-white text-3xl font-bold">Choose your rank</Text>
      <Text className="text-secondary-400 text-xl mt-3">
        This will help us better match you with players in your rank
      </Text>
      <DropdownComponent
        data={rankData}
        label="Rank"
        onChange={handleRankChange}
        value={selectedRank}
      />
      {selectedRank && tierData[selectedRank] && (
        <DropdownComponent
          data={tierData[selectedRank]}
          label="Tier"
          onChange={handleTierChange}
          value={selectedTier}
        />
      )}
      <View className="absolute bottom-20 left-5">
        <CustomButton
          title="Next"
          handlePress={() => router.push("/onboard/pageHabits")}
        />
      </View>
    </SafeAreaView>
  );
};

export default pageRank;
