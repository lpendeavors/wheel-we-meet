import { render } from '@testing-library/react';

import MobileProfile from './mobile-profile';

describe('MobileProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileProfile />);
    expect(baseElement).toBeTruthy();
  });
});
