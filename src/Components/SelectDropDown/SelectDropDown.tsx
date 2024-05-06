import "../../Styles/Components/SelectDropDown.scss";
import { v4 as uuidv4 } from 'uuid';

type SelectDropDownProps = {
    handleSelectChange: React.ChangeEventHandler<HTMLSelectElement>;
    items: string[];
    value: string;
}
const SelectDropDown = ({ handleSelectChange, items, value }: SelectDropDownProps) => {

    return (
        <select className="select-box" value={value} onChange={handleSelectChange}>
            {
                items.map((item) => (
                    <option key={uuidv4()} value={item}>{item.toUpperCase()}</option>
                ))
            }

        </select>
    )
}
export default SelectDropDown;