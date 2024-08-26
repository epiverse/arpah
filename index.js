console.log(`index.js loaded ${Date()}`);

(async function(){
    arpah = (await import('https://epiverse.github.io/arpah/arpah.mjs')).arpah
    // development
    // arpah = (await import('./arpah.mjs')).arpah
    // application code here
})()