(()=>{'use strict';
const routeButton=document.querySelector('.home .enter[data-go]');
if(routeButton){routeButton.dataset.go='book';routeButton.innerHTML='ग्रंथप्रवेश करा <span aria-hidden="true">↗</span>';routeButton.setAttribute('aria-label','ग्रंथप्रवेश उघडा');}
const timeline=document.getElementById('timeline');
if(timeline){
  timeline.innerHTML='<p class="eyebrow">दालन ०३ / कालक्रम</p><h2 id="timeline-title">शिवकालपट</h2><p class="lead">निवडक घटनांचा कालक्रम. तारीख जिथे चर्चेचा विषय आहे तिथे तो स्पष्ट दाखवला आहे; ही संपूर्ण कालरेषा नाही.</p><div class="timeline-legend" aria-label="दिनांक स्थिती"><span><i class="legend-dot"></i> संदर्भग्रंथातील दिनांक</span><span><i class="legend-dot debated"></i> दिनांक / कालगणनेत मतभेद</span></div><ol class="chronology" aria-label="निवडक शिवकालीन घटना">'+[
    {date:'१९ फेब्रुवारी १६३०',title:'शिवनेरी येथे जन्म',body:'मराठी विश्वकोश हा दिनांक जेधे शकावली, शिवभारत आणि जन्मपत्रिकांच्या आधारे नोंदवतो; काही बखरींमध्ये १६२७ ची परंपरा आढळते. म्हणून दिनांकासोबत मतभेदही जतन केले आहेत.',status:'तिथीविषयक मतभेद',url:'https://vishwakosh.marathi.gov.in/33539/',source:'मराठी विश्वकोश · शिवाजी, छत्रपति'},
    {date:'१६४६ च्या सुमारास',title:'तोरणा / प्रचंडगड',body:'मराठी विश्वकोशातील प्रचंडगड नोंद शिवाजी महाराजांनी हा किल्ला १६४६ च्या सुमारास घेतल्याचे सांगते. “सुमारास” हीच स्रोताची अचूकता येथे राखली आहे.',status:'सुमाराचा दिनांक',url:'https://vishwakosh.marathi.gov.in/27247/',source:'मराठी विश्वकोश · प्रचंडगड'},
    {date:'१६५६',title:'जावळी आणि प्रतापगडाची उभारणी',body:'शिवाजी महाराजांच्या चरित्रलेखानुसार जावळी ताब्यात आल्यानंतर प्रतापगड बांधण्याची आज्ञा देण्यात आली. या नोंदीत घटनेचा वर्षस्तरावरील कालक्रम दिला आहे.',status:'वर्षस्तरावरील नोंद',url:'https://vishwakosh.marathi.gov.in/33539/',source:'मराठी विश्वकोश · शिवाजी, छत्रपति'},
    {date:'१० नोव्हेंबर १६५९',title:'प्रतापगडाजवळ शिवाजी महाराज–अफझलखान भेट',body:'मराठी विश्वकोश भेटीचा दिनांक १० नोव्हेंबर १६५९ देतो. भेटीतील संवाद आणि तपशिलांबाबत बखरी व उत्तरकालीन कथनांचे स्वतंत्र परीक्षण आवश्यक आहे.',status:'घटना; तपशील स्रोताधीन',url:'https://vishwakosh.marathi.gov.in/33539/',source:'मराठी विश्वकोश · शिवाजी, छत्रपति'},
    {date:'६ जून १६७४',title:'रायगडावर राज्याभिषेक',body:'आकाशवाणीच्या वृत्तनोंदीत राज्याभिषेकाचा दिनांक ६ जून १६७४ दिला आहे. राज्याभिषेकविधींचे तपशील स्वतंत्र स्रोत-नोंदींसह पुढे जोडायचे आहेत.',status:'संदर्भदिनांक',url:'https://newsonair.gov.in/maharashtra-celebrates-353rd-coronation-anniversary-of-chhatrapati-shivaji-maharaj/',source:'आकाशवाणी · राज्याभिषेक दिन'},
    {date:'१६८० · एप्रिल',title:'रायगडावर निधन',body:'मराठी विश्वकोशाच्या शिवाजी चरित्रलेखात ३ एप्रिल, तर “मराठा अंमल” नोंदीत ४ एप्रिल दिली आहे. प्राथमिक दिनदर्शिका-संदर्भ तपासेपर्यंत हा फरक उघड ठेवला आहे.',status:'दिनांकात स्रोतभेद',url:'https://vishwakosh.marathi.gov.in/33539/',source:'मराठी विश्वकोश · शिवाजी, छत्रपति'}
  ].map((e,i)=>'<li class="chronology-item"><span class="timeline-marker" aria-hidden="true"></span><article><p class="timeline-date">'+e.date+'</p><h3>'+e.title+'</h3><p>'+e.body+'</p><p class="timeline-status">'+e.status+'</p><a href="'+e.url+'" target="_blank" rel="noopener noreferrer">'+e.source+' ↗</a></article></li>').join('')+'</ol><p class="editorial-note"><strong>संपादकीय नोंद:</strong> हा कालपट निवडक संदर्भग्रंथांवर आधारित आहे. प्राथमिक साधनांचा पृष्ठनिहाय तुलनात्मक संदर्भ जोडला जाईपर्यंत याला अंतिम प्रमाणित कालरेषा समजू नये.</p><div class="actions"><button data-go="book">ग्रंथप्रवेशाकडे परत जा →</button></div>';
}
const archive=document.getElementById('archive');
if(archive&&!document.getElementById('reference-shelf')){
 const shelf=document.createElement('section');shelf.id='reference-shelf';shelf.className='reference-shelf';shelf.setAttribute('aria-labelledby','reference-shelf-title');
 shelf.innerHTML='<h3 id="reference-shelf-title">वाचनासाठी संदर्भ-दुवे</h3><p>खालील दुवे प्रकाशित संदर्भनोंदींकडे नेतात. हे प्राथमिक दस्तऐवजांचे डिजिटल प्रतिरूप नाहीत; प्रत्येक दाव्यासाठी मूळ आवृत्ती आणि पृष्ठ तपासणे आवश्यक आहे.</p><ul>'+[
  ['शिवाजी, छत्रपति','जन्मदिनांकातील मतभेद, शिवनेरी, शहाजी-जिजाबाई आणि निवडक घटनांचा संदर्भ.','https://vishwakosh.marathi.gov.in/33539/'],
  ['शहाजी','शहाजीराजांच्या कारकिर्दीवरील मराठी विश्वकोश नोंद.','https://vishwakosh.marathi.gov.in/33383/'],
  ['प्रचंडगड','तोरणा / प्रचंडगड आणि १६४६ च्या सुमारास ताब्याची नोंद.','https://vishwakosh.marathi.gov.in/27247/'],
  ['प्रतापगड','किल्ल्याची भौगोलिक व ऐतिहासिक ओळख.','https://vishwakosh.marathi.gov.in/27260/'],
  ['Shivaji and His Times','जदुनाथ सरकार यांच्या १९२० च्या ग्रंथाची सार्वजनिक डिजिटल आवृत्ती; आधुनिक दुय्यम इतिहासलेखन.','https://en.wikisource.org/wiki/Shivaji_and_His_Times']
 ].map(x=>'<li><a href="'+x[2]+'" target="_blank" rel="noopener noreferrer"><strong>'+x[0]+' ↗</strong><span>'+x[1]+'</span></a></li>').join('')+'</ul><p class="editorial-note">संदर्भ-दुवा उघडल्याने त्यातील प्रत्येक विधान स्वतंत्रपणे प्रमाणित झाले असे होत नाही. हस्तलिखितातील दाव्यांना आवृत्ती, पृष्ठ आणि स्रोतप्रकार जोडणे पुढील संपादकीय काम आहे.</p>';
 const grid=document.getElementById('source-grid');if(grid)grid.after(shelf);else archive.appendChild(shelf);
}
document.addEventListener('click',event=>{const button=event.target.closest('#timeline .actions [data-go]');if(button)location.hash='#'+button.dataset.go;});
const style=document.createElement('style');style.textContent=`
#timeline .timeline-legend{display:flex;flex-wrap:wrap;gap:16px;margin:22px 0;color:#685b4b;font-size:13px}
#timeline .timeline-legend span{display:flex;align-items:center;gap:7px}
#timeline .legend-dot,.timeline-marker{display:inline-block;width:10px;height:10px;border-radius:50%;background:#7a343b;border:2px solid #f6ead2;box-shadow:0 0 0 1px #7a343b}
#timeline .legend-dot.debated{background:#bd8e42;box-shadow:0 0 0 1px #bd8e42}
#timeline .chronology{list-style:none;max-width:850px;padding:0 0 0 26px;margin:26px 0 22px;border-left:1px solid #b89a69}
#timeline .chronology-item{position:relative;padding:0 0 25px 24px}
#timeline .chronology-item:last-child{padding-bottom:0}
#timeline .timeline-marker{position:absolute;left:-32px;top:6px}
#timeline .chronology-item:nth-child(1) .timeline-marker,#timeline .chronology-item:nth-child(6) .timeline-marker{background:#bd8e42;box-shadow:0 0 0 1px #bd8e42}
#timeline .chronology-item article{background:#fbf5e8;border:1px solid #d3c09b;padding:19px 22px}
#timeline .timeline-date{font-weight:700;color:#77353b;letter-spacing:.3px;margin:0 0 5px}
#timeline .chronology h3{font:600 22px 'Noto Serif Devanagari',serif;color:#4d302a;margin:4px 0 10px}
#timeline .chronology article>p:not(.timeline-date):not(.timeline-status){line-height:1.8;color:#665b4e}
#timeline .timeline-status{font-size:12px;font-weight:700;color:#805b27;background:#f2e5c9;padding:6px 9px;display:inline-block}
#timeline .chronology a,.reference-shelf a{color:#71343b}
.editorial-note{max-width:850px;line-height:1.75;color:#705d46;background:#f3e8d2;border-left:3px solid #b58b4d;padding:13px 16px}
.reference-shelf{max-width:850px;margin:26px 0 16px;padding:20px;background:#fbf5e8;border:1px solid #cdb994}
.reference-shelf h3{font:600 24px 'Noto Serif Devanagari',serif;color:#71343b;margin:0 0 10px}
.reference-shelf>p{line-height:1.7;color:#665b4e}
.reference-shelf ul{list-style:none;padding:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.reference-shelf li a{height:100%;display:flex;flex-direction:column;gap:7px;padding:13px;background:#f5ead4;border:1px solid #d4c19d;text-decoration:none}
.reference-shelf li a span{font-size:13px;line-height:1.65;color:#65594b}
@media(max-width:600px){#timeline .chronology{padding-left:19px;margin-left:5px}#timeline .chronology-item{padding-left:16px}#timeline .timeline-marker{left:-25px}.reference-shelf ul{grid-template-columns:1fr}}
`;document.head.appendChild(style);

const bookSection=document.getElementById('book');const reader=bookSection?.querySelector('#reader-pages'),tocNav=bookSection?.querySelector('.reader-index'),pagination=bookSection?.querySelector('.reader-pagination');
const openingAddenda={
'हा ग्रंथ का वाचावा?':'<p>या ग्रंथाचा केंद्रबिंदू एका व्यक्तीची स्तुती करणे किंवा एका घटनेत संपूर्ण इतिहास बंदिस्त करणे नाही. स्वराज्याची उभारणी समजण्यासाठी राज्यकारभार, किल्ले, स्थानिक समाज, नातेसंबंध आणि समकालीन सत्तांतील संघर्ष यांचा परस्पर संबंध पाहावा लागतो.</p><p>म्हणून प्रत्येक अध्यायात कथनाबरोबर स्रोताचा प्रकार आणि त्याची मर्यादा दिली जाईल. इतिहासातील रिकामी जागा कल्पनेने भरली जाणार नाही; प्रश्न अनुत्तरित असतील तर ते तसेच नोंदवले जातील.</p>',
'प्रस्तावना':'<p>स्रोतांची तुलना करताना एकाच घटनेविषयीच्या वेगवेगळ्या नोंदी वेगळ्या ठेवणे आवश्यक आहे. शकावली कालक्रमासाठी मदत करू शकते; बखर घटना सांगते पण तिचा लेखनकाळ आणि आश्रय तपासावा लागतो; पत्राचा मजकूर वापरताना मूळ प्रत, संपादन आणि दिनांक समजून घ्यावा लागतो.</p><p>या आवृत्तीत प्रत्येक दावा क्रमशः तपासला जाईल. संदर्भग्रंथातील पान क्रमांक न मिळाल्यास तो बनवून दिला जाणार नाही; उपलब्ध दुय्यम संदर्भाला प्राथमिक पुरावा म्हणून दाखवले जाणार नाही.</p>',
'भोसले घराणे आणि वंशवेल':'<p>मराठी विश्वकोशाच्या घराणे-नोंदीनुसार बाबाजी भोसले हे या घराण्यातील पहिले ज्ञात पुरुष; त्यांचे पुत्र मालोजी आणि विठोजी होते. मालोजींचे पुत्र शहाजी आणि शरीफजी अशी नोंद दिली आहे. ही माहिती घराण्याच्या ज्ञात ऐतिहासिक टप्प्याची ओळख देते; त्यापूर्वीच्या सर्व पिढ्या सिद्ध करते असा तिचा अर्थ नाही.</p><p>नोंद शिसोदे-भोसले संबंधाचा स्वतंत्र ऐतिहासिक पुरावा नसल्याचेही सांगते. म्हणून वंशवेलीतील रिकाम्या जागा दंतकथा किंवा प्रतिष्ठेच्या परंपरेवरून भरल्या जाणार नाहीत. <a href="https://vishwakosh.marathi.gov.in/28254/" target="_blank" rel="noopener noreferrer">मराठी विश्वकोश · भोसले घराणे ↗</a></p>',
'जाधव घराणे आणि वंशवेल':'<p>सिंदखेडराजा आणि जाधव घराण्याच्या संदर्भात लखुजी जाधवराव हे जिजाबाईंचे वडील आणि शिवाजी महाराजांचे मातुल आजोबा म्हणून येतात. उपलब्ध परिचयात्मक नोंद त्यांच्या निजामशाही आणि मुघल सेवांतील बदलत्या संबंधांचा उल्लेख करते; अशा बदलांना त्या काळच्या सत्तासंघर्षाच्या संदर्भातच वाचणे योग्य ठरते.</p><p>ही निवडक नातेसंबंधांची आकृती आहे, संपूर्ण जाधव वंशावळ नाही. स्मारकावरील लेख किंवा शिलालेखाचा प्रत्यक्ष मजकूर व आवृत्ती तपासल्यावरच इतर पिढ्या जोडल्या जातील. <a href="https://vishwakosh.marathi.gov.in/25765/" target="_blank" rel="noopener noreferrer">मराठी विश्वकोश · सिंदखेड राजा ↗</a></p>',
'शहाजीराजे आणि जिजाऊसाहेब':'<p>मराठी विश्वकोशाच्या जिजाबाई नोंदीत त्यांचा जन्म सिंदखेडच्या सरदारकुलात, वडील लखुजी जाधव, आणि शहाजीराजांशी विवाह साधारण १६०९ च्या सुमारास झाल्याचे नमूद आहे. विवाहदिनांकासारखी नोंद “सुमारास” म्हणूनच वाचली पाहिजे.</p><p>शहाजीराजांच्या कारकीर्दीचा स्वतंत्र परिचय आणि जिजाबाईंच्या जीवनावरील नोंदी पुढील लेखनासाठी सुरुवातीचे दुय्यम संदर्भ आहेत. लोकप्रिय संवाद किंवा प्रसंगांना समकालीन पुरावा सापडल्याशिवाय ऐतिहासिक तथ्य मानले जाणार नाही. <a href="https://vishwakosh.marathi.gov.in/33383/" target="_blank" rel="noopener noreferrer">शहाजी ↗</a> · <a href="https://vishwakosh.marathi.gov.in/17124/" target="_blank" rel="noopener noreferrer">जिजाबाई ↗</a></p>',
'शिवजन्मापूर्वीचा दख्खन':'<p>दख्खनच्या राजकीय नकाशात निजामशाही, आदिलशाही आणि कुतुबशाही यांच्यासह मुघल विस्ताराचा प्रभाव होता. सरदारांची सेवा, जहागिरी, किल्ल्यांचे नियंत्रण आणि स्थानिक अधिकार यांमुळे सत्तेचे संबंध सतत बदलत. पुढील कथनात या रचना एका सरळ “दोन पक्षांच्या” संघर्षात रूपांतरित केल्या जाणार नाहीत.</p><p>या पार्श्वभूमीचा सामाजिक इतिहास—महसूल, शेती, गावव्यवस्था, व्यापार आणि युद्धाचा लोकजीवनावर झालेला परिणाम—स्वतंत्र स्रोतांवरून अधिक विस्ताराने लिहिणे बाकी आहे. सध्याचा मजकूर त्या कामाची सुरुवात आहे.</p>'
};
function enhanceOpeningPage(){
 const article=reader?.querySelector('.reader-page');
 if(!article)return;
 const title=article.querySelector('h3')?.textContent?.trim();
 const headings=article.querySelectorAll('h3');
 headings.forEach((heading,index)=>{if(index>0&&heading.textContent.trim()===title)heading.remove();});
 const invocations=article.querySelectorAll('.invocation');
 invocations.forEach((invocation,index)=>{if(index>0)invocation.remove();});
 const html=openingAddenda[title];
 if(!html||article.dataset.addendum===title)return;
 const extra=document.createElement('div');extra.className='opening-addendum';extra.innerHTML=html;article.appendChild(extra);article.dataset.addendum=title;
}
enhanceOpeningPage();
tocNav?.addEventListener('click',()=>queueMicrotask(enhanceOpeningPage));
pagination?.addEventListener('click',()=>queueMicrotask(enhanceOpeningPage));
const addendumStyle=document.createElement('style');addendumStyle.textContent='.opening-addendum{border-top:1px solid #d7c4a1;margin-top:22px;padding-top:18px}.opening-addendum p{line-height:1.85}.opening-addendum a{color:#74343c}';document.head.appendChild(addendumStyle);
})();