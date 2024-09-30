import { atom } from "recoil"

type Food = {
    id: number,
    name: string,
    imageSrc: string,
    description: string,
    price: string,
    rate: string
}

const listFoodState = atom<Food[]>({
    key: "listFoodState",
    default: [
        {
            id: 1,
            name: "Original Sushi",
            imageSrc: "https://cdn-icons-png.flaticon.com/128/3259/3259041.png",
            description: "Nigiri is the original form of sushi that we know today. Also called edo-mae (meaning “in front of Edo”), the name refers to its birthplace of Tokyo (formerly Edo). It's made up of a hand-pressed rice cylinder (shari) topped with any number of ingredients (neta)",
            price: "21.00",
            rate: "4.8"
        },
        {
            id: 2,
            name: "Mochi",
            imageSrc: "https://cdn-icons-png.flaticon.com/128/3361/3361962.png",
            description: "Dango is a Japanese dessert. It features sweet chewy rice balls that consist of rice flour, glutinous rice flour, icing sugar and hot boiling water. Hanami Dango is usually sold in Japan by food stalls during cherry blossom season hence the light pink, green and white colors. ",
            price: "22.00",
            rate: "5.0"
        },
        {
            id: 3,
            name: "Salmon Eggs",
            imageSrc: "https://cdn-icons-png.flaticon.com/128/3183/3183425.png",
            description: "Salmon eggs (roe) range in color from pale yellowish-orange to dark reddish-orange. The color varies both by species and within species and is determined by water temperature, sediment composition, age, and other factors. ",
            price: "25.00",
            rate: "4.8"
        },
    ]
})

export default listFoodState