$("#battle_form").submit(function (event) {
    var text = $("#battle_input").val()
    var text_append1 = generateEnd(text, aziz);
    var text_append2 = generateEnd(text, ali);
    $(".output").css("color", "black");
    format_output = (text) => {
        var user_defined = text[0]
        var generated = text[1].replace(text[0], '')
        var assemble = `<span>${user_defined}<span style="color: #9770EA;"> ${generated} </span></span>`
        return assemble
    }
    $("#output1").append(format_output(text_append1));
    $("#output2").append(format_output(text_append2));
    $("#battle_input").val('');
});

$("#battle_button").click(() => {
    $("#battle_form").submit();
});

$('#battle_input').keypress(function (e) {
    if (e.which == 13) {
        $('#battle_form').submit();
        return false;
    }
});

$("#clear_button").click((event) => {
    $(".output").empty();
});