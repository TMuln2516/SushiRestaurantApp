import { Image, Pressable, Text, View } from "react-native"

type Props = {
    name: string,
    imageSrc: string,
    price: string,
    rate: string,
    onPress: () => void
}

export default function ListFood(props: Props) {
    const { name, imageSrc, price, rate, onPress } = props

    return (
        <Pressable className="w-40 h-56 bg-white-opacity-30 rounded-xl mr-6 shadow-2xl"
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            onPress={onPress}>
            <View className="items-end mt-1 mr-1">
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/11105/11105818.png" }}
                    style={{
                        width: 20,
                        height: 20,

                    }}></Image>
            </View>
            <View className="absolute flex-1">
                <Image source={{ uri: imageSrc }}
                    style={{
                        width: 160,
                        height: 160
                    }}>

                </Image>
                <Text className="font-medium text-base px-3 font-Kaisei">
                    {name}
                </Text>
                <View className="px-3 flex-row justify-between pt-3">
                    <Text className="text-base font-Kaisei">
                        $ {price}
                    </Text>
                    <View className="flex-row space-x-1">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1040/1040230.png" }}
                            style={{
                                width: 20,
                                height: 20
                            }}></Image>
                        <Text className="text-base font-Kaisei">
                            {rate}
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}