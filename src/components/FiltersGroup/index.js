import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {ratingsList, categoryList, searchValue} = props

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const clearFilters = () => {
    const {clearFiltersState} = props
    clearFiltersState()
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          onKeyDown={onEnterSearchInput}
          onChange={onChangeSearchInput}
          value={searchValue}
          placeholder="search"
          type="search"
          className="search-input"
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="category-heading">Category</h1>
      <ul className="list-container">
        {categoryList.map(eachCategory => {
          const {activateCategoryId, category} = props
          const changeCategoryId = () => {
            activateCategoryId(eachCategory.categoryId)
          }
          const activeCategory =
            category === eachCategory.categoryId ? 'active' : ''
          return (
            <li
              onClick={changeCategoryId}
              key={eachCategory.categoryId}
              className="category-name"
            >
              <p className={activeCategory}>{eachCategory.name}</p>
            </li>
          )
        })}
      </ul>

      <ul className="list-container">
        <h1 className="category-heading">Ratings</h1>
        {ratingsList.map(eachRating => {
          const {activateRatingId, rating} = props
          const changeRatingId = () => {
            activateRatingId(eachRating.ratingId)
          }

          const activeRating = rating === eachRating.ratingId ? 'active' : ''

          return (
            <li
              onClick={changeRatingId}
              key={eachRating.ratingId}
              className="rating"
            >
              <img
                className="rating-image"
                src={eachRating.imageUrl}
                alt={`rating ${eachRating.ratingId}`}
              />
              <p className={`up ${activeRating}`}>& up</p>
            </li>
          )
        })}
      </ul>

      <button onClick={clearFilters} type="button" className="clear-button">
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
