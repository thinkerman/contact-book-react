import { render, screen, cleanup } from '@testing-library/jest-dom';
import ContactBook from '../Contact';

test('Home button goes back home', () => {

    render(<ContactBook />);

    const homebutton = screen.getByTestId('home-button-test-id')

    expect(homebutton).toContainHTML('<div>HTML</div>')
})
