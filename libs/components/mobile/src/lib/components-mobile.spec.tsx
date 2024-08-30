import { render } from '@testing-library/react';

import ComponentsMobile from './components-mobile';

describe('ComponentsMobile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsMobile />);
    expect(baseElement).toBeTruthy();
  });
});
