import { render } from '@testing-library/react';

import MapboxNavigation from './mapbox-navigation';

describe('MapboxNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MapboxNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
