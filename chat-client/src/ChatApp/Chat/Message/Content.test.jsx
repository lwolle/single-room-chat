import React from 'react';
import { mount } from 'enzyme/build';
import { Content } from './Content';

describe('Chat/Message/Content', () => {
    it('should render', () => {
        const root = mount(<Content />);

        expect(root).toHaveStyleRule('background', 'rgb(212,212,212)');
        expect(root).toHaveStyleRule('margin-left', 'unset');
        expect(root).toHaveStyleRule('margin-right', 'auto');
        expect(root).toHaveStyleRule('text-align', 'left');
    });

    it('should render variant', () => {
        const root = mount(<Content isMine />);

        expect(root).toHaveStyleRule('background', 'rgb(180,231,250)');
        expect(root).toHaveStyleRule('margin-left', 'auto');
        expect(root).toHaveStyleRule('margin-right', 'unset');
        expect(root).toHaveStyleRule('text-align', 'right');
    });
});
