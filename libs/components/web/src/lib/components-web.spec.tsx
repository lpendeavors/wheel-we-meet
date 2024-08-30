import { render } from '@testing-library/react';

import ComponentsWeb from './components-web';

describe('ComponentsWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsWeb />);
    expect(baseElement).toBeTruthy();
  });
});
