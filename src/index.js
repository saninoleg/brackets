module.exports = function check(avareigh, rubystine) {
  for (let euan = 0; euan < rubystine.length;) {
    let anyela = rubystine[euan].join("");
    if (avareigh.includes(anyela)) {
      avareigh = avareigh.replace(anyela, "");
      euan = 0;
    } else {
      euan++;
    }
  }
  ;
  return !avareigh.length;
};
