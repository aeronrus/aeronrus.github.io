import filterReducer, {
  initialState,
  setCategoryId,
  setSearchValue,
  setCurrentPage,
  setFilters,
  setSortId,
} from '../../../../redux/filter/slice';

describe('test filterSlice.setCategoryId', () => {
  it('should setCategoryId in the state correctly', () => {
    const newState = filterReducer(initialState, setCategoryId(1));
    expect(newState.categoryId).toEqual(1);
  });
  it('should setCategoryId in the state uncorrectly', () => {
    const newState = filterReducer(initialState, setCategoryId());
    expect(newState.categoryId).toEqual();
  });
});

describe('test filterSlice.setSortId', () => {
  it('should setSortId in the state correctly', () => {
    const newState = filterReducer(initialState, setSortId(1));
    expect(newState.sortId).toEqual(1);
  });
});

describe('test filterSlice.setCurrentPage', () => {
  it('should setCurrentPage in the state correctly', () => {
    const newState = filterReducer(initialState, setCurrentPage(10));
    expect(newState.currentPage).toEqual(10);
    expect(newState.categoryId).toBe(0);
    expect(newState.sortId).toBe(0);
    expect(newState.searchValue).toBe('');
  });
});

describe('test filterSlice.setSearchValue', () => {
  it('should setSearchValue in the state correctly', () => {
    const newState = filterReducer(initialState, setSearchValue('Сырная'));
    expect(newState.searchValue).toEqual('Сырная');
    expect(newState.categoryId).toBe(0);
    expect(newState.sortId).toBe(0);
    expect(newState.currentPage).toBe(1);
  });
});

describe('test filterSlice.setFilters', () => {
  it('should setFilters in the state correctly', () => {
    const filters = { currentPage: 10, sortId: 10, categoryId: 10 };
    const newState = filterReducer(initialState, setFilters(filters));
    expect(newState).toEqual({
      searchValue: '',
      ...filters,
    });
  });
});
