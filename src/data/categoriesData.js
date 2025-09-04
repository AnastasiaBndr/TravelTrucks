import { capitalizeFirstLetter } from "../helpers";

import {
    IconAC,
    IconBathroom,
    IconAutomatic,
    IconTV,
    IconFuel,
    IconKitchen,
    IconFridge,
    IconGas,
    IconMicrowave,
    IconWater,
    IconRadio,
} from "../assets/icons";


const categoriesData = [
    {
        label: (value) => capitalizeFirstLetter(value),
        icon: IconAutomatic,
        key: "transmission",
        alwaysShow: true,
        size: { width: 20, height: 15 },
    },
    {
        label: (value) => capitalizeFirstLetter(value),
        icon: IconFuel,
        key: "engine",
        alwaysShow: true,
        size: { width: 20, height: 20 },
    },
    {
        label: "Kitchen",
        icon: IconKitchen,
        key: "kitchen",
        size: { width: 20, height: 18 },
    },
    {
        label: "Bathroom",
        icon: IconBathroom,
        key: "bathroom",
        size: { width: 20, height: 15 },
    },
    {
        label: "TV",
        icon: IconTV,
        key: "tv",
        size: { width: 20, height: 15 },
    },
    {
        label: "Gas",
        icon: IconGas,
        key: "gas",
        size: { width: 20, height: 20 },
    },
    {
        label: "Refrigerator",
        icon: IconFridge,
        key: "refrigerator",
        size: { width: 20, height: 20 },
    },
    {
        label: "Water",
        icon: IconWater,
        key: "water",
        size: { width: 19, height: 22 },
    },
    {
        label: "Microwave",
        icon: IconMicrowave,
        key: "microwave",
        size: { width: 20, height: 20 },
    },
    {
        label: "Radio",
        icon: IconRadio,
        key: "radio",
        size: { width: 20, height: 20 },
    },
    {
        label: "AC",
        icon: IconAC,
        key: "AC",
        size: { width: 17.5, height: 17.5 },
    },
];

export default categoriesData;

