import { render, screen } from '@testing-library/react';
import Main from '../components/fos-old';

test('renders learn react link', () => {
  render(<Main  />);
  const textElement = screen.getByText(/assemble-layers/i);
  expect(textElement).toBeInTheDocument();
});
