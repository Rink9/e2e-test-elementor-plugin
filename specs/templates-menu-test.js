import {
    visitAdminPage,
} from '@wordpress/e2e-test-utils';
import { 
    isElementExist,
 } from '../utils/helpers';

describe( 'Automate Template menu ', () => {
    it( 'should create a new page template with elementor', async () => {
        await visitAdminPage( '/' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#menu-posts-elementor_library',{ visible: true } );
        await page.click( '#menu-posts-elementor_library' );
        // add new template
        await page.waitForSelector( '.e-admin-top-bar__main-area-buttons > a:nth-child(1)' );
        await page.click( '.e-admin-top-bar__main-area-buttons > a:nth-child(1)' );
        await page.waitForSelector( '#elementor-new-template__form__template-type',{ visible: true } );
        // create new page template
        const attr = await page.$$eval("#elementor-new-template__form__template-type > option:nth-child(2)", el => el.map(x => x.getAttribute("value"))); // selecting value from the forum attributes dropdown
        await page.select( "#elementor-new-template__form__template-type", attr[0] );
        await page.keyboard.press( 'Enter')
        await page.waitForSelector( '#elementor-new-template__form__post-title',{ visible: true } );
        await page.type( '#elementor-new-template__form__post-title','Automate page template' );
        await page.click( '#elementor-new-template__form__submit' );
        await page.waitForSelector( '#elementor-panel-header-title', { visible: true } );
        expect( await isElementExist( "#elementor-panel-header-title" ) ).toBe( true );
    });

    it( 'should create a new section template with elementor', async () => {
        await visitAdminPage( '/' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#menu-posts-elementor_library',{ visible: true } );
        await page.click( '#menu-posts-elementor_library' );
        // add new template
        await page.waitForSelector( '.e-admin-top-bar__main-area-buttons > a:nth-child(1)' );
        await page.click( '.e-admin-top-bar__main-area-buttons > a:nth-child(1)' );
        await page.waitForSelector( '#elementor-new-template__form__template-type',{ visible: true } );
        // create new section template
        const attr = await page.$$eval("#elementor-new-template__form__template-type > option:nth-child(3)", el => el.map(x => x.getAttribute("value"))); // selecting value from the forum attributes dropdown
        await page.select( "#elementor-new-template__form__template-type", attr[0] );
        await page.keyboard.press( 'Enter')
        await page.waitForSelector( '#elementor-new-template__form__post-title',{ visible: true } );
        await page.type( '#elementor-new-template__form__post-title','Automate section template' );
        await page.click( '#elementor-new-template__form__submit' );
        await page.waitForSelector( '#elementor-panel-header-title', { visible: true } );
        expect( await isElementExist( "#elementor-panel-header-title" ) ).toBe( true );
    });

    it( 'should create a new landing page template with elementor', async () => {
        await visitAdminPage( '/' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#menu-posts-elementor_library',{ visible: true } );
        await page.click( '#menu-posts-elementor_library' );
        // add new template
        await page.waitForSelector( '.e-admin-top-bar__main-area-buttons > a:nth-child(1)' );
        await page.click( '.e-admin-top-bar__main-area-buttons > a:nth-child(1)' );
        await page.waitForSelector( '#elementor-new-template__form__template-type',{ visible: true } );
        // create new landing page template
        const attr = await page.$$eval("#elementor-new-template__form__template-type > option:nth-child(4)", el => el.map(x => x.getAttribute("value"))); // selecting value from the forum attributes dropdown
        await page.select( "#elementor-new-template__form__template-type", attr[0] );
        await page.keyboard.press( 'Enter')
        await page.waitForSelector( '#elementor-new-template__form__post-title',{ visible: true } );
        await page.type( '#elementor-new-template__form__post-title','Automate landing page template' );
        await page.click( '#elementor-new-template__form__submit' );
        await page.waitForSelector( '#elementor-panel-header-title', { visible: true } );
        expect( await isElementExist( "#elementor-panel-header-title" ) ).toBe( true );
    });

    it( 'should create a new template category with elementor', async () => {
        await visitAdminPage( '/' );
        await page.setViewport( { width: 1366, height: 768 } );
        await page.waitForSelector( '#menu-posts-elementor_library',{ visible: true } );
        await page.hover( '#menu-posts-elementor_library' );
        // add new template category
        await page.waitForSelector( '#menu-posts-elementor_library > ul > li:nth-child(8) > a' );
        await page.click( '#menu-posts-elementor_library > ul > li:nth-child(8) > a' );
        await page.waitForSelector( '#tag-name',{ visible: true } );
        await page.type( '#tag-name','Automate category' );
        await page.type( '#tag-slug', 'Technology' );
        await page.click( '#submit' );
    });

});