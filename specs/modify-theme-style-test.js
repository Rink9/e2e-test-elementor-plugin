import {
    visitAdminPage,
} from '@wordpress/e2e-test-utils';
import { 
    scrollToBottom,
    isElementExist,
 } from '../utils/helpers';

describe( 'Modify Theme Style', () => {
    it( 'should update global typgraphy with elementor', async () => {
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
        await page.click( '.elementor-panel-menu-item.elementor-panel-menu-item-global-settings' );
        // Update global typography
        await page.waitForSelector( '.elementor-panel-menu-item-theme-style-typography ', { visible: true } );
        await page.click( '.elementor-panel-menu-item-theme-style-typography ' );
        await page.waitForSelector( '.elementor-control-body_typography_typography > div > div > div > label > i', { visible: true } );
        await page.click( '.elementor-control-body_typography_typography > div > div > div > label > i' );
        await page.waitForSelector( '#select2-elementor-control-default-c912-container', { visible: true } );
        await page.click( '#select2-elementor-control-default-c912-container' );
        await page.waitForSelector( '.select2-search.select2-search--dropdown > input', { visible: true } );
        await page.type ( '.select2-search.select2-search--dropdown > input', 'Times' );
        await page.keyboard.press('Enter');
        await page.click( '#elementor-panel-saver-button-publish-label' );
    });

    it( 'should update button with elementor', async () => {
        await visitAdminPage( '/' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#toplevel_page_elementor', { visible: true } );
        await page.click( '#toplevel_page_elementor' );
        await page.waitForSelector( '#toplevel_page_elementor > ul > li:nth-child(6) > a', { visible: true } );
        await page.click( '#toplevel_page_elementor > ul > li:nth-child(6) > a' );
        scrollToBottom();
        await page.click( 'div.e-getting-started__actions.e-getting-started__content--narrow > a.button.button-primary.button-hero' );
        await page.waitForSelector( '#elementor-panel-header-title', { visible: true } );
        // Check elementor page builder exists or not
        expect( await isElementExist( "#elementor-panel-header-title" ) ).toBe( true );
        // Access to site settings
        await page.waitForSelector( '#elementor-panel-header-menu-button > i', { visible: true } );
        await page.click( '#elementor-panel-header-menu-button > i' );
        await page.waitForSelector( '.elementor-panel-menu-item.elementor-panel-menu-item-global-settings', { visible: true } );
        await page.click( '.elementor-panel-menu-item.elementor-panel-menu-item-global-settings' );
        // Update button hover color
        await page.waitForSelector( '.elementor-panel-menu-item-theme-style-buttons', { visible: true } );
        await page.click( '.elementor-panel-menu-item-theme-style-buttons' );
        await page.waitForSelector( '.elementor-control-tab_button_hover',{ visible: true } );
        await page.click( '.elementor-control-tab_button_hover' );
        await page.click( '#elementor-kit-panel-content-controls > div.elementor-control.elementor-control-button_hover_text_color.elementor-control-type-color.elementor-label-inline.elementor-control-separator-default.e-control-global > div > div > div > div.pickr.elementor-control-unit-1.elementor-control-tag-area > button');
        await page.waitForSelector( 'div.pcr-app.visible' );
        await page.type( 'div.pcr-app.visible', '#FD9090' );
        await page.click( '#elementor-panel-saver-button-publish-label' );
    });

    it( 'should update images with elementor', async () => {
        await visitAdminPage( '/' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#toplevel_page_elementor', { visible: true } );
        await page.click( '#toplevel_page_elementor' );
        await page.waitForSelector( '#toplevel_page_elementor > ul > li:nth-child(6) > a', { visible: true } );
        await page.click( '#toplevel_page_elementor > ul > li:nth-child(6) > a' );
        scrollToBottom();
        await page.click( 'div.e-getting-started__actions.e-getting-started__content--narrow > a.button.button-primary.button-hero' );
        await page.waitForSelector( '#elementor-panel-header-title', { visible: true } );
        // Check elementor page builder exists or not
        expect( await isElementExist( "#elementor-panel-header-title" ) ).toBe( true );
        // Access to site settings
        await page.waitForSelector( '#elementor-panel-header-menu-button > i', { visible: true } );
        await page.click( '#elementor-panel-header-menu-button > i' );
        await page.waitForSelector( '.elementor-panel-menu-item.elementor-panel-menu-item-global-settings', { visible: true } );
        await page.click( '.elementor-panel-menu-item.elementor-panel-menu-item-global-settings' );
        // Update image border type
        await page.waitForSelector( '.elementor-panel-menu-item-theme-style-images', { visible: true } );
        await page.click( '.elementor-panel-menu-item-theme-style-images' );
        await page.click( '.elementor-control.elementor-control-image_border_border.elementor-control-type-select.elementor-group-control-border.elementor-group-control.elementor-group-control-border.elementor-label-inline.elementor-control-separator-default > div > div > div' );
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');
        await page.click( '#elementor-panel-saver-button-publish-label' );
    });

    it( 'should update form and fields with elementor', async () => {
        await visitAdminPage( '/' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#toplevel_page_elementor', { visible: true } );
        await page.click( '#toplevel_page_elementor' );
        await page.waitForSelector( '#toplevel_page_elementor > ul > li:nth-child(6) > a', { visible: true } );
        await page.click( '#toplevel_page_elementor > ul > li:nth-child(6) > a' );
        scrollToBottom();
        await page.click( 'div.e-getting-started__actions.e-getting-started__content--narrow > a.button.button-primary.button-hero' );
        await page.waitForSelector( '#elementor-panel-header-title', { visible: true } );
        // Check elementor page builder exists or not
        expect( await isElementExist( "#elementor-panel-header-title" ) ).toBe( true );
        // Access to site settings
        await page.waitForSelector( '#elementor-panel-header-menu-button > i', { visible: true } );
        await page.click( '#elementor-panel-header-menu-button > i' );
        await page.waitForSelector( '.elementor-panel-menu-item.elementor-panel-menu-item-global-settings', { visible: true } );
        await page.click( '.elementor-panel-menu-item.elementor-panel-menu-item-global-settings' );
        // Update form field box shadow
        await page.waitForSelector( '.elementor-panel-menu-item-theme-style-form-fields', { visible: true } );
        await page.click( '.elementor-panel-menu-item-theme-style-form-fields' );
        await page.click( '#elementor-kit-panel-content-controls > div.elementor-control.elementor-control-form_field_box_shadow_box_shadow_type.elementor-control-type-popover_toggle.elementor-label-inline.elementor-control-separator-default > div > div > div > label.elementor-control-popover-toggle-toggle-label.elementor-control-unit-1 > i' );
        await page.click( '#elementor-kit-panel-content-controls > div:nth-child(14) > div.elementor-control.elementor-control-form_field_box_shadow_box_shadow.elementor-control-type-box_shadow.elementor-group-control-box-shadow.elementor-group-control.elementor-group-control-box_shadow.elementor-label-inline.elementor-control-separator-default > div > div > div.elementor-control-field.elementor-color-picker-wrapper > div > div > button' );
        await page.waitForSelector( 'div.pcr-app.visible', { visible: true } );
        await page.type( 'div.pcr-app.visible','rgba(89, 45, 45, 0.5)' );
        await page.click( '#elementor-panel-saver-button-publish-label' );
    });
});
