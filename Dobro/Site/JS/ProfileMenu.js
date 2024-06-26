var check = true;

document.getElementById('ProfileButtonMenuOn').addEventListener("click", function(e) {
    check = true;
    //alert(check);
});

document.getElementById('ProfileButtonMenuOff').addEventListener("click", function(e) {
    check = true;
    //alert(check);
});

document.body.addEventListener("click", function(e) {
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
        document.getElementById('ProfileButtonMenuOn').classList.remove('NoneBlock');
        document.getElementById('ProfileButtonMenuOff').classList.add('NoneBlock');
    }
    else
    {
        check=false;
    }
});

function MenuOn()
{
    //alert(check);
    $( "#ProfileMenu" ).animate({
        opacity: 1,
        height: "toggle", 
        display: "block"
      }, 200, function() {
        // Animation complete.
      });
    document.getElementById('ProfileButtonMenuOn').classList.add('NoneBlock');
    document.getElementById('ProfileButtonMenuOff').classList.remove('NoneBlock');
}

function MenuOff()
{
    $( "#ProfileMenu" ).animate({
        opacity: 0,
        height: "toggle", 
        display: "none"
      }, 200, function() {
        // Animation complete.
      });
    document.getElementById('ProfileButtonMenuOn').classList.remove('NoneBlock');
    document.getElementById('ProfileButtonMenuOff').classList.add('NoneBlock');
}
