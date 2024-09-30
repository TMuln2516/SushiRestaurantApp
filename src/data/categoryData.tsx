import { atom } from "recoil"

type Category = {
    id: number,
    name: string,
    imageSrc: string
}

const listCategoryState = atom<Category[]>({
    key: "listCategory",
    default: [
        {
            id: 1,
            name: "Sushi",
            imageSrc: "https://cdn-icons-png.flaticon.com/128/3183/3183425.png"
        },
        {
            id: 2,
            name: "Ramen",
            imageSrc: "https://cdn-icons-png.flaticon.com/128/12585/12585479.png"
        },
        {
            id: 3,
            name: "Kimbap",
            imageSrc: "https://cdn-icons-png.flaticon.com/128/6105/6105060.png"
        },
        {
            id: 4,
            name: "Kimbap",
            imageSrc: "https://cdn-icons-png.flaticon.com/128/6105/6105060.png"
        },
        {
            id: 5,
            name: "Kimbap",
            imageSrc: "https://cdn-icons-png.flaticon.com/128/6105/6105060.png"
        },
    ]
})

export default listCategoryState