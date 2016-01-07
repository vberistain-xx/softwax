/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import React from "react";

// Uncomment the following lines to use the react test utilities
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import ItemCardComponent from 'components/shop/item/ItemCardComponent.js';

describe('ItemCardComponent', () => {
    let component;
    let TitleContainer, ImgContainer, ExtraInfoContainer, Component;

    let item = {
      image: 'http://source.to.image/',
      artist: {
          name: 'artistName'
      },
      title: 'title',
      genre: 'genre',
      reference: 'reference',
      price: 'price'
    };

    beforeEach(() => {
      component = createComponent(ItemCardComponent, {item});
      Component = TestUtils.renderIntoDocument(
        <ItemCardComponent item={item} />
      );
      TitleContainer = TestUtils.findRenderedDOMComponentWithClass(
         Component, 'title-container'
      );
      ImgContainer = TestUtils.findRenderedDOMComponentWithClass(
         Component, 'img-container'
      );
      ExtraInfoContainer = TestUtils.findRenderedDOMComponentWithClass(
         Component, 'extra-info-container'
      );
    });

    it('should have its component name as default className', () => {
      expect(component.type).to.equal('div');
      expect(component.props.className).to.equal('itemcard-component');
    });
    it('should load the right image with the right alt', () => {
      expect(ImgContainer.children[0].src).to.equal(item.image);
      expect(ImgContainer.children[0].alt).to.equal(item.title);
    });
    it('should show the right title', () => {
      expect(TitleContainer.children[0].textContent).to.equal(item.artist.name + ': ' + item.title);
    });
    it('should show the right genre', () => {
      expect(TitleContainer.children[2].textContent).to.equal(item.genre);
    });
    it('should show the right extra reference', () => {
      expect(ExtraInfoContainer.children[0].textContent).to.equal(item.reference);
    });
    it('should show the right extra price', () => {
      expect(ExtraInfoContainer.children[2].textContent).to.equal(item.price + '€');
    });
});
