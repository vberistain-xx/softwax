/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import React from "react";

// Uncomment the following lines to use the react test utilities
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';
import HeaderComponent from "components/layout/HeaderComponent";
import ContentComponent from "components/layout/ContentComponent";
import MenuComponent from "components/layout/MenuComponent";
import SidebarComponent from "components/layout/SidebarComponent";

import Shop from 'components/Shop';

describe('Shop', () => {
    let component, Component;

    beforeEach(() => {
      component = createComponent(Shop);
      Component = TestUtils.renderIntoDocument(
        <Shop />
      );
    });

    it('should have its component name as default className', () => {
      expect(component.props.className).to.equal('container');
    });
    it('should render the right Components', () => {
      expect(component.props.children.length).to.equal(4);
      expect(component.props.children[0].type).to.equal(HeaderComponent);
      expect(component.props.children[1].type).to.equal(MenuComponent);
      expect(component.props.children[2].type).to.equal(SidebarComponent);
      expect(component.props.children[3].type).to.equal(ContentComponent);
    });
});
