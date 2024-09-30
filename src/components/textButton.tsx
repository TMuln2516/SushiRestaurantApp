import { Pressable, Text, View } from "react-native"

type Props = {
    title: string,
    onPress: () => void,
}

export default function TextButton(props: Props) {

    const { onPress, title } = props

    return (
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
            onPress={onPress}>
            <View className="h-12 justify-center items-center rounded-2xl m-6 bg-white-opacity-30">
                <Text className="text-white font-Kaisei">
                    {title}
                </Text>
            </View>
        </Pressable>
    )
}