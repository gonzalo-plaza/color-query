import { getBaseColorInfo } from "../../helpers/colorInfoHelper";
import { BaseColorInfo } from "../../models/BaseColorInfo";
import { ColorData } from "../../models/ColorData";
import ColorInfoListItem from "./ColorInfoListItem";

import "./colorInfo.css";

type ColorInfoProps = {
  colorData: ColorData;
};

const ColorInfo = ({ colorData }: ColorInfoProps) => {
  const baseColorInfo: BaseColorInfo = getBaseColorInfo(colorData);
  const { name, hex, contrast } = colorData;
  return (
    <section className="color-info">
      <h3 className="color-info-title">
        Color Name:{" "}
        <span className="color-info-title__detail">{name.value}</span>
      </h3>
      <div className="color-info-divider" />
      <div className="color-info-container">
        <ul className="color-info-list">
          {baseColorInfo.map((item, index) => (
            <ColorInfoListItem
              key={index}
              name={item.name}
              value={item.value}
            />
          ))}
          {!name.exact_match_name && (
            <ColorInfoListItem
              name="Closest named color"
              value={name.closest_named_hex}
            />
          )}
        </ul>
        <div className="color-info-box" style={{ backgroundColor: hex.value }}>
          <p style={{ color: contrast.value }}>{name.value}</p>
        </div>
      </div>
    </section>
  );
};

export default ColorInfo;
