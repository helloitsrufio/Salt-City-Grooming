let hidden = false

function showMiniSecondSection(){
    if(hidden){
        document.getElementsByClassName('hidden').style.display = 'none'
        this.true
    }else{
        document.getElementsByClassName('hidden').style.display = 'flex'
        this.false
    }
}

  $('a[href=#requestdiv]').click(function(){
         $('html, body').animate({
         scrollTop: $("#requestdiv").offset().top
      }, 2000);
   });

