import $ from 'jquery';
import jQuery from 'jquery';

window.onload=function(){
    window.scrollTo(0,document.body.scrollHeight);
}

$(function() {
    $('#MessageForTextArea').on('input keyup paste', function() {
      var $el = $(this),
          offset = $el.innerHeight() - $el.height();
  
      if ($el.innerHeight() < this.scrollHeight) {
        // Grow the field if scroll height is smaller
        $el.height(this.scrollHeight - offset);
      } else {
        // Shrink the field and then re-set it to the scroll height in case it needs to shrink
        $el.height(1);
        $el.height(this.scrollHeight - offset);
      }
    });
  });




$("#MessageForTextArea").keypress(function (e) {
    if(e.which === 13 && !e.shiftKey) {
        e.preventDefault();
        $(this).closest("form").submit();
    }
});

export function FileButtonAdd()
{
    // if(4<5)
    // {
    //     var input = document.getElementById('FileButton1');

    //     if ($('FileButton').val()) 
    //     {
    //         var el = document.getElementById("FileLable");
    //         el.classList.remove("NoneBlock");
    //     }
    // }
    // var input = document.getElementById('FileButton0');

    // console.log(jQuery('#File1').val());
}