$(function() {
    $('#checked').on('click', function() {
        alert('結帳成功!');
        setTimeout(() => {
            location.href = 'index.html';
        }, 1000);
    })
})