import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /NextJS Typescript Boilerplate Code./i,
    });

    expect(heading).toBeInTheDocument();
  });
});
