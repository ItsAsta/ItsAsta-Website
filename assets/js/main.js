$( document ).ready(function() {
    $("#discordId").hide();

    $("#discordIcon").click(function () {
        $("#discordId").slideToggle(500);
        console.log("loool")
    })
});