const IMG=id=>`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

const SV = [

    [
  'profile-surveys',
  '📋',
  'Profile Completion Surveys',
  'Answer eligible profile questions and surveys to help determine which research opportunities may be suitable for you.',
  3184418,
  [
    'Answer profile questions honestly',
    'Discover relevant survey opportunities',
    'Earn rewards when eligible'
  ]
],
  [
    'online-surveys',
    '📝',
    'Online Surveys',
    'Participate in available surveys and share your opinions about products, services, and brands.',
    3184418,
    ['Explore available surveys', 'Share honest opinions', 'Complete eligible surveys']
  ],
  [
    'survey-matching',
    '🎯',
    'Survey Opportunities',
    'Complete your member profile to help identify surveys that may match your interests.',
    3184291,
    ['Complete your profile', 'Find relevant opportunities', 'Check survey eligibility']
  ],
  [
    'earn-points',
    '🪙',
    'Earn Points',
    'Earn points for eligible completed surveys after the required verification.',
    574071,
    ['Complete eligible surveys', 'Track earned points', 'Review point history']
  ],
  [
    'redeem-rewards',
    '🎁',
    'Redeem Rewards',
    'Request available rewards when you meet the applicable redemption requirements.',
    1181406,
    ['Check your points balance', 'Review redemption requirements', 'Request available rewards']
  ],
  [
    'member-dashboard',
    '📊',
    'Member Dashboard',
    'Keep track of your survey activity, points balance, and reward history in one place.',
    3184339,
    ['View survey activity', 'Monitor points balance', 'Review reward history']
  ],
  [
    'member-profile',
    '👤',
    'Member Profile',
    'Manage your account details and keep your survey profile up to date.',
    3184292,
    ['Update profile information', 'Manage account details', 'Review preferences']
  ]
];

// const IN=[['🛒','Consumer & Retail'],['🏦','Banking & Finance'],['💊','Healthcare & Pharma'],['🚗','Automotive'],['📱','Technology & Telecom'],['🍽️','FMCG & Food'],['🎓','Education'],['🏗️','Real Estate']];

const IN = [
  ['✈️', 'Travel Experience', 'Tell us about your travel preferences, holiday experiences, destinations, and travel habits.', '10 min'],
  ['🎬', 'Entertainment', 'Share your views on movies, TV shows, streaming platforms, music, and games.', '10 min'],
  ['🛍️', 'Shopping Habits', 'Tell us how you shop, what influences your purchases, and which stores or websites you prefer.', '12 min'],
  ['🛒', 'Consumer Opinion', 'Give your honest opinion about products and services and earn points for eligible participation.', '14 min'],
  ['🍔', 'Food & Beverages', 'Share your food preferences, favourite brands, eating habits, and dining experiences.', '8 min'],
  ['📱', 'Technology & Apps', 'Tell us about the devices, apps, websites, and digital services you use.', '10 min'],
  ['👗', 'Fashion & Lifestyle', 'Share your clothing preferences, favourite brands, beauty routines, and lifestyle choices.', '9 min'],
  ['🏦', 'Banking & Finance', 'Share feedback about banking services, payment methods, and everyday financial products.', '12 min'],
  ['🚗', 'Automotive', 'Tell us about your driving habits, vehicle preferences, and transport experiences.', '11 min'],
  ['🏠', 'Home & Living', 'Share your opinions about household products, furniture, appliances, and home improvement.', '10 min'],
  ['💪', 'Health & Wellness', 'Share general opinions about fitness, wellness products, and healthy lifestyle habits.', '10 min'],
  ['👨‍👩‍👧', 'Family & Parenting', 'Share relevant experiences with family activities, parenting products, and everyday family needs.', '12 min'],
  ['🐾', 'Pets & Animals', 'Tell us about your pets, pet care routines, and the products you buy for them.', '8 min'],
  ['🎮', 'Gaming', 'Share your gaming preferences, favourite genres, devices, and gaming experiences.', '10 min'],
  ['📚', 'Education & Learning', 'Tell us about learning preferences, educational tools, and online courses.', '9 min'],
  ['🌱', 'Environment & Sustainability', 'Share your views on recycling, sustainable products, and environmentally friendly habits.', '10 min']
];

const nav=`<header id="hd"><div class="wrap nav">
<a href="index.html" class="logo"><i>◎</i>Galxoopinion</a>
<button class="burger" id="bg" aria-label="Menu">☰</button>
<nav class="menu" id="mn"><button class="close" id="cl" aria-label="Close">✕</button>
<a href="index.html">Home</a><a href="about.html">About</a>
<div class="dd"><a href="services.html" class="dd-t">Services <span>▾</span></a><div class="dd-list"><a href="services.html">All Services</a>${SV.map(s=>`<a href="services.html#${s[0]}">${s[1]} ${s[2]}</a>`).join('')}</div></div>
<a href="industries.html">Industries</a>
<div class="dd r"><a href="#" class="dd-t">Download <span>▾</span></a><div class="dd-list">
<a href="era-bureau-overview.pdf" download><b>1</b> Overview – Galxoopinion</a>
<a href="india-b2b-panel-book.pdf" download><b>2</b> India B2B Panel Book</a>
<a href="era-guide-research-responder.pdf" download><b>3</b> Era Guide to Research Responder</a></div></div>
<a href="contact.html">Contact</a><a href="https://dashboard.glaxoresearch.com/login" class="btn btn-p">
  join now
</a></nav></div></header><div class="ov" id="ov"></div>`;
// const foot=`<section style="padding-top:20px"><div class="wrap"><div class="cta-b"><h2>Let's Turn Your Questions Into Insights</h2><p>Tell us about your research needs and get a free proposal within 24 hours.</p><a href="contact.html" class="btn btn-p">Get a Free Quote</a></div></div></section>
// <footer><div class="wrap"><div class="fg">
// <div><a href="index.html" class="logo" style="margin-bottom:14px"><i>◎</i>Galxoopinion</a><p style="font-size:.92rem">A full-service market research company delivering reliable data and insights worldwide.</p></div>
// <div><h5>Company</h5><a href="about.html">About Us</a><a href="industries.html">Industries</a><a href="contact.html">Contact</a></div>
// <div><h5>Services</h5>${SV.slice(0,4).map(s=>`<a href="services.html#${s[0]}">${s[2]}</a>`).join('')}</div>
// <div><h5>Legal</h5><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="#">Cookies</a></div></div>
// <div class="copy">© 2026 Galxoopinion. All rights reserved.</div></div></footer>`;

// document.getElementById('hdr').outerHTML=nav;
// document.getElementById('ftr').outerHTML=foot;


const pageName = location.pathname.split('/').pop() || 'index.html';
const isHomePage = pageName === 'index.html';

const foot = `
${isHomePage ? `
<section style="padding-top:20px">
  <div class="wrap">
    <div class="cta-b">
      <h2>Your Opinion. Your Points. Your Rewards.</h2>
      <p>
        Join Galxoopinion, participate in available online surveys,
        earn points for eligible completed surveys, and redeem
        your points for available rewards.
      </p>
      <a href="services.html" class="btn btn-p">Explore Surveys</a>
    </div>
  </div>
</section>
` : ''}

<footer>
  <div class="wrap">
    <div class="fg">

      <div>
        <a href="index.html" class="logo" style="margin-bottom:14px">
          <i>◎</i>Galxoopinion
        </a>
        <p style="font-size:.92rem">
          Share your opinions through online surveys, earn points
          for eligible completions, and explore available rewards.
        </p>
      </div>

      <div>
        <h5>Company</h5>
        <a href="about.html">About Us</a>
        <a href="services.html">Available Surveys</a>
        <a href="contact.html">Contact Support</a>
      </div>

      <div>
        <h5>Rewards</h5>
        <a href="services.html#online-surveys">Online Surveys</a>
        <a href="services.html#earn-points">Earn Points</a>
        <a href="services.html#redeem-rewards">Redeem Rewards</a>
        <a href="services.html#member-dashboard">Member Dashboard</a>
      </div>

      <div>
        <h5>Legal</h5>
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms & Conditions</a>
        <a href="cookies.html">Cookie Policy</a>
      </div>

    </div>

    <div class="copy">
      © 2026 Galxoopinion. All rights reserved.
    </div>
  </div>
</footer>
`;

document.getElementById('hdr').outerHTML = nav;
document.getElementById('ftr').outerHTML = foot;

const $=id=>document.getElementById(id),hd=$('hd'),mn=$('mn'),ov=$('ov');
const f=location.pathname.split('/').pop()||'index.html';
mn.querySelectorAll('a[href]').forEach(a=>{if(a.getAttribute('href')===f&&!a.closest('.dd-list'))a.classList.add('act')});
addEventListener('scroll',()=>hd.classList.toggle('sc',scrollY>40));
const tg=o=>{mn.classList.toggle('show',o);ov.classList.toggle('show',o);document.body.style.overflow=o?'hidden':''};
$('bg').onclick=()=>tg(true);$('cl').onclick=()=>tg(false);ov.onclick=()=>tg(false);
addEventListener('keydown',e=>{if(e.key==='Escape')tg(false)});
mn.querySelectorAll('a:not(.dd-t),.dd-list a').forEach(a=>a.addEventListener('click',()=>tg(false)));
document.querySelectorAll('.dd-t').forEach(t=>t.addEventListener('click',e=>{
 if(innerWidth<=768){e.preventDefault();const d=t.parentElement,o=d.classList.contains('open');document.querySelectorAll('.dd').forEach(x=>x.classList.remove('open'));if(!o)d.classList.add('open')}
 else if(t.getAttribute('href')==='#')e.preventDefault()}));
document.querySelectorAll('.q button').forEach(b=>b.onclick=()=>{const q=b.parentElement,o=q.classList.contains('open');document.querySelectorAll('.q').forEach(x=>x.classList.remove('open'));if(!o)q.classList.add('open')});
addEventListener('error',e=>{if(e.target.tagName==='IMG'){e.target.removeAttribute('src');e.target.alt=''}},true);
const g=$('svc-grid');if(g)g.innerHTML=SV.map((s,i)=>`<a class="card" href="services.html#${s[0]}"><div class="ic">${s[1]}</div><h3>${s[2]}</h3><p>${s[3]}</p><span class="more">Learn more →</span></a>`).join('');
const r=$('svc-rows');if(r)r.innerHTML=SV.map((s,i)=>`<section class="svc ${i%2?'alt':''}" id="${s[0]}"><div class="wrap split ${i%2?'rev':''}"><img loading="lazy" src="${IMG(s[4])}" alt="${s[2]}"><div><span class="tag">${s[1]} Service</span><h2>${s[2]}</h2><p class="sub">${s[3]}</p><ul class="list">${s[5].map(x=>`<li>${x}</li>`).join('')}</ul><a href="contact.html" class="btn btn-g">Request a Proposal</a></div></div></section>`).join('');
const n=$('ind-grid');if(n)n.innerHTML=IN.map(x=>`<div class="card"><div class="ic">${x[0]}</div><h3>${x[1]}</h3><p>Custom research programs built around your sector's audience and goals.</p></div>`).join('');
document.querySelectorAll('[data-img]').forEach(i=>i.src=IMG(i.dataset.img));
const fm=$('cf');if(fm)fm.onsubmit=e=>{e.preventDefault();alert('Thank you! Our team will contact you shortly.');fm.reset()};


/* Hero background slider */
(function(){
  const slides=[...document.querySelectorAll('.slide')];
  if(!slides.length)return;
  slides.forEach(s=>s.style.backgroundImage=`url(${IMG(s.dataset.bg)})`);
  const dots=document.getElementById('slDots');
  let cur=0,timer;
  const go=i=>{
    cur=(i+slides.length)%slides.length;
    slides.forEach((s,k)=>s.classList.toggle('active',k===cur));
    [...dots.children].forEach((d,k)=>d.classList.toggle('on',k===cur));
  };
  const auto=()=>{clearInterval(timer);timer=setInterval(()=>go(cur+1),5500)};
  slides.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Slide '+(i+1));b.onclick=()=>{go(i);auto()};dots.appendChild(b)});
  document.getElementById('slPrev').onclick=()=>{go(cur-1);auto()};
  document.getElementById('slNext').onclick=()=>{go(cur+1);auto()};
  go(0);auto();
})();


/* Testimonials auto slider */
(function(){
  const track=document.getElementById('tmTrack');
  if(!track)return;
  const view=document.getElementById('tmView');
  const dotsBox=document.getElementById('tmDots');
  const total=track.children.length;
  let cur=0,timer,pv=3,startX=0;

  const perView=()=>innerWidth<=600?1:innerWidth<=992?2:3;
  const maxIdx=()=>total-pv;

  const go=i=>{
    cur=i>maxIdx()?0:i<0?maxIdx():i;
    track.style.transform=`translateX(-${cur*(100/pv)}%)`;
    [...dotsBox.children].forEach((d,k)=>d.classList.toggle('on',k===cur));
  };
  const auto=()=>{clearInterval(timer);timer=setInterval(()=>go(cur+1),4000)};
  const build=()=>{
    pv=perView();
    dotsBox.innerHTML='';
    for(let i=0;i<=maxIdx();i++){
      const b=document.createElement('button');
      b.setAttribute('aria-label','Testimonial '+(i+1));
      b.onclick=()=>{go(i);auto()};
      dotsBox.appendChild(b);
    }
    go(Math.min(cur,maxIdx()));
  };

  view.addEventListener('mouseenter',()=>clearInterval(timer));
  view.addEventListener('mouseleave',auto);
  view.addEventListener('touchstart',e=>{startX=e.touches[0].clientX},{passive:true});
  view.addEventListener('touchend',e=>{
    const d=e.changedTouches[0].clientX-startX;
    if(Math.abs(d)>50){go(d<0?cur+1:cur-1);auto()}
  });
  addEventListener('resize',build);

  build();auto();
})();

/* Recent activity popup (home page only) */
(function(){
  if(!/(^|\/)(index\.html)?$/.test(location.pathname))return;

 const FIRST_DELAY = 2000;   // first popup after 2 seconds
const SHOW_TIME   = 2500;   // how long each popup stays visible
const GAP         = 5000;   // a new popup every 3 seconds

  const users=[
    ['Rahul S.','Pune','men',32],['Priya P.','Mumbai','women',44],
    ['Amit V.','Delhi','men',65],['Sneha K.','Nagpur','women',68],
    ['Vikram S.','Jaipur','men',75],['Anjali N.','Kochi','women',26],
    ['Karan M.','Ahmedabad','men',12],['Neha G.','Bengaluru','women',12],
    ['Rohit D.','Hyderabad','men',45],['Pooja R.','Chennai','women',33],
    ['Arjun T.','Surat','men',22],['Kavya M.','Mysuru','women',55],
    ['Sandeep J.','Lucknow','men',51],['Divya L.','Indore','women',17],
    ['Manish B.','Nashik','men',8],['Ritu A.','Chandigarh','women',63],
    ['Suresh K.','Kolkata','men',70],['Meera C.','Bhopal','women',90],
    ['Aditya P.','Thane','men',3],['Tanvi S.','Vadodara','women',79]
  ];
  const pts=[250,350,500,650,800,1000,1200,1500,2000];
  const rand=a=>a[Math.floor(Math.random()*a.length)];
  const fmt=n=>n.toLocaleString('en-IN');

  const actions=[
    p=>`earned <b>${fmt(p)} points</b>`,
    p=>`completed a survey and earned <b>${fmt(p)} points</b>`,
    p=>`redeemed <b>${fmt(p)} points</b> for a reward`,
    p=>`received a reward of <b>${fmt(p)} points</b>`
  ];
  const times=['just now','1 minute ago','2 minutes ago','3 minutes ago','5 minutes ago','8 minutes ago'];

  const box=document.createElement('div');
  box.className='ra-toast';
  box.setAttribute('role','status');
  box.setAttribute('aria-live','polite');
  box.innerHTML='<img alt=""><div class="ra-body"></div><button class="ra-close" aria-label="Close">✕</button>';
  document.body.appendChild(box);

  const img=box.querySelector('img'),body=box.querySelector('.ra-body');
  let last=-1,hideT,nextT,closed=false;

  const hide=()=>box.classList.remove('show');
  box.querySelector('.ra-close').onclick=()=>{hide();closed=true;clearTimeout(nextT)};

  const show=()=>{
    let i;do{i=Math.floor(Math.random()*users.length)}while(i===last);
    last=i;
    const [name,city,g,id]=users[i];
    img.src=`https://randomuser.me/api/portraits/${g}/${id}.jpg`;
    body.innerHTML=`<strong>${name}</strong> from ${city}<br>${rand(actions)(rand(pts))}<small>${rand(times)}</small>`;
    box.classList.add('show');
    clearTimeout(hideT);
    hideT=setTimeout(hide,SHOW_TIME);
  };

  const loop=()=>{
    if(closed)return;
    if(!document.hidden)show();
    nextT=setTimeout(loop,GAP);
  };
  nextT=setTimeout(loop,FIRST_DELAY);
})();



/* Counters: animate every time they scroll into view */
(function(){
  const counters=document.querySelectorAll('.counter');
  if(!counters.length)return;

  const DURATION=2000; // animation time in ms
  const ease=t=>1-Math.pow(1-t,3); // easeOutCubic
  const fmt=n=>Math.floor(n).toLocaleString('en-IN');
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  const set=(el,v)=>{el.textContent=fmt(v)+(el.dataset.suffix||'')};

  const run=el=>{
    cancelAnimationFrame(el._raf);
    const target=+el.dataset.target;
    if(reduce){set(el,target);return}
    const start=performance.now();
    const step=now=>{
      const p=Math.min((now-start)/DURATION,1);
      set(el,target*ease(p));
      if(p<1)el._raf=requestAnimationFrame(step);
    };
    el._raf=requestAnimationFrame(step);
  };

  const reset=el=>{cancelAnimationFrame(el._raf);set(el,0)};

  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>e.isIntersecting?run(e.target):reset(e.target));
  },{threshold:0.4});

  counters.forEach(c=>{set(c,0);io.observe(c)});
})();