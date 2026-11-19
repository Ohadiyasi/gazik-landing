const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'باز کردن منو');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.header')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 601px)').addEventListener('change', closeMenu);

const products = {
  classic: {title: 'گازیکِ نرم', label: 'تیم کلاسیک · THE ORIGINAL', image: 'jar-classic.svg', description: 'برای وقت‌هایی که دلت یه بافت نرم و یکدست می‌خواد. این طعم پیشنهادی، رفیق نون تست، اسموتی یا حتی یه قاشقِ تنهاست.', pairing: 'پیشنهاد گازیک: نون تست + گازیک نرم + چند برش موز'},
  crunchy: {title: 'گازیکِ کرانچی', label: 'تیم کرانچی · CRUNCH TIME', image: 'jar-crunchy.svg', description: 'برای اونایی که دوست دارن توی هر قاشق، تکه‌های بادام‌زمینی رو حس کنن. یه طعم پیشنهادی با بافتی متفاوت برای کاسه‌ی صبحونه و میان‌وعده‌های تو.', pairing: 'پیشنهاد گازیک: جو دوسر + گازیک کرانچی + سیب و دارچین'},
  chocolate: {title: 'گازیکِ شکلاتی', label: 'تیم شکلاتی · CHOCO LOVE', image: 'jar-chocolate.svg', description: 'یه قرار خوشمزه بین بادام‌زمینی و شکلات. این طعم پیشنهادی برای عصرونه، کنار پنکیک یا وقتی که دلت یه چیز شکلاتی می‌خواد طراحی شده.', pairing: 'پیشنهاد گازیک: پنکیک گرم + گازیک شکلاتی + توت‌فرنگی'}
};
const articles = {
  toast: {title:'سه ایده برای یه تستِ فراموش‌نشدنی', category:'صبحونه با گازیک', body:'<p>یه برش نون تست می‌تونه شروع یه صبح متفاوت باشه. نون رو به اندازه‌ای که دوست داری برشته کن، یه لایه کره بادام‌زمینی روش بکش و یکی از این ترکیب‌ها رو امتحان کن:</p><h3>موز و دارچین</h3><p>چند برش موز روی کره بادام‌زمینی بچین و کمی دارچین اضافه کن. ساده و خوش‌عطر، درست برای یه صبح آروم.</p><h3>سیب و گردو</h3><p>سیب رو نازک برش بزن، روی تست بچین و چند تکه گردو روش بریز. ترکیب نرمی کره و تردی سیب، قسمت جذاب ماجراست.</p><h3>توت‌فرنگی و شکلات</h3><p>چند برش توت‌فرنگی و کمی شکلات رنده‌شده اضافه کن. کنار یه فنجون چای یا قهوه، صبحونه آماده‌ست.</p>'},
  bowl: {title:'با گازیک به صبحونه‌ت طعم بده', category:'ایده‌های خوشمزه', body:'<p>برای یه کاسه صبحونه‌ی ساده، از جو دوسر و میوه‌های دلخواهت شروع کن. کره بادام‌زمینی همون طعمیه که همه‌چیز رو به هم وصل می‌کنه.</p><h3>چی لازم داریم؟</h3><ul><li>نصف پیمانه جو دوسر پرک</li><li>سه‌چهارم پیمانه شیر یا نوشیدنی گیاهی دلخواه</li><li>یک قاشق غذاخوری کره بادام‌زمینی</li><li>موز، سیب یا میوه‌ی فصل</li></ul><h3>چطور درستش کنیم؟</h3><p>جو دوسر و شیر رو با حرارت ملایم بپز و هم بزن تا به غلظتی که دوست داری برسه؛ زمان پخت رو با راهنمای روی بسته جو تنظیم کن. داخل کاسه بریز، میوه‌ها رو اضافه کن و کره بادام‌زمینی رو روی کاسه پخش کن. اگه دوست داشتی، کمی دارچین هم اضافه کن.</p>'},
  cookie: {title:'یه عصرِ آروم با کوکی بادام‌زمینی', category:'آشپزخونه‌ی گازیک', body:'<p>این دستور ساده برای حدود ۱۰ کوکی کوچیکه؛ یه بهونه‌ی خوب برای اینکه عطر شیرینی توی خونه بپیچه.</p><h3>چی لازم داریم؟</h3><ul><li>یک پیمانه کره بادام‌زمینی نرم</li><li>نصف پیمانه شکر</li><li>یک عدد تخم‌مرغ</li><li>کمی وانیل، به دلخواه</li></ul><h3>وقتِ پختنه</h3><p>فر رو روی ۱۷۵ درجه سانتی‌گراد گرم کن. مواد رو مخلوط کن، به شکل توپ‌های کوچیک روی کاغذ مخصوص پخت بچین و با چنگال کمی فشار بده. حدود ۱۰ تا ۱۲ دقیقه بپز تا لبه‌ها خودشون رو بگیرن. کوکی‌ها بعد از بیرون اومدن هنوز نرم هستن؛ بذار روی سینی خنک بشن و بعد جابه‌جاشون کن.</p><p>بافت نهایی با نوع کره بادام‌زمینی فرق می‌کنه؛ زمان پخت رو با فر خودت تنظیم کن.</p>'}
};
const dialog = document.querySelector('#detail-dialog');
const dialogContent = document.querySelector('#dialog-content');
let previousFocus;
function openDialog(content) {
  previousFocus = document.activeElement;
  dialogContent.innerHTML = content;
  closeMenu();
  document.body.classList.add('modal-open');
  dialog.showModal();
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus();
}
document.querySelectorAll('[data-product]').forEach(button => {
  button.addEventListener('click', () => {
    const product = products[button.dataset.product];
    openDialog(`<div class="dialog-body"><div class="dialog-product"><img src="./assets/${product.image}" alt="بسته‌بندی پیشنهادی ${product.title}" width="240" height="300"><div><p class="dialog-label">${product.label}</p><h2 id="dialog-title">${product.title}</h2><p>${product.description}</p></div></div><h3>یه ترکیب خوشمزه</h3><p>${product.pairing}</p><p class="demo-message">این محصول و بسته‌بندی، نمونه‌ی پیشنهادی برای نمایش طراحی سایت است. ترکیبات، وزن، قیمت و امکان خرید پس از نهایی شدن محصولات اضافه می‌شوند.</p></div>`);
  });
});
document.querySelectorAll('[data-article]').forEach(button => {
  button.addEventListener('click', () => {
    const article = articles[button.dataset.article];
    openDialog(`<article class="dialog-body"><p class="dialog-label">${article.category} · مجله‌ی گازیک</p><h2 id="dialog-title">${article.title}</h2>${article.body}<p class="demo-message">محتوای نمونه‌ی مجله برای این پروتوتایپ.</p></article>`);
  });
});
document.querySelector('#contact-button').addEventListener('click', () => {
  openDialog('<div class="dialog-body"><p class="dialog-label">ارتباط با گازیک</p><h2 id="dialog-title">خوشحال می‌شیم ازت بشنویم!</h2><p>راه‌های ارتباطی رسمی گازیک به‌زودی اینجا قرار می‌گیرن.</p><p class="demo-message">این سایت در مرحله‌ی پروتوتایپ است. شماره تماس، ایمیل و شبکه‌های اجتماعی پس از دریافت اطلاعات واقعی برند اضافه می‌شوند.</p><button class="button button-blue" type="button" id="contact-dismiss">باشه، منتظریم!</button></div>');
  document.querySelector('#contact-dismiss').addEventListener('click', () => dialog.close());
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  }
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  previousFocus?.focus({preventScroll:true});
});

// Keep the primary navigation in sync with the section in view.
const navLinks = [...navigation.querySelectorAll('a')];
const observedSections = ['home', 'flavors', 'story', 'journal', 'contact'].map(id => document.getElementById(id));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin:'0px 0px -65% 0px', threshold:0});
  observedSections.forEach(section => observer.observe(section));
}
