$(function () {
    $("header").click(function () {
        var amount = $("input").val();

        if (amount) {
            var lucky = Math.ceil(Math.random() * amount);
            $("#number").find("p").text(lucky);
            $("#modal").modal();
        } else {
            $("h4").text("The lucky guy is ......");
            $("#number").find("p").text("Nope!");
            $("#modal").modal();
        }
    });
});