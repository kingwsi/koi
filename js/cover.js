$(document).ready(function () {

    $("#resolveBtn").click(function () {
        openModal()
    });

    $(".koi-close").click(function () {
        closeModal()
        $(this).parent().parent().hide()
    });
});
/*打开模态框*/
function openModal() {
    var modal_width = $(window).width() - 30;
    if (modal_width>440) {
        modal_width = 440;
    }
    var height = $(window).height() / 2 - 70;
    var width = ($(window).width()-modal_width) / 2;
    console.log(modal_width)
    $(".koi_modal").css({top: height, left: width, width:modal_width});
    $(".koi_modal").show();
    $("body").append("<div class='koi-modal-warp'></div>")
}

function closeModal() {
    $(".koi-modal-warp").remove();
}
