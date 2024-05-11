import { selectPizza } from '../../../../redux/pizza/selector';

describe('Test SelectPizzas', () => {
  test('should select pizzas from state object', () => {
    const state = {
      pizza: [
        {
          id: 0,
          imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
          title: 'Пепперони Фреш с перцем',
          types: [0, 1],
          sizes: [26, 30, 40],
          price: 803,
          category: 0,
          rating: 4,
        },
        {
          id: 1,
          imageUrl:
            'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
          title: 'Сырная',
          types: [0],
          sizes: [26, 40],
          price: 245,
          category: 0,
          rating: 6,
        },
      ],
    };
    const result = selectPizza(state);

    expect(result).toEqual(state.pizza);
  });
  test('should return undefined from empty object', () => {
    const state = {};
    const result = selectPizza(state);
    expect(result).toBeUndefined();
  });
  test('should return undefined from empty pizza array', () => {
    const state = {
      pizza: [],
    };
    const result = selectPizza(state);
    expect(result).toEqual([]);
  });
});
