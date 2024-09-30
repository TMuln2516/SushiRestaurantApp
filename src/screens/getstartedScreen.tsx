import { Image, SafeAreaView, Text, View } from "react-native";
import TextButton from "../components/textButton";

export default function GetstartedScreen({ navigation }: any) {
    return (
        <SafeAreaView className="flex-1 bg-bgGetstarted">
            <View className="relative items-end">
                <Image className="w-screen h-500"
                    source={require("../assets/images/Sushi_name_japan.png")}></Image>
                <Image className="w-screen h-500 rotate-6 absolute"
                    source={require("../assets/images/Mao_sushi.png")}></Image>
                <Image className="w-28 h-72 rotate-6 absolute items-end bottom-0 right-0"
                    source={require("../assets/images/Sushi_name_white.png")}></Image>
            </View>
            <View className="h-screen w-screen absolute justify-end space-y-4 px-6">
                <Text className="text-4xl font-Nunito text-slate-50 ">
                    The taste of japanese food
                </Text>
                <Text className="font-Nunito text-sm text-slate-50">
                    Feel the taste of most popular japanese foods from anywhre and anytime.
                </Text>
                <TextButton
                    title="Get Started"
                    onPress={() => {
                        navigation.navigate({
                            name: "Home"
                        })
                    }}>
                </TextButton>
            </View>
        </SafeAreaView>
    )
}