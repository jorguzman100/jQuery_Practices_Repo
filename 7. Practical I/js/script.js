// 1. Test if jQuery is loaded && Prepare Page
const title = document.createElement("h1");
const div = document.createElement("div");
const btn = document.createElement("button");
const sections = document.querySelectorAll("section");

title.setAttribute("style", "text-align: center; color: blue;");
div.setAttribute("style", "background-color: #A2D9CE; padding: 20px;");
btn.setAttribute(
  "style",
  "background-color: blue; color: white; padding: 20px; font-size: 20px;"
);
btn.setAttribute("id", "btn1");

title.textContent = "jQuery Practical exercises - Part I";
btn.textContent = "Go to top";

document.body.prepend(title);
sections[0].append(div);
sections[1].append(btn);

for (let i = 1; i <= 30; i++) {
  var p = document.createElement("p");
  p.textContent = `Text for paragraph ${i}`;
  p.setAttribute(
    "style",
    "background-color: white; color: gray; margin: 30px; font-size: 25px;"
  );
  div.appendChild(p);
}

// 2. Scroll to the top of the page with jQuery.
$("#btn1").on("click", function () {
  $("html").animate({ scrollTop: 0 }, "slow");
});

// 3. Disable right click menu in html page using jquery
$(document).on("contextmenu", function (e) {
  return false;
});

// 4. Disable/enable the form submit button ( Disable the submit button until the visitor has clicked a check box. )

$("#accept").on("click", function () {
  if ($("#submitbtn").is(":disabled")) {
    $("#submitbtn").removeAttr("disabled");
    console.log("Now: Enabled");
  } else {
    $("#submitbtn").attr("disabled", "disabled");
    console.log("Now: Disabled");
  }
});

// 5. Fix broken images automatically.
/* Hide the following broken img tag in the body section.
Sample Data:
<body>
    <a href="https://www.w3resource.com"><img src="//www.w3resource.com/image/w3resourcelogo.gif" alt="w3resource logo" width="150" height="78" /></a>
</body> */
$("img").on("error", function () {
  console.log("Hiding Broken image");
  $(this).hide();
});
$("img").on("error", function () {
  console.log("Replacing Broken image");
  $(this).attr("src", "https://placeimg.com/150/150/tech");
});

// 6. Blink text using jQuery
function blink() {
  $(".blink").fadeOut(1000);
  $(".blink").fadeIn(1000);
}
setInterval(blink);

// 7. Create a Zebra Stripes table effect.
function zebra() {
  $("tr:odd").css("background-color", "#ff0066");
}
$(document).ready(zebra);

// 8. Print a page using jQuery
$("a.printPage").on("click", function () {
  window.print();
  return false;
});

// 9. Limit character input in the textarea including count.
var maxLength = 15;
$("textarea").keyup(function () {
  var textlen = maxLength - $(this).val().length;
  $("#rchars").text(textlen);
});
