import {
    visitAdminPage,
} from '@wordpress/e2e-test-utils';
import { 
    scrollToBottom,
    isElementExist,
 } from '../utils/helpers';

describe( 'Modify Design System', () => {
    it( 'should update site identity with elementor', async () => {
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
         // update site identity
        await page.waitForSelector( '.elementor-panel-menu-item-settings-site-identity', { visible: true } );
        await page.click( '.elementor-panel-menu-item-settings-site-identity' );
        await page.waitForSelector( '#elementor-control-default-c1350', { visible: true } );
        // Clear previous input
        let clearInput = await page.$('#elementor-control-default-c1350');
        await clearInput.click({clickCount: 3});
        await clearInput.press('Backspace'); 
        // type site identity and publish
        await page.type( '#elementor-control-default-c1350', 'Test Automation for Elementor Plugin' );
        await page.click( '#elementor-panel-saver-button-publish-label' );
    });
    
    it( 'should update site background with elementor', async () => {
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
        // update site background
        await page.waitForSelector( '.elementor-panel-menu-item-settings-background', { visible: true } );
        await page.click( '.elementor-panel-menu-item-settings-background' );
        await page.click( '.elementor-label-inline.elementor-control-separator-default > div > div > div > div > label:nth-child(4) > i' );
        await page.click( '#elementor-panel-saver-button-publish-label' );
    });

});