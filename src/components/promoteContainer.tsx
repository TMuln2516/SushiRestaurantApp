import { Image, Text, View } from "react-native";
import TextButton from "./textButton";

export default function PromoteContainer() {
    return (
        <View className="flex-row bg-bgGetstarted my-4 rounded-3xl">
            <View className="flex-1 justify-center pt-4">
                <View className="justify-center items-center">
                    <Text className="text-white text-lg font-Nunito">
                        Get 32% Promo
                    </Text>
                </View>
                <TextButton
                    title="Buy Food"
                    onPress={() => { }}></TextButton>
            </View>
            <View className="-rotate-12">
                <Image
                    source={require("../assets/images/camarao.png")}
                    style={{
                        width: 140,
                        height: 140
                    }}></Image>
            </View>
        </View>
    )
}