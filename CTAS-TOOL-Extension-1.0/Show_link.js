$('*').find("a").each(async function(){
               
    $(this).attr('data-toggle','tooltip');
    $(this).attr('data-placement','bottom');
    $(this).attr('title',this.href);
    
    });

$('.c_063-0.next-gen.c_063-0--full-width').each(async function(){
    $(this).css( "padding-bottom", "45px" );
});
$('.c_272.c_272--large.c_272--full-width').each(async function(){
    $(this).css( "padding-bottom", "45px" );
});
$('.c_272.c_272--large').each(async function(){
    $(this).css( "padding-bottom", "45px" );
});
$('.c_283-1_slider').each(async function(){
    $(this).css( "padding-bottom", "45px" );
});

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
      });