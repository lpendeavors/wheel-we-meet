import { render } from '@testing-library/react';

import MobileChat from './mobile-chat';

describe('MobileChat', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileChat />);
    expect(baseElement).toBeTruthy();
  });
});
