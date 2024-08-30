import { render } from '@testing-library/react';

import MobileSettings from './mobile-settings';

describe('MobileSettings', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileSettings />);
    expect(baseElement).toBeTruthy();
  });
});
