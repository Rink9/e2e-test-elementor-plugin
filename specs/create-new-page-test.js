import {
    visitAdminPage,
} from '@wordpress/e2e-test-utils';
import { 
    scrollToBottom,
    isElementExist,
 } from '../utils/helpers';

describe( 'Create new page', () => {
    // it( 'should create a page and edit with elementor', async () => {
    //     await visitAdminPage( '/' );
    //     await page.setViewport( { width: 1366, height: 768 } );
    //     await page.waitForSelector( '#menu-pages', { visible: true } );
    //     await page.click( '#menu-pages' );
    //     await page.waitForSelector( '.page-title-action', { visible: true } );
    //     await page.click( '.page-title-action' );
    //     await page.waitForSelector( '.editor-post-title__input', { visible: true } );
    //     await page.type( '.editor-post-title__input', 'Page for elementor' );
    //     await page.click( '.editor-post-publish-panel__toggle' );
    //     await page.click( '.editor-post-publish-button' );
    //     await page.waitForSelector( '.components-snackbar', { visible: true } );
    //     await page.click( '#elementor-switch-mode-button' );
    //     await page.waitForSelector( '#elementor-panel-header-title', { visible: true } );
    //     expect( await isElementExist( "#elementor-panel-header-title" ) ).toBe( true );
    // });

    // it( 'should create a page from getting started', async () => {
    //     await visitAdminPage( '/' );
    //     await page.setViewport( { width: 1366, height: 768 } );
    //     await page.waitForSelector( '#toplevel_page_elementor', { visible: true } );
    //     await page.click( '#toplevel_page_elementor' );
    //     await page.waitForSelector( '#toplevel_page_elementor > ul > li:nth-child(6) > a', { visible: true } );
    //     await page.click( '#toplevel_page_elementor > ul > li:nth-child(6) > a' );
    //     scrollToBottom();
    //     await page.click( 'div.e-getting-started__actions.e-getting-started__content--narrow > a.button.button-primary.button-hero' );
    //     await page.waitForSelector( '#elementor-panel-header-title', { visible: true } );
    //     expect( await isElementExist( "#elementor-panel-header-title" ) ).toBe( true );
    // });

    it( 'should customize elementor page', async () => {
        await visitAdminPage( '/' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#toplevel_page_elementor', { visible: true } );
        await page.click( '#toplevel_page_elementor' );
        await page.waitForSelector( '#toplevel_page_elementor > ul > li:nth-child(6) > a', { visible: true } );
        await page.click( '#toplevel_page_elementor > ul > li:nth-child(6) > a' );
        scrollToBottom();
        await page.click( 'div.e-getting-started__actions.e-getting-started__content--narrow > a.button.button-primary.button-hero' );
        await page.waitForSelector( '#elementor-panel-elements-search-input', { visible: true } );
        await page.type( '#elementor-panel-elements-search-input', 'Inner section' );
        await page.waitForSelector( '#elementor-panel-elements > div > div > div.elementor-element-title-wrapper', { visible: true } );
        await page.setViewport( { width: 1366, height: 768 } );
        // dragging an elementor widget and dropping on layout box
        const dragDrop = await page.$( '#elementor-panel-elements > div > div > div.elementor-element-title-wrapper' );
        const box = await dragDrop.boundingBox();
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();  
        await page.mouse.move( 258, 614); // move to (x, y) coordinates
        await page.mouse.up();
        // //expect( await isElementExist( '.elementor-container.elementor-column-gap-default.ui-sortable' ) ).toBe( true );
        await jestPuppeteer.debug();

    });
});
