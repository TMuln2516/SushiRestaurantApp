import { Image, TextInput, View } from "react-native";

export default function SearchInput() {
    return (
        <View className="bg-white-opacity-30 rounded-lg h-12 flex-row items-center">
            <Image className="mx-4"
                source={{ uri: "https://cdn-icons-png.flaticon.com/128/17216/17216943.png" }}
                style={{
                    width: 30,
                    height: 30
                }}></Image>
            <TextInput
                placeholder="Search Here"
                placeholderTextColor="#B6B2B2">
            </TextInput>
        </View>
    )
}