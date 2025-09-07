import axios from 'axios';
import { ColorData } from '../models/ColorData';

/* The code `export const colorApi = axios.create({ baseURL: 'https://www.thecolorapi.com/' });` is
creating an instance of the Axios library with a base URL of 'https://www.thecolorapi.com/'. */
export const colorApi = axios.create(
{
    baseURL: 'https://www.thecolorapi.com/'
}
);

/**
 * The function `getHexColorInfo` takes a hex color value as input, cleans it, and makes an API call to
 * retrieve color information.
 * @param {string} value - The `value` parameter is a string representing a hex color code.
 * @returns a Promise that resolves to a value of type `ColorData`.
 */
export const getHexColorInfo = async (value: string): Promise<ColorData> => {
    const hexClean = value.replace('#', '');
    const {data} = (await colorApi.get(`id?hex=${hexClean}`));

    return data;
}