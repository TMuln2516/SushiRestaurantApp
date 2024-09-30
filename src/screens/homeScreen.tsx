import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import PromoteContainer from "../components/promoteContainer";
import SearchInput from "../components/searchInput";
import { useRecoilState } from "recoil";
import listCategoryState from "../data/categoryData";
import ListCategory from "../components/listCategory";
import listFoodState from "../data/foodData";
import ListFood from "../components/listFood";
import FavoriteFood from "../components/favoriteFood";

export default function HomeScreen({ navigation }: any) {
    const [listCategory] = useRecoilState(listCategoryState);
    const [listFood] = useRecoilState(listFoodState)

    return (
        <SafeAreaView className="bg-gray-300 flex-1 px-4">
            <View className="space-y-5">
                <View className="flex-row justify-between py-4">
                    <View>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1828/1828859.png" }}
                            style={{
                                width: 25,
                                height: 25
                            }}></Image>
                    </View>
                    <View className="w-8 h-8 bg-bgGetstarted justify-center items-center rounded-full">
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/15494/15494722.png" }}
                            style={{
                                width: 25,
                                height: 25
                            }}></Image>
                    </View>
                </View>
                <PromoteContainer />
                <SearchInput />
                <ScrollView horizontal>
                    <View className="flex-row space-x-4">
                        {listCategory.map(item => (
                            <ListCategory
                                key={item.id}
                                name={item.name}
                                imageSrc={item.imageSrc}
                            />
                        ))}
                    </View>
                </ScrollView>
                <ScrollView horizontal>
                    <View className="flex-row">
                        {listFood.map(item => (
                            <ListFood
                                key={item.id}
                                name={item.name}
                                imageSrc={item.imageSrc}
                                price={item.price}
                                rate={item.rate}
                                onPress={() => {
                                    navigation.navigate({
                                        name: "Description",
                                        params: item
                                    })
                                }}
                            ></ListFood>
                        ))}
                    </View>
                </ScrollView>
                <Text className="text-xl py-5 font-Kaisei">
                    Popular Food
                </Text>
                <FavoriteFood
                    name={listFood[2].name}
                    imageSrc={listFood[2].imageSrc}
                    price={listFood[2].price}
                    rate={listFood[2].rate}
                ></FavoriteFood>
            </View>
        </SafeAreaView>
    );
}
