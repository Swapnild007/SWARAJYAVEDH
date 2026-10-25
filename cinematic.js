(()=>{'use strict';
const book=document.getElementById('book');
const index=book?.querySelector('.reader-index');
const pages=book?.querySelector('#reader-pages');
const pagination=book?.querySelector('.reader-pagination');
if(!book||!index||!pages||!pagination)return;
const spread=document.createElement('div');spread.className='book-spread';
const left=document.createElement('aside');left.className='book-leftpage';left.setAttribute('aria-label','वाचन नोंद');
left.innerHTML='<p class="left-kicker">SWARAJYAVEDH · ग्रंथप्रवेश</p><h3 class="left-title">इतिहासाच्या पानांत</h3><div class="left-rule"></div><p class="left-copy">घटना, काळ आणि स्रोत यांना एकत्र वाचण्याचा प्रयत्न. प्रत्येक पान हा संशोधनाधीन संपादकीय मसुदा आहे.</p><p class="left-note">प्रसिद्ध स्रोतांतील मतभेद जिथे दिसतात तिथे ते जतन केले आहेत. नोंद अपुरी असल्यास ती स्पष्टपणे सांगितली आहे.</p><span class="left-folio">✦ <span>०१</span></span>';
index.after(spread);spread.append(left,pages);pagination.classList.add('book-pagination');
const title=left.querySelector('.left-title'),copy=left.querySelector('.left-copy'),folio=left.querySelector('.left-folio span');
let turn='next',pendingFront=null,animationTimer=null;
function clonePage(source){
 const clone=source.cloneNode(true);
 clone.removeAttribute('id');
 clone.querySelectorAll('[id]').forEach(node=>node.removeAttribute('id'));
 clone.querySelectorAll('a').forEach(link=>link.setAttribute('tabindex','-1'));
 return clone;
}
function syncLeft(){
 const article=pages.querySelector('.reader-page');
 if(!article)return;
 const heading=article.querySelector('h3')?.textContent?.trim()||'ग्रंथप्रवेश';
 const count=book.querySelector('#reader-count')?.textContent||'';
 title.textContent=heading;
 folio.textContent=(count.match(/\d+/)?.[0]||'1').padStart(2,'0');
 copy.textContent=heading==='हा ग्रंथ का वाचावा?'?'या ग्रंथाचा हेतू आणि वाचनाची पद्धत. इतिहासाला गौरवकथेपुरते न ठेवता काळ आणि स्रोत यांच्या संदर्भात पाहण्याची सुरुवात.':heading==='प्रस्तावना'?'या ग्रंथातील स्रोत, लेखनपद्धती आणि संपादकीय मर्यादांची नोंद.':heading==='शिवजन्मापूर्वीचा दख्खन'?'स्वराज्याच्या उदयापूर्वी दख्खनमधील बदलत्या सत्तासंबंधांचा संक्षिप्त परिचय.':'या पानातील व्यक्ती आणि घटनांचा परिचय; स्रोतांची मर्यादा स्पष्ट ठेवून पुढील वाचनासाठी संदर्भ.';
}
function remember(direction){
 const current=pages.querySelector('.reader-page');
 if(!current)return;
 turn=direction;
 pendingFront=clonePage(current);
}
function turnLeaf(frontSource,backSource,direction){
 if(!frontSource||!backSource)return;
 pages.querySelector('.page-turn-leaf')?.remove();
 const leaf=document.createElement('div');
 leaf.className='page-turn-leaf '+(direction==='prev'?'reverse':'forward');
 leaf.setAttribute('aria-hidden','true');
 const front=document.createElement('div'),back=document.createElement('div');
 front.className='leaf-face leaf-front';back.className='leaf-face leaf-back';
 front.append(clonePage(frontSource));back.append(clonePage(backSource));
 leaf.append(front,back);pages.append(leaf);
 void leaf.offsetWidth;
 requestAnimationFrame(()=>leaf.classList.add('is-turning'));
 clearTimeout(animationTimer);
 animationTimer=setTimeout(()=>leaf.remove(),950);
 leaf.addEventListener('transitionend',()=>leaf.remove(),{once:true});
}
syncLeft();
const observer=new MutationObserver(()=>{
 const article=pages.querySelector('.reader-page');
 if(!article)return;
 syncLeft();
 const old=pendingFront;
 pendingFront=null;
 if(old)turnLeaf(old,article,turn);
});
observer.observe(pages,{childList:true});
pagination.addEventListener('click',event=>{
 const button=event.target.closest('#reader-prev,#reader-next');
 if(button&&!button.disabled)remember(button.id==='reader-next'?'next':'prev');
},true);
index.addEventListener('click',event=>{
 const button=event.target.closest('[data-reader-page]');
 if(button)remember(Number(button.dataset.readerPage)>Number((book.querySelector('#reader-count')?.textContent.match(/\d+/)||['1'])[0])-1?'next':'prev');
},true);
let startX=0,startY=0;
pages.addEventListener('touchstart',event=>{const touch=event.changedTouches[0];startX=touch.clientX;startY=touch.clientY;},{passive:true});
pages.addEventListener('touchend',event=>{const touch=event.changedTouches[0],dx=touch.clientX-startX,dy=touch.clientY-startY;if(Math.abs(dx)<75||Math.abs(dx)<Math.abs(dy)*1.35)return;const button=book.querySelector(dx<0?'#reader-next':'#reader-prev');if(button&&!button.disabled)button.click();},{passive:true});
document.addEventListener('keydown',event=>{
 if(book.hidden||event.altKey||event.ctrlKey||event.metaKey)return;
 if(event.target.matches('input,textarea,select,[contenteditable="true"]'))return;
 if(event.key==='ArrowRight'){const b=book.querySelector('#reader-next');if(b&&!b.disabled)b.click();}
 if(event.key==='ArrowLeft'){const b=book.querySelector('#reader-prev');if(b&&!b.disabled)b.click();}
});
})();
