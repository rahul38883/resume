var s = "Secured, 95.92 percentile, All India JEE Main \n" +
  "\n" +
  "Awarded, Scholarship, Innovation in Science Pursuit for Inspired Research (INSPIRE) Scheme, Government of India \n" +
  "\n" +
  "Scored, top 0.5% students of the state, 10th & 12th Board Exams ";

var a = s.split('\n\n');

var ss = '';

a.forEach((item, index) => {
  ss += '<li>' + item.trim() + '</li>\n';
});

console.log(ss);
