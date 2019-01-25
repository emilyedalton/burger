
  $(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      burger_name: $("#burg").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger/new", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    });
  

 
    $(".burgerPUT").on("click", function(event) {
      var id = $(this).data("id");
      // var newSleep = $(this).data("newsleep");
  
      var eaten = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: eaten
      }).then(
        function() {
          console.log("thisburger was eatean", eaten);
          // Reload the page to get the updated list
          location.reload();
        });
      });
  });