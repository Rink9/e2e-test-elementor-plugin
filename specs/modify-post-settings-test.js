import {
    visitAdminPage,
} from '@wordpress/e2e-test-utils';
import { 
    scrollToBottom,
    isElementExist,
 } from '../utils/helpers';

describe( 'Modify post settings', () => {
    it( 'should update post general settings with elementor', async () => {
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
        // update post general settings
        await page.click( '#elementor-panel-footer-settings > i' );
        await page.click( '.elementor-control-media-area' );
        await page.waitForSelector( '#__attachments-view-955 > li:nth-child(4) > div' );
        await page.click( '#__attachments-view-955 > li:nth-child(4) > div' );
        await page.click( '.media-toolbar-primary.search-form > button' );
        await page.click( '#elementor-panel-saver-button-publish-label' );
    });

    it( 'should update body style settings with elementor', async () => {
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
        // update body style settings
        await page.click( '#elementor-panel-footer-settings > i' );
        await page.click( '.elementor-tab-control-style' );
        await page.click( '.elementor-control-separator-default > div > div > div > div > label:nth-child(2) > i' );
        await page.click( '#elementor-panel-page-settings-controls > div.elementor-control.elementor-control-background_color.elementor-control-type-color.elementor-group-control-background.elementor-group-control.elementor-group-control-color.elementor-label-inline.elementor-control-separator-default.e-control-color--no-value.e-control-global.elementor-control-dynamic > div > div > div > div.pickr.elementor-control-unit-1.elementor-control-tag-area > button' );
        await page.waitForSelector( 'div.pcr-app.visible' );
        await page.type( 'div.pcr-app.visible','#999CCE' );
        await page.click( '#elementor-panel-saver-button-publish-label' );
    });
    
});