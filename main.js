

// Submit Review function, fill in the function to make sure the 
// top review text updates according to the comments at the bottom of the page
function submitReview () {
    // Place where the review is written.
    var textarea = document.getElementById("comment");

    // use getElementById here to get the Leading Review!
    var leadingReview =document.getElementById("latestReview") ;
    
    // write code to set the innerText of leadingReview to be 
    // equal to the value of textarea (hint: to get the text inside a 
    // textarea, use .value )
    leadingReview.innerText = textarea.value ;
}

// This is for the example flour image. Try
// coding this function first, which should be the same
// as the showIngredient function above
function showFlour () {
    // get the image of an ingredient, using getElementById
    var image = document.getElementById("flourimg");

    // what can we put in quotes to make the width 500px?
    image.style = "width: 500px";

    // use the "alert" function to make the name pop up!
    alert("Some healthy, non-bleached white flour.");
}