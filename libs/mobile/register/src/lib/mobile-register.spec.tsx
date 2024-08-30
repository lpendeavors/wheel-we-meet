import { render } from '@testing-library/react';

import MobileRegister from './mobile-register';

describe('MobileRegister', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileRegister />);
    expect(baseElement).toBeTruthy();
  });
});
