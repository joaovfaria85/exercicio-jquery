$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit',function(e){
        e.preventDefault();
        const NovaAtividade = $('#conteudo').val();
        const list = $('#ul');
        $(`<li>${NovaAtividade}</li>`).appendTo(list);
        $('#conteudo').val('');
    })
    $('ul').on('click','li',function(e){
        e.preventDefault();
        $(this).addClass('removed')
    })
    $('ul').on('click','li.removed', function(e){
        e.preventDefault();
        $(this).removeClass('removed')
    })

})