import { render, screen } from '@testing-library/react';
import Error from '../../pages/Error/Error';

describe('Test render Error page', () => {
  test('render Error elements in DOM', () => {
    const { getByText } = render(<Error />);
    const tehWarnings = getByText('Технические неполадки 😕');
    const returnAway = getByText('К сожалению, не удалось загрузить пиццы. Попробуйте позже.');
    expect(returnAway).toBeInTheDocument();
    expect(tehWarnings).toBeInTheDocument();
  });
});
