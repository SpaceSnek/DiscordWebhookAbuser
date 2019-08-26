$("#start").click(function() {
    $(".main").addClass("animated bounceOutUp")
    setTimeout(function() {
        $(".main").hide()

        $("#numer").html("0")
        $("#denom").html($("#msgamt").val())

        $(".progress-div").addClass("animated bounceInUp")
        $(".progress-div").show()

        for(var i = 0; i < $("#msgamt").val(); i++) {
            setTimeout(function() {
                $.ajax({
                    type: "POST",
                    url: $("#webhook-url").val(),
                    data: JSON.stringify({
                        content: ($("#msg").val() == "" ? "Spam chats using the Discord webhooks" : $("#msg").val()),
                        username: ($("#username").val() == "" ? null : $("#username").val()),
                        avatar_url: ($("#avatar").val() == "" ? null : $("#avatar").val()),
                    })
                })
                $("#numer").html(parseInt($("#numer").html()) + 1)
            }, i * 500)
        }
    }, 2000)
})