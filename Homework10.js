// task1

$("a[href^='https://']").attr('target', '_blank');

// task2

$(document).ready(function(){
$("h2.head").css('background', 'green');
$(".inner").css('fontSize', '35px');
});

// task3

$("h3 + div").each(function(){
    const $elem = $(this);
    $elem.prev().before($elem)
});

// task4

const $checkbox = $(':checkbox');
$checkbox.on('click', function(){
    if($(':checkbox:checked').length ==3){
        $checkbox.attr('disabled', 'true');
    }
});