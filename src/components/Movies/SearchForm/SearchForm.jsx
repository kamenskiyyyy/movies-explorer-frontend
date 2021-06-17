import './SearchForm.css';
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className='search'>
      <div className='search__item'>
        <input
          className='search__item_input'
          name='search'
          required
          placeholder='Фильм'
          type="text"
          autoComplete="off"
        />
        <button className='search__item_button' type='submit'/>
      </div>
      <FilterCheckbox/>
    </form>
  )
}

export default SearchForm;
