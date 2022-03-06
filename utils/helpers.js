export function delay( time ) {
    return new Promise( function( resolve ) { 
        setTimeout( resolve, time )
    });
}

export function scrollToBottom() {
    page.evaluate( _ => {
        window.scrollBy( 0, window.innerHeight );
    });
}

export async function timesClick( element, count ) {
    for ( let step = 0; step < count; step++ ) {
        await page.click( element );
    }

}

export async function isElementExist( element ){
    if (await page.$(element) !== null) {
       return true;
    }
    return false;
}

export async function findElementPosition( element ) {
    
   await page.evaluate( _ => {
        const xPos = document.querySelector( element ).getBoundingClientRect().left;
        const yPos = document.querySelector( element ).getBoundingClientRect().top;
        return {
            xPos,yPos
        } 
    });
}