(()=>{'use strict';
const book=window.SWARAJYA_BOOK;
const byId=id=>document.getElementById(id);
const cover=byId('cover'),reader=byId('reader'),rightPage=byId('right-page'),leftPage=byId('left-page');
const spread=byId('book-spread'),turnLeaf=byId('turn-leaf'),contentsDialog=byId('contents-dialog'),sourcesDialog=byId('sources-dialog');
const flatPages=book.sections.flatMap((section,sectionIndex)=>section.pages.map((page,pageIndex)=>({...page,sectionId:section.id,sectionTitle:section.title,sectionIndex,pageIndex,sectionPageCount:section.pages.length})));
const storedPage=()=>{try{return Math.max(0,Math.min(flatPages.length-1,Number(localStorage.getItem('swarajyavedh-page')||0)||0))}catch{return 0}};
let current=storedPage(),turnTimeout=0,swipeStart=null,suppressTapUntil=0;
const digits="०१२३४५६७८९";
const mrNumber=value=>String(value).replace(/\d/g,d=>digits[Number(d)]);
const escapeHtml=value=>String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const allSources=new Map(book.sources.map(source=>[source.id,source]));
function pageMarkup(page,index,mirror=false){
 if(!page)return '<div class="blank-page-content"><div class="blank-ornament" aria-hidden="true">श्री</div><div class="blank-title">स्वराज्यवेध</div><div class="blank-caption">ग्रंथाचा प्रारंभ</div></div>';
 const refs=(page.sources||[]).map(id=>allSources.get(id)).filter(Boolean);
 const tree=page.tree?'<section class="genealogy" aria-label="'+escapeHtml(page.tree.title)+'"><h3 class="genealogy-title">'+escapeHtml(page.tree.title)+'</h3>'+page.tree.rows.map((row,i)=>'<div class="generation" aria-label="पिढी '+mrNumber(i+1)+'">'+row.map(person=>'<span class="person-node">'+escapeHtml(person)+'</span>').join('')+'</div>').join('')+'<p class="genealogy-note">'+escapeHtml(page.tree.sideNote)+'</p></section>':'';
 const paragraphs=page.paragraphs.map(text=>'<p>'+escapeHtml(text)+'</p>').join('');
 const note=page.note?'<aside class="paper-note"><span class="note-mark" aria-hidden="true">✦</span><div><strong>'+escapeHtml(page.note)+'</strong><p>'+escapeHtml(page.noteText||'')+'</p></div></aside>':'';
 const links=refs.length?'<nav class="paper-sources" aria-label="या पानाचे संदर्भ">'+refs.map(source=>'<a href="'+source.url+'" target="_blank" rel="noopener noreferrer">'+escapeHtml(source.title)+' <span aria-hidden="true">↗</span></a>').join('')+'</nav>':'';
 return '<div class="paper-content '+(mirror?'paper-mirror':'')+'"><p class="paper-kicker">'+escapeHtml(page.kicker)+'</p><h2 class="paper-title">'+escapeHtml(page.title)+'</h2><div class="paper-paragraphs">'+paragraphs+'</div>'+tree+note+links+'<div class="paper-folio" aria-label="पान '+mrNumber(index+1)+'">'+mrNumber(index+1)+'</div></div>';
}
function cleanLeaf(){
 turnLeaf.classList.remove('turning','next-turn','previous-turn','backwards');
 turnLeaf.querySelector('.turn-front').innerHTML='';
 turnLeaf.querySelector('.turn-back').innerHTML='';
 turnLeaf.hidden=true;
}
function remember(){
 try{localStorage.setItem('swarajyavedh-page',String(current))}catch{}
 const resume=byId('resume-reading');
 if(resume&&current>0){resume.hidden=false}
}
function render(){
 const page=flatPages[current],previous=flatPages[current-1];
 rightPage.classList.toggle('paper-blank',false);
 leftPage.classList.toggle('paper-blank',!previous);
 rightPage.innerHTML=pageMarkup(page,current);
 leftPage.innerHTML=pageMarkup(previous,current-1,true);
 byId('section-label').textContent=page.sectionTitle;
 byId('folio-top').textContent='पान '+mrNumber(current+1)+' · '+mrNumber(flatPages.length);
 byId('folio-current').textContent=mrNumber(current+1);
 byId('folio-total').textContent=mrNumber(flatPages.length);
 byId('progress-fill').style.width=((current+1)/flatPages.length*100)+'%';
 const prev=byId('previous-page'),next=byId('next-page'),edgePrev=byId('page-edge-prev'),edgeNext=byId('page-edge-next');
 prev.disabled=current===0;next.disabled=current===flatPages.length-1;
 edgePrev.disabled=current===0;edgeNext.disabled=current===flatPages.length-1;
 document.querySelectorAll('.contents-entry').forEach(button=>{
  const active=Number(button.dataset.page)===current;
  button.toggleAttribute('aria-current',active);
  if(active)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');
 });
 remember();
}
function animateTurn(oldMarkup,newMarkup,direction){
 cleanLeaf();
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 turnLeaf.querySelector('.turn-front').innerHTML=oldMarkup;
 turnLeaf.querySelector('.turn-back').innerHTML=newMarkup;
 turnLeaf.classList.add(direction==='previous'?'previous-turn':'next-turn');
 turnLeaf.hidden=false;
 void turnLeaf.offsetWidth;
 requestAnimationFrame(()=>turnLeaf.classList.add('turning'));
 clearTimeout(turnTimeout);
 turnTimeout=setTimeout(cleanLeaf,1050);
}
function goTo(index,direction){
 const target=Math.max(0,Math.min(flatPages.length-1,index));
 if(target===current)return;
 const oldMarkup=rightPage.innerHTML;
 const inferred=direction||(target<current?'previous':'next');
 current=target;
 render();
 const newMarkup=rightPage.innerHTML;
 animateTurn(oldMarkup,newMarkup,inferred);
}
function enterReader(pageIndex=0){
 current=Math.max(0,Math.min(flatPages.length-1,pageIndex));
 cover.hidden=true;reader.hidden=false;render();
 byId('next-page').focus({preventScroll:true});
}
function showDialog(dialog){
 if(!dialog.open)dialog.showModal();
}
function closeReader(){
 cleanLeaf();reader.hidden=true;cover.hidden=false;byId('start-reading').focus({preventScroll:true});
}
function buildContents(){
 const nav=byId('contents-list');
 nav.innerHTML=book.sections.map(section=>{
  const first=flatPages.findIndex(page=>page.sectionId===section.id);
  const count=section.pages.length;
  return '<button class="contents-entry" type="button" data-page="'+first+'"><small>'+mrNumber(first+1).padStart(2,'०')+'</small><strong>'+escapeHtml(section.title)+'</strong><span>'+mrNumber(count)+' पाने →</span></button>';
 }).join('');
 nav.addEventListener('click',event=>{
  const button=event.target.closest('[data-page]');if(!button)return;
  const target=Number(button.dataset.page),direction=target<current?'previous':'next';
  goTo(target,direction);contentsDialog.close();
 });
}
function buildSources(){
 byId('source-list').innerHTML=book.sources.map(source=>'<article class="source-card"><div class="source-card-head"><h3>'+escapeHtml(source.title)+'</h3><span class="source-type">'+escapeHtml(source.type)+'</span></div><p>'+escapeHtml(source.detail)+'</p><p class="source-status">'+escapeHtml(source.status)+'</p><a href="'+source.url+'" target="_blank" rel="noopener noreferrer">संदर्भ उघडा ↗</a></article>').join('');
}
byId('start-reading').addEventListener('click',()=>enterReader(0));
byId('resume-reading').addEventListener('click',()=>enterReader(current));
byId('cover-sources').addEventListener('click',()=>showDialog(sourcesDialog,true));
byId('close-reader').addEventListener('click',event=>{event.preventDefault();closeReader()});
byId('open-contents').addEventListener('click',()=>showDialog(contentsDialog));
byId('open-sources').addEventListener('click',()=>showDialog(sourcesDialog));
byId('previous-page').addEventListener('click',()=>goTo(current-1,'previous'));
byId('next-page').addEventListener('click',()=>goTo(current+1,'next'));
byId('page-edge-prev').addEventListener('click',()=>goTo(current-1,'previous'));
byId('page-edge-next').addEventListener('click',()=>goTo(current+1,'next'));
document.querySelectorAll('[data-close-dialog]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
[contentsDialog,sourcesDialog].forEach(dialog=>dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()}));

spread.addEventListener('pointerdown',event=>{if(event.target.closest('a,button'))return;swipeStart={x:event.clientX,y:event.clientY}});
spread.addEventListener('pointerup',event=>{
 if(!swipeStart)return;
 const dx=event.clientX-swipeStart.x,dy=event.clientY-swipeStart.y;swipeStart=null;
 if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.25){suppressTapUntil=Date.now()+450;goTo(current+(dx<0?1:-1),dx<0?'next':'previous')}
},{passive:true});
spread.addEventListener('click',event=>{
 if(Date.now()<suppressTapUntil||event.target.closest('a,button')||Math.abs(event.detail)>1)return;
 const rect=spread.getBoundingClientRect(),ratio=(event.clientX-rect.left)/rect.width;
 if(ratio>.88)goTo(current+1,'next');else if(ratio<.12)goTo(current-1,'previous');
});
document.addEventListener('keydown',event=>{
 if(reader.hidden||document.querySelector('dialog[open]'))return;
 if(event.altKey||event.ctrlKey||event.metaKey)return;
 if(event.key==='ArrowRight'){event.preventDefault();goTo(current+1,'next')}
 if(event.key==='ArrowLeft'){event.preventDefault();goTo(current-1,'previous')}
 if(event.key==='Escape')closeReader();
});
buildContents();buildSources();
if(current>0)byId('resume-reading').hidden=false;
})();
