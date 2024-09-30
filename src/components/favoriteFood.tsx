import { Image, Text, View } from "react-native"

type Props = {
    name: string,
    imageSrc: string,
    price: string,
    rate: string,
}

export default function FavoriteFood(props: Props) {
    const { imageSrc, name, price, rate } = props
    return (
        <View className="bg-white-opacity-30 h-36 rounded-xl">
            <View className="items-end mt-1 mr-1">
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/11105/11105818.png" }}
                    style={{
                        width: 25,
                        height: 25,
                    }}></Image>
            </View>
            <View className="flex-row absolute items-center h-full w-full">
                <View className="items-center p-4">
                    <Image source={{ uri: imageSrc }}
                        style={{
                            width: 120,
                            height: 120
                        }}></Image>
                </View>
                <View className="pl-4 space-y-4 flex-1">
                    <Text className="text-lg font-Kaisei">
                        {name}
                    </Text>
                    <View className="flex-row justify-between">
                        <Text className="font-Kaisei text-base">
                            $ {price}
                        </Text>
                        <View className="flex-row space-x-1">
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1040/1040230.png" }}
                                style={{
                                    width: 20,
                                    height: 20
                                }}></Image>
                            <Text className="font-Kaisei text-base pr-4">
                                {rate}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}