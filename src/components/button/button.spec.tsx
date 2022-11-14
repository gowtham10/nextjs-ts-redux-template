import { render, screen } from '@testing-library/react';
import Button from '@/components/button/button';

describe('<Button />', () => {
  const buttonName = 'Test Button';

  it('renders the component', () => {
    render(<Button buttonName={buttonName} />);

    const button = screen.getByRole('button', {
      name: /Test Button/i,
    });

    expect(button).toBeInTheDocument();
  });
});
