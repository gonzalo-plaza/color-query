import { useEffect, useState } from "react";
import "./App.css";
import { getHexColorInfo } from "./api/colorApi";
import { ColorData } from "./models/ColorData";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";
import ColorInfo from "./components/ColorInfo/ColorInfo";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [colorData, setColorData] = useState<ColorData | null>();

  /**
   * The function `handleInputChange` takes a string value as input and sets it as the input value.
   * @param {string} value - The value parameter is a string that represents the new input value.
   */
  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  /**
   * The function `searchColor` takes an input value and retrieves information about a color in
   * hexadecimal format.
   * @param {string} inputValue - The `inputValue` parameter is a string that represents the color
   * value or name that the user wants to search for.
   */
  const searchColor = async (inputValue: string) => {
    const colorData: ColorData = await getHexColorInfo(inputValue);

    setColorData(colorData);
  };

  useEffect(() => {
    if (inputValue) {
      searchColor(inputValue);
    }
  }, [inputValue]);

  return (
    <div className="App">
      <Header />
      <main className="main-container">
        <Search searchColorInfo={handleInputChange} />
        {colorData && <ColorInfo colorData={colorData} />}
      </main>
    </div>
  );
}

export default App;
