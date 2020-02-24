var comedian1 = ''

$(".draggable").draggable();

$("#form1").submit(function (event) {
    var text = $("#input1").val()
    var text_append = generateEnd(text, aziz);
    console.log(text_append[1]);
    $("#output1").append(`<span> ${text_append[1]} </span>`);
    $("#input1").val('');
});

$("#submit_button1").click(() => {
    $("#form1").submit();
});

$('#input1').keypress(function (e) {
    if (e.which == 13) {
        $('#form1').submit();
        return false;
    }
});
