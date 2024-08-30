import { render } from '@testing-library/react';

import MobileTrip from './mobile-trip';

describe('MobileTrip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileTrip />);
    expect(baseElement).toBeTruthy();
  });
});
