$('#login-btn').click(()=>{
    if($('#email').val() == 'admin@bloodshare.com' && $('#password').val() == "123456") {
        $('#error-msg').attr('style','display:none');
        window.location.href = 'admin-dashboard.html';
    } else if($('#email').val() == 'user@bloodshare.com' && $('#password').val() == "123456") {
        $('#error-msg').attr('style','display:none');
        window.location.href = 'index.html';
    } else {
        $('#error-msg').attr('style','display:block');
    }
});