
function loopyLighthouse (range, multiples, words){
  for (var i = range[0]; i <= range[1]; i++){
    var str = "";
    for (var j = 0; j <= multiples.length; j++){
      if (i % multiples[j] === 0){
        str += words[j];
      }
    }
    if(str !== ""){
      console.log(str);
    }
    else { console.log(i);}
  }
}

loopyLighthouse([100, 200], [3, 4], ["Loopy", "Lighthouse"]);
