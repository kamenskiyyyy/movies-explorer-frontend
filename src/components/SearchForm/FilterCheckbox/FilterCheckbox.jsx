import './FilterCheckbox.css';

function FilterCheckbox() {
  return <label className="filtercheckbox">
    Короткометражки
    <input className="filtercheckbox__input" type="checkbox" />
    <span className="filtercheckbox__visible-input"/>
  </label>
}

export default FilterCheckbox;
