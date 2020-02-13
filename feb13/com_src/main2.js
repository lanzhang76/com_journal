var comedian2 = ''



$("#form2").submit(function (event) {
    var text = $("#input2").val()
    var text_append = generateEnd(text, ali);
    // console.log(text_append);
    $("#output2").append(`<span> ${text_append[1]} </span>`);
    $("#input2").val('');
});

$("#submit_button2").click(() => {
    $("#form2").submit();
});

$('#input2').keypress(function (e) {
    if (e.which == 13) {
        $('#form2').submit();
        return false;
    }
});
