var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];


function joinList(values){
var str = "";
values.forEach(function(element,index){
 str = (index === 0) ? element : str + ", " + element;
});
return str;
}

var concepts = joinList(conceptList);
console.log("Today I learned about " + concepts + ".");