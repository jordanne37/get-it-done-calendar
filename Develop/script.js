var test; 

$(function () {
  $(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id"); 
    localStorage.setItem(time,text);
  })
  
  function checkColor() {
    var currentTime = dayjs().hour();

    $(".time-block").each(function(){
      var blockTime = parseInt($(this).attr("id").split("hour-")[1])

      if (blockTime < currentTime) {
        $(this).addClass("past")
      } else if (blockTime === currentTime){
        $(this).removeClass("past")
        $(this).addClass("present")
      } else {
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }

     
    })

  }
  checkColor();
  
    $("#hour-8 .description").text(localStorage.getItem("hour-8") )
  $("#currentDay").text(dayjs().format("MMMM DD YYYY, h:mm:ss a"));
});
