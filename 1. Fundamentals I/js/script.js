// 1. Using jQuery find all textareas, and makes a border.
function borders() {
  const textAreas = document.querySelectorAll("textarea");
  for (let i = 0; i < textAreas.length; i++) {
    textAreas[i].style.border = "solid 3px darkgreen";
  }

  // Then adds all paragraphs to the jQuery object to set their borders red.
  const paragraphs = document.querySelectorAll("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.border = "solid 1px red";
  }
}
$("#button1").on("click", borders);

// 2. Set the background color blue of the following elements using jQuery.
$(
  "section:nth-child(2) textarea, section:nth-child(2) p, section:nth-child(2) span, section:nth-child(2) button"
).css({
  "background-color": "blue",
  color: "white",
});

// 3. Create a paragraph element with some text and append it to the end of the document body using jQuery.
let p1 = "Text Inside the h1";
let p2 = "Text after the h1";
let p3 = "Text before the h1";

$("section:nth-child(3)").append("<h1>xxx</h1>");
$("section:nth-child(3) h1:nth-child(2)").append(p1);
$("section:nth-child(3) h1:last-child").after(p2);
$("section:nth-child(3) h1:last-child").before(p3);

// 4. Using jQuery add the previous set of elements on the stack to the current set.
$("div.left, div.right").find("div, div > p").addClass("border");
// First Part
$("div.before-addback").find("p").addClass("background");
// Second Part
$("div.after-addback").find("p").addBack().addClass("background");

// 5. Using jQuery add the class " w3r_font_color " to the last paragraph element.
$("section:nth-child(5) p:last").addClass("w3r_font_color");
$("section:eq(4) p:eq(2)").addClass("w3r_font_color");

// 6. Using jQuery add the class "w3r_font_color" and w3r_background to the last paragraph element.
$("section:eq(5) p:last").addClass("w3r_font_color w3r_background");

// 7. Using jQuery add a new class to an element that already has a class.
$("section:eq(6) p[class]").addClass("w3r_background");

// 8. Using jQuery insert some HTML after all paragraphs.
var someHTML = "<h1>Some HTML</h1>";
var btn8 = document.createElement("button");
btn8.innerHTML = "Click to add some HTML";
$("section:eq(7) p:last").after(btn8);
$(btn8).on("click", function () {
  $("section:eq(7) p:last").after(someHTML);
});

// 9. Using jQuery insert a DOM element after all paragraphs.

// 10. Insert a jQuery object after all paragraphs.
// let $paragraph = $("section:eq(9) p:eq(1)");
var btn10 = document.createElement("button");
btn10.innerHTML = "Click to add a jQuery object";
$("section:eq(9) p:last").after(btn10);
$(btn10).on("click", function () {
  $("section:eq(9) p:last").after(($("p").textContent = "jQuery Object"));
});

// 11. Register a handler to be called when Ajax requests complete.

// 12. Register a handler to be called when Ajax requests complete with an error.

// 13. Attach a function to be executed before an Ajax request is sent.

// 14. Register a handler to be called when the first Ajax request begins.

// 15. Register a handler to be called when all Ajax requests have completed.

// 16. Attach a function to be executed whenever an Ajax request completes successfully.

// 17. Using jQuery count every element (including head, body, etc.) in the document.
let p17 = document.createElement("p");
p17.textContent = `Total elements: ${$("*").length} 
<html> elements: ${$("html").length}
<body> elements: ${$("body").length}
<section> elements: ${$("section").length}
<h1> elements: ${$("h1").length}
<p> elements: ${$("p").length}
`;
$("section:eq(16) h1").after(p17);

// 18. Using jQuery count all elements within a division/section.
// console.log($("section:eq(17) *").length);
let p18 = document.createElement("p");
$("section:eq(17) p:last").after(p18);
p18.textContent = `Elements in this section: ${$("section:eq(17) *").length}`;

// 19. Using jQuery click the button to animate the paragraph element with a number of different properties.
var div19 = document.createElement("div");
var btn19 = document.createElement("button");
div19.style = "width: 50px; color: ligthgreen;";
div19.textContent = "Magic Object";
btn19.innerHTML = "Click to see Magic!!";
$("section:eq(18) h1").after(div19);
$("section:eq(18) div").after(btn19);

$(btn19).on("click", function () {
  $(div19).animate(
    {
      backgroundColor: "blue",
      color: "white",
      fontSize: "100px",
      marginLeft: "+=300px",
    },
    5000,
    function () {
      $(div19).css({
        backgroundColor: "ligthgreen",
        color: "black",
        fontSize: "1em",
        height: "1em",
        marginLeft: "10px",
      });
    }
  );
});

// 20. Using jQuery animates a div's left property with a relative value.
$("#right20").on("click", function () {
  $(".block20").animate({ marginLeft: "+=50px" }, 200);
});
$("#left20").on("click", function () {
  $(".block20").animate({ marginLeft: "-=50px" }, 200);
});

// 21. Using jQuery animates the first div's left property and synchronizes the remaining divs.
$("#run21").on("click", function () {
  $(".block21:eq(2)").animate({ marginLeft: "+=200px" }, 2000);
});

// 22. Using jQuery change the color of any div that is animated.
$("#button22-1").click(function () {
  $("div:animated").toggleClass("colored");
});

function animateIt() {
  $("#div22-1,#div22-2").slideToggle("slow", animateIt);
}

animateIt();

// 23. Using jQuery appends some text to all paragraphs.
var i = 1;
$("#button23-1").on("click", function () {
  $("section:eq(22) div").append(" - Text " + i) + " - ";
  i++;
});

// 24. Using jQuery appends a jQuery object to all paragraphs.
$("#button24").on("click", function () {
  $("section:eq(23) p").append($("h3"));
});

// 25. Using jQuery appends an Element to all paragraphs.

// 26. Using jQuery append all spans to the element with specified id.

// 27. Using jQuery display the checked attribute and property of a checkbox as it changes.
$("#check27-1").change("click", function () {
  var $input = $(this);
  console.log(`Checked Property: ${$input.prop("checked")}\
  Checked State: ${$input.is(":checked")}`);
  $(
    "section:eq(26) h3"
  ).text(`Checked Property: ${$input.prop("checked")} Checked State: ${$input.is(":checked")}
  `);
});

const text = `a very long string that just continues\
and continues and continues`;
// console.log(text); // a very long string that just continues and continues and continues

// 28. Find the title attribute of the first emphasized in the page
$("#button28").on("click", function () {
  $("#id28").html($("section:eq(27) em").attr("title"));
});

// 29. Using jQuery find all links with an hreflang attribute de.
$("#button29").on("click", function () {
  $("section:eq(28) a[hreflang='de']").css("background-color", "red");
});

// 30. Using jQuery find all the divisions with a name attribute that contains 'tutorial' and sets the background color yellow.
var $divs = $("section:eq(29) div[name*='tutorial']");

$("#button30").on("click", function () {
  $divs.css("background-color", "yellow");
});

// 31. Using jQuery find all the divisions with a name attribute that contains the word 'tutorial' and sets the background color yellow.

// 32. Using jQuery finds all the divisions with an attribute name that ends with 'tutorial' and sets the background color yellow.

// 33. Finds all inputs with a value of "Red" and changes the text of the next sibling span.
$("#button33").on("click", function () {
  $('section:eq(32) [value="Red"]')
    .siblings()
    .html('With value="Red"')
    .css("color", "red");
});

// 34. Finds all inputs that don't have the name 'color' and appends text to the span next to it.
