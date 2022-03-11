import {
    visitAdminPage,
} from '@wordpress/e2e-test-utils';
import { 
    scrollToBottom,
    isElementExist,
 } from '../utils/helpers';

describe( 'Modify Design System', () => {
    it( 'should update global colors with elementor', async () => {
        await visitAdminPage( '/' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#toplevel_page_elementor', { visible: true } );
        await page.click( '#toplevel_page_elementor' );
        await page.waitForSelector( '#toplevel_page_elementor > ul > li:nth-child(6) > a', { visible: true } );
        await page.click( '#toplevel_page_elementor > ul > li:nth-child(6) > a' );
        scrollToBottom();
        await page.click( 'div.e-getting-started__actions.e-getting-started__content--narrow > a.button.button-primary.button-hero' );
        await page.waitForSelector( '#elementor-panel-header-title', { visible: true } );
        // check elementor page builder exists or not
        expect( await isElementExist( "#elementor-panel-header-title" ) ).toBe( true );
        // Access to site settings
        await page.waitForSelector( '#elementor-panel-header-menu-button > i', { visible: true } );
        await page.click( '#elementor-panel-header-menu-button > i' );
        await page.waitForSelector( '.elementor-panel-menu-item.elementor-panel-menu-item-global-settings', { visible: true } );
         // Validating design system
        await page.click( '.elementor-panel-menu-item.elementor-panel-menu-item-global-settings' );
        await page.waitForSelector( '.elementor-panel-menu-item-global-colors', { visible: true } );
        await page.click( '.elementor-panel-menu-item-global-colors' );
        await page.click( '#elementor-kit-panel-content-controls > div.elementor-control.elementor-control-system_colors.elementor-control-type-global-style-repeater.elementor-label-inline.elementor-control-separator-default > div > div > div:nth-child(1) > div > div.elementor-control.elementor-control-color.elementor-control-type-color.elementor-label-block.elementor-control-separator-default > div > div > div > div.pickr.elementor-control-unit-1.elementor-control-tag-area > button' );
        await page.waitForSelector( 'div.pcr-app.visible' );
        await page.type( 'div.pcr-app.visible', '#00000' );
        await page.click( '#elementor-panel-saver-button-publish-label' );
    });

    it( 'should update global fonts with elementor', async () => {
        await visitAdminPage( '/' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#toplevel_page_elementor', { visible: true } );
        await page.click( '#toplevel_page_elementor' );
        await page.waitForSelector( '#toplevel_page_elementor > ul > li:nth-child(6) > a', { visible: true } );
        await page.click( '#toplevel_page_elementor > ul > li:nth-child(6) > a' );
        scrollToBottom();
        await page.click( 'div.e-getting-started__actions.e-getting-started__content--narrow > a.button.button-primary.button-hero' );
        await page.waitForSelector( '#elementor-panel-header-title', { visible: true } );
        expect( await isElementExist( "#elementor-panel-header-title" ) ).toBe( true );
        await page.waitForSelector( '#elementor-panel-header-menu-button > i', { visible: true } );
        await page.click( '#elementor-panel-header-menu-button > i' );
        await page.waitForSelector( '.elementor-panel-menu-item.elementor-panel-menu-item-global-settings' );
        await page.click( '.elementor-panel-menu-item.elementor-panel-menu-item-global-settings' );
        await page.waitForSelector( '.elementor-panel-menu-item.elementor-panel-menu-item-global-typography', { visible: true } );
        await page.click( '.elementor-panel-menu-item.elementor-panel-menu-item-global-typography' );
        await page.click( '#elementor-kit-panel-content-controls > div.elementor-control.elementor-control-system_typography.elementor-control-type-global-style-repeater.elementor-label-inline.elementor-control-separator-default > div > div > div:nth-child(1) > div > div.elementor-control.elementor-control-typography_typography.elementor-control-type-popover_toggle.elementor-label-inline.elementor-control-separator-default > div > div > div > label' );
        await page.click( '.elementor-control-system_typography.elementor-control-type-global-style-repeater.elementor-label-inline.elementor-control-separator-default > div > div > div:nth-child(1) > div > div.elementor-controls-popover.e-controls-popover--typography > div.elementor-control.elementor-control-typography_font_family.elementor-control-type-font.elementor-group-control-typography.elementor-group-control.elementor-group-control-font_family.elementor-label-inline.elementor-control-separator-default > div > div > div > span > span.selection > span > span.select2-selection__arrow' );
        await page.waitForSelector( 'span.select2-search.select2-search--dropdown > input' );
        await page.click ( 'span.select2-search.select2-search--dropdown > input' );
        await page.type ( 'span.select2-search.select2-search--dropdown > input', 'Times' );
        await page.keyboard.press('Enter');
        await page.click( '#elementor-panel-saver-button-publish-label' );
    });
});
