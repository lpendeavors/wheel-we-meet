import { render } from '@testing-library/react';

import MobilePlaces from './mobile-places';

describe('MobilePlaces', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobilePlaces />);
    expect(baseElement).toBeTruthy();
  });
});
