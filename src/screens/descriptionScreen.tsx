import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextButton from "../components/textButton";

export default function DescriptionScreen({ route, navigation }: any) {
    const item = route.params

    const [count, setCount] = useState(1)

    return (
        <SafeAreaView>
            <View className="absolute justify-center items-center">
                <Image className="w-screen h-500 "
                    source={require("../assets/images/Sushi_name_japan.png")}></Image>
                <Image className="absolute bottom-40 right-0"
                    source={require("../assets/images/Sushi_name_black.png")}></Image>
                <Image className="absolute bg-blac rotate-12"
                    source={{ uri: item.imageSrc }}
                    style={{
                        width: 250,
                        height: 250
                    }}
                ></Image>
            </View>
            {/* tại sao dùng flex-1 không được mà phải dùng h-screnn và w-screen*/}
            <View className="w-screen h-screen justify-between">
                <View className="flex-row w-screen justify-between p-4">
                    <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                        onPress={() => navigation.goBack()}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/507/507257.png" }}
                            style={{
                                width: 25,
                                height: 25
                            }}></Image>
                    </Pressable>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/11105/11105818.png" }}
                        style={{
                            width: 25,
                            height: 25,
                        }}></Image>
                </View>
                <View>
                    <View className="px-6 space-y-6">
                        <View className="flex-row space-x-1 items-center">
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1040/1040230.png" }}
                                style={{
                                    width: 20,
                                    height: 20
                                }}></Image>
                            <Text className="font-Kaisei text-lg pr-4">
                                {item.rate}
                            </Text>
                        </View>
                        <Text className="text-3xl font-Kaisei">
                            {item.name}
                        </Text>
                        <View>
                            <Text className="text-2xl text-gray-400 mb-2 font-Kaisei">
                                Description
                            </Text>
                            <Text className="text-base font-Kaisei">
                                {item.description}
                            </Text>
                        </View>
                    </View>
                    <View className="h-44 bg-bgGetstarted mt-2 rounded-t-2xl justify-center">
                        <View className="flex-row justify-between p-8 items-center">
                            <View>
                                <Text className="text-white text-xl font-Kaisei">
                                    $ {(count * item.price).toFixed(2)}
                                </Text>
                            </View>
                            <View className="flex-row justify-center items-center">
                                <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                                    onPress={() => {
                                        if (count > 1) {
                                            setCount(count - 1)
                                        }
                                    }}>
                                    <View className="w-9 h-9 bg-white-opacity-30 rounded-full items-center justify-center">
                                        <Image source={require("../assets/images/ic_remove.png")}>

                                        </Image>
                                    </View>
                                </Pressable>
                                <Text className="text-white text-xl px-2 font-Kaisei">
                                    {count}
                                </Text>
                                <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                                    onPress={() => {
                                        setCount(count + 1)
                                    }}>
                                    <View className="w-9 h-9 bg-white-opacity-30 rounded-full items-center justify-center">
                                        <Image source={require("../assets/images/ic_add.png")}>
                                        </Image>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                        <TextButton
                            title="Buy Now"
                            onPress={() => { }}></TextButton>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}