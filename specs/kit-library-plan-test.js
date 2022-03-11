import {
    visitAdminPage,
} from '@wordpress/e2e-test-utils';

describe( 'Choose Kits from the library plan', () => {
    it( 'should preview a page', async () => {
        await visitAdminPage( '/' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#menu-posts-elementor_library',{ visible: true } );
        await page.hover( '#menu-posts-elementor_library' );
        await page.click( '#menu-posts-elementor_library > ul > li:nth-child(5) > a' );
        await page.waitForSelector( '.eps-app__main > div.eps-app__sidebar > div > div:nth-child(1) > div > div.e-kit-library__tags-filter-list-container > label:nth-child(1) > input' );
        await page.click( '.eps-app__main > div.eps-app__sidebar > div > div:nth-child(1) > div > div.e-kit-library__tags-filter-list-container > label:nth-child(1) > input' );
        await page.click( '.eps-app__main > div.e-kit-library__index-layout-container > main > div > article:nth-child(4)' );
        await page.waitForSelector( '#eps-app-header-btn-apply' );
        await page.click( '#eps-app-header-btn-apply' );
        await page.waitForSelector( '.eps-button.eps-dialog__button.eps-button--primary > span' );
        await page.click( '.eps-button.eps-dialog__button.eps-button--primary > span' );
        // expect successfull title message
        await page.waitForSelector( '.eps-app__main > main > div > div > div > div > h1', { visible: true } );
        const titleElement = await page.$( '.eps-app__main > main > div > div > div > div > h1' );
        const previewTitle = await titleElement.evaluate(el => el.innerHTML );
        expect(previewTitle).toBe('Your kit is now live on your site!');
    });
    
});