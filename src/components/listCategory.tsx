import { Image, Text, View } from "react-native";

type Props = {
    name: string,
    imageSrc: string
}

export default function ListCategory(props: Props) {

    const { imageSrc, name } = props

    return (
        <View className="flex-row w-32 h-10 bg-white-opacity-30 rounded-xl items-center justify-center my-4 mr-4">
            <Image className="ml-4"
                source={{ uri: imageSrc }}
                style={{
                    width: 30,
                    height: 30
                }}></Image>
            <Text className="flex-1 text-base font-medium pl-3 font-Kaisei">
                {name}
            </Text>
        </View>
    )
}