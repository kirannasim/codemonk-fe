import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import VerifyEmailPage from '../index';

describe('<MainForm />', () => {
  const renderer = new ShallowRenderer();
  it('should render and match the snapshot', () => {
    renderer.render(<VerifyEmailPage />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
