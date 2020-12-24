require("dotenv").config();

$(document).ready(function() {
    let apiKey = process.env.API_KEY;
    let initUrl = 'https://api.nasa.gov/planetary/apod?api_key=';
    let endpoint = initUrl + apiKey;
    $('#getImg').click(function() {
      $.ajax({
          url: endpoint,
          contentType: "application/json",
          dataType: 'json',
          success: function(result){
              $('#apodImg').attr("src", result.url);
            $('p').append("<br><p><b>Explanation:</b><br> " + result.explanation + "</p>");
            $('h1').append(result.title);
            $('#getImg').attr('disabled', 'true');
            
            // console.log(result);
          }
      })
    })
    
  })
  