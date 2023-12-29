$(document).ready(() => {
    $('.countup').each(function() {
        const that = $(this),
            countTo = $(this).attr('data-end');
        $({ countNum: 0 }).animate({
            countNum: countTo
        },
        {
            duration: 8000,
            easing: 'linear',
            step: function(){
                that.text(Math.floor(this.countNum));
            },
            complete: function() {
                that.text(`${this.countNum}`);
            }
        });
    });
});