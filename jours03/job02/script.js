$(document).ready(function() {
  $("#melanger").click(function() {
      var images = $("#images img").toArray();
      images.sort(function() { return 0.5 - Math.random(); });
      $("#images").empty().append(images);
  });

  $("#verifier").click(function() {
      var correct = true;
      $("#dropzone .drop-area").each(function(index, element) {
          var order = $(element).data("order");
          var imgOrder = $(element).find("img").data("order");
          if (order !== imgOrder) {
              correct = false;
          }
      });
      if (correct) {
          $("#message").text("Bravo! Vous avez reconstitué l'arc-en-ciel.");
      } else {
          $("#message").text("L'ordre est incorrect. Essayez encore.");
      }
  });

  $("img").on("dragstart", function(event) {
      event.originalEvent.dataTransfer.setData("text/plain", event.target.id);
  });

  $(".drop-area").on("dragover", function(event) {
      event.preventDefault();
  });

  $(".drop-area").on("drop", function(event) {
      event.preventDefault();
      var id = event.originalEvent.dataTransfer.getData("text/plain");
      var img = document.getElementById(id);
      $(this).empty().append(img);
  });
});