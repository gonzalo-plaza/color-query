type ColorInfoListItemProps = {
  name: string;
  value: string;
};

const ColorInfoListItem = ({ name, value }: ColorInfoListItemProps) => {
  return (
    <li className="color-info-item">
      {name}: <span className="color-info-item__detail">{value}</span>
    </li>
  );
};

export default ColorInfoListItem;
