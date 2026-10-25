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
document.addEventListener('click',event=>{const button=event.target.closest('#timeline .actions [data-go]');if(button)location.hash='#'+button.dataset.go;});\nconst style=document.createElement('style');style.textContent=`
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
})();