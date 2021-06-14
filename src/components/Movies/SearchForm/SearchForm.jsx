import './SearchForm.css';
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className='search'>
      <div className='search__item'>
        <input className='search__item_input' placeholder='Фильм' type="text"/>
        <button className='search__item_button' type='submit'/>
      </div>
      <FilterCheckbox/>
    </form>
  )
}

export default SearchForm;
