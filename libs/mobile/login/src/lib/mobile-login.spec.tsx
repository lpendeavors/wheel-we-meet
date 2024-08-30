import { render } from '@testing-library/react';

import MobileLogin from './mobile-login';

describe('MobileLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileLogin />);
    expect(baseElement).toBeTruthy();
  });
});
