import {
    visitAdminPage,
    createNewPost,
    createURL

} from '@wordpress/e2e-test-utils';
import { 
    isElementExist,
 } from '../utils/helpers';

describe( 'Preview and publish page', () => {
    it( 'should preview a page', async () => {
        await visitAdminPage( '/' );
        await createNewPost();
        await page.click( '#elementor-switch-mode-button' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#elementor-panel-header-title', { visible: true } );
        // check elementor page builder exists or not
        expect( await isElementExist( "#elementor-panel-header-title" ) ).toBe( true );
        // preview page
        await page.click( '#elementor-panel-footer-saver-preview-label > i' );
        // switch tab browser
        const postId = await page.evaluate(el => {
            const params = new Proxy(new URLSearchParams(window.location.search), 
            {
                get: (searchParams, prop) => searchParams.get(prop),
            });
            return params.post;
        } );
        const url = createURL('/')
        await page.goto(`${url}?p=${postId}&preview_id=${postId}`);
        await page.waitForSelector( '.entry-title', { visible: true } );
        // expect success preview page title element
        const titleElement = await page.$( '.entry-title' );
        const previewTitle = await titleElement.evaluate(el => el.innerHTML );
        expect(previewTitle).toBe(`Elementor #${postId}`);
    });

    it( 'should publish a page', async () => {
        await visitAdminPage( '/' );
        await createNewPost();
        await page.click( '#elementor-switch-mode-button' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#elementor-panel-header-title', { visible: true } );
        // check elementor page builder exists or not
        expect( await isElementExist( "#elementor-panel-header-title" ) ).toBe( true );
        // publish page
        await page.click( '#elementor-panel-saver-button-publish-label' );
        await page.waitForSelector( '#elementor-toast > div.dialog-buttons-wrapper.dialog-buttons-buttons-wrapper > div' );
        await page.click( '#elementor-toast > div.dialog-buttons-wrapper.dialog-buttons-buttons-wrapper > div' );
        // switch to published page tab browser
        const postId = await page.evaluate(el => {
            const params = new Proxy(new URLSearchParams(window.location.search), 
            {
                get: (searchParams, prop) => searchParams.get(prop),
            });
            return params.post;
        } );
        const url = createURL('/')
        await page.goto(`${url}elementor-${postId}`);
        await page.waitForSelector( '.entry-title', { visible: true } );
        // expect success publish page title element
        const titleElement = await page.$( '.entry-title' );
        const previewTitle = await titleElement.evaluate(el => el.innerHTML );
        expect(previewTitle).toBe(`Elementor #${postId}`);
    });

});