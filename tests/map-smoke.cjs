const { chromium, devices } = require('playwright');
(async () => {
 const browser=await chromium.launch({headless:true,args:['--enable-webgl','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
 const page=await browser.newPage({...devices['Pixel 7'],ignoreHTTPSErrors:true});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8765/map3d.html',{waitUntil:'domcontentloaded'});
 await page.waitForTimeout(18000);
 const canvas=page.locator('.maplibregl-canvas');
 if(!await canvas.count() || !await canvas.isVisible()) throw Error('Map canvas not visible; errors: '+errors.join('; '));
 await page.locator('[data-era="1659"]').click();
 if(!await page.locator('[data-era="1659"]').getAttribute('aria-pressed')==='true') throw Error('Era selection not applied');
 await page.getByText('स्वराज्याचा विस्तार',{exact:true}).first().click();
 if(!await page.locator('#fort-name').textContent().then(s=>s.includes('१६५९'))) throw Error('Extent year out of sync');
 await page.screenshot({path:'map-android.png',fullPage:true});
 await browser.close();
 console.log('Android map smoke test passed');
})().catch(e=>{console.error(e);process.exit(1)});