$(document).ready(function(){
  $("#biography").click(function() {
    var html = "\
    <link type='text/css' media='all' rel='stylesheet' href='css/biography.css' />\
    <h1>Biography</h1>\
    <p>Professor Severus Snape was born 9 January, 1960 to Eileen Prince, a pure-blood witch, and Tobias Snape, a Muggle, making him a half-blood wizard. </p>\
    <p>In 1971 he began his first term at Hogwarts School of Witchcraft and Wizardry where he was Sorted into Slytherin House. </p>\
    <p>Severus's potions textbook contained a few spells and curses which he was credited with inventing.</p>\
    <p>When Severus Snape began his teaching career at Hogwarts in 1981, he initially applied for the position of Defence Against the Dark Arts, but was rejected multiple times. Dumbledore instead employed Snape in the position of Potions Master and Head of Slytherin House. </p>\
    <p>Professor Snape also worked with the new Defence Against the Dark Arts professor, Gilderoy Lockhart, in running the Duelling Club. During the 1997-1998 school year, Snape was named Headmaster of Hogwarts. Snape used his position as Headmaster to discreetly protect the students and to contain the Carrows.</p>\
    ";
    $(".content").html(html);
  })
});
