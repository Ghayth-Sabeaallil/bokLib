import "../../Styles/Components/SelectDropDown.scss"
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
                    <option key={item} value={item}>{item.toUpperCase()}</option>
                ))
            }

        </select>
    )
}
export default SelectDropDown;