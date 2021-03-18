function fadeInFadeOut() {
    for (let i = 0; i < 2; i++) {
        $('#messageContainer').fadeOut(500).fadeIn(500);
    }
}
    
function next() {
    $('#spawnBtnArrow').css('display', 'inline-block')
    for (let i = 0; i < 2; i++) {
        $('#spawnBtnArrow').fadeOut(500).fadeIn(500);
    }        
    $('#messageContainer').html('');
}

$('#spawnBtn').one('click', function () {
    $('#spawnBtnArrow').css('display', 'none')
    fadeInFadeOut();
    $('#compactBtnArrow').css('display', 'inline-block');
    for (let i = 0; i < 2; i++) {
        $('#compactBtnArrow').fadeOut(500).fadeIn(500);
    }  
})

$('#compactBtn').on('click', function () {
    fadeInFadeOut()
})