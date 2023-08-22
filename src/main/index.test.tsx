import { render, screen } from '@testing-library/react';
import Main from '../components/fos';

test('renders learn react link', () => {
  render(<Main options={{demo:true}} path={[]} />);
  const textElement = screen.getByText(/assemble-layers/i);
  expect(textElement).toBeInTheDocument();
});
