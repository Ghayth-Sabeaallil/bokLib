import "../../Styles/Components/SelectDropDown.scss"
type SelectDropDownProps = {
    handleSelectChange: React.ChangeEventHandler<HTMLSelectElement>;
    subject: string;
}
const SelectDropDown = ({ handleSelectChange, subject }: SelectDropDownProps) => {

    return (
        <select className="select-box" value={subject} onChange={handleSelectChange}>
            <option value="horror">Horror</option>
            <option value="business">Business</option>
            <option value="art">Art</option>
            <option value="design">Design</option>
            <option value="history">History</option>
            <option value="humor">Humor</option>
        </select>
    )
}
export default SelectDropDown;