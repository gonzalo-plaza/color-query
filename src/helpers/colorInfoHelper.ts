import { BaseColorInfo } from "../models/BaseColorInfo";
import { ColorData } from "../models/ColorData";

/**
 * The function `getBaseColorInfo` takes in a `colorData` object and returns an array of base color
 * information including HEX, RGB, HSL values, contrast color, and exact match name.
 * 
 * @param {ColorData} colorData - The `colorData` parameter is an object that contains information
 * about a color.
 * 
 * @returns An array of objects is being returned. Each object represents a different type of color
 * information and has a "name" and "value" property. The "name" property represents the type of color
 * information (e.g. HEX, RGB, HSL, Contrast color, Exact match name) and the "value" property
 * represents the corresponding value for that type of color information.
 */
export const getBaseColorInfo = (colorData: ColorData): BaseColorInfo => {
    return [
        {
            name: "HEX",
            value: colorData.hex.value
        },
        {
            name: "RGB",
            value: colorData.rgb.value
        },
        {
            name: "HSL",
            value: colorData.hsl.value
        },
        {
            name: "Contrast color",
            value: colorData.contrast.value
        },
        {
            name: "Exact match name",
            value: colorData.name.exact_match_name.toString()
        }
    ]
}