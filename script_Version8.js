const questions = [
  {q:"هل تحب السفر؟", a:["نعم","لا","أحياناً","ما أدري"]},
  {q:"وش أكثر شي تحبه بالأكل؟", a:["لحم","دجاج","سمك","خضار"]},
  {q:"هل تحب الأفلام؟", a:["نعم","لا","بعض الأحيان","ما أحب"]},
  {q:"أي لون تفضل؟", a:["أحمر","أزرق","أخضر","أسود"]},
  {q:"هل تفضل الصيف أو الشتاء؟", a:["الصيف","الشتاء","الربيع","الخريف"]},
  {q:"تحب تسمع موسيقى؟", a:["نعم","لا","أحياناً","ما أحب"]},
  {q:"وش أكثر رياضة تحبها؟", a:["كرة قدم","سباحة","كرة سلة","كرة طائرة"]},
  {q:"هل تحب القراءة؟", a:["نعم","لا","أحياناً","ما أحب"]},
  {q:"أي نوع قهوة تفضل؟", a:["تركية","اسبريسو","نسكافيه","لاتيه"]},
  {q:"هل تحب الألعاب الإلكترونية؟", a:["نعم","لا","أحياناً","ما أحب"]},
  {q:"تفضل البحر أو الجبل؟", a:["بحر","جبل","صحراء","مدينة"]},
  {q:"هل تتابع الأخبار؟", a:["نعم","لا","أحياناً","لا أتابع"]},
  {q:"هل تحب الطبخ؟", a:["نعم","لا","أحياناً","ما أجيد"]},
  {q:"أي نوع سيارة تحب؟", a:["رياضية","عائلية","جيب","كهربائية"]},
  {q:"هل تحب القهوة أم الشاي؟", a:["قهوة","شاي","لا شيء","أحياناً"]},
  {q:"هل تحب الحفلات؟", a:["نعم","لا","أحياناً","لا أحب"]},
  {q:"أي موسم تحبه؟", a:["صيف","شتاء","ربيع","خريف"]},
  {q:"هل تحب التصوير؟", a:["نعم","لا","أحياناً","ما أحب"]},
  {q:"هل تحب النوم كثير؟", a:["نعم","لا","أحياناً","لا أحب"]},
  {q:"هل تحب الحيوانات؟", a:["نعم","لا","أحياناً","ما أحب"]},
  {q:"هل تحب التقنية؟", a:["نعم","لا","أحياناً","ما أحب"]},
  {q:"هل تفضل الشغل الجماعي؟", a:["نعم","لا","أحياناً","ما أحب"]},
  {q:"هل تفضل الأفلام الأكشن؟", a:["نعم","لا","أحياناً","ما أحب"]},
  {q:"هل تحب القهوة بدون سكر؟", a:["نعم","لا","أحياناً","لا أحب"]},
  {q:"هل تتابع كرة القدم؟", a:["نعم","لا","أحياناً","لا أتابع"]}
];

let currentIndex = 0;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');

function showQuestion() {
  const current = questions[currentIndex];
  questionEl.textContent = `${currentIndex + 1}. ${current.q}`;
  answersEl.innerHTML = '';
  current.a.forEach(answer => {
    const btn = document.createElement('button');
    btn.textContent = answer;
    btn.onclick = () => {
      nextBtn.style.display = 'inline-block';
      Array.from(answersEl.children).forEach(b => b.disabled = true);
      btn.style.backgroundColor = '#777';
    };
    answersEl.appendChild(btn);
  });
  nextBtn.style.display = 'none';
}

nextBtn.onclick = () => {
  currentIndex++;
  if(currentIndex < questions.length){
    showQuestion();
  } else {
    questionEl.style.display = 'none';
    answersEl.style.display = 'none';
    nextBtn.style.display = 'none';
    resultEl.textContent = "خلصت اللعبة، شكراً للعبك! 🙌";
  }
};

showQuestion();