import $ from 'jquery';

var check = true;

$(document).mouseup(function (e) {
    //alert(check);
    if(!check)
    {
        $( "#ProfileMenu" ).animate({
            opacity: 0,
            height: "toggle", 
            display: "none"
          }, 200, function() {
            // Animation complete.
          });
        document.getElementById('ProfileButtonMenuOn').classList.remove('disnone');
        document.getElementById('ProfileButtonMenuOff').classList.add('disnone');

        check = true;
    }

});

export function MenuOn()
{
    //alert(check);
    $( "#ProfileMenu" ).animate({
        opacity: 1,
        height: "toggle", 
        display: "block"
      }, 200, function() {
        // Animation complete.
      });

      document.getElementById('ProfileButtonMenuOn').classList.add('disnone');
      document.getElementById('ProfileButtonMenuOff').classList.remove('disnone');

      check=false;
}




