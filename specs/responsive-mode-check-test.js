import {
    visitAdminPage,
} from '@wordpress/e2e-test-utils';
import { 
    scrollToBottom,
    isElementExist,
 } from '../utils/helpers';

describe( 'Responsive mode check', () => {
    it( 'should view page on Desktop, Mobile, Tablet with elementor', async () => {
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
        // responsive check
        await page.waitForSelector( '#elementor-panel-footer-responsive > i' );
        await page.click( '#elementor-panel-footer-responsive > i' );
        // view from Tablet
        await page.click( '#e-responsive-bar-switcher__option-tablet > i' );
        // view from Mobile
        await page.click ('#e-responsive-bar-switcher__option-mobile > i');
        // view from Desktop
        await page.click( '#e-responsive-bar-switcher__option-desktop > i')
    });

});