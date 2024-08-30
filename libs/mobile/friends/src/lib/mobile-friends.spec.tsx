import { render } from '@testing-library/react';

import MobileFriends from './mobile-friends';

describe('MobileFriends', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileFriends />);
    expect(baseElement).toBeTruthy();
  });
});
