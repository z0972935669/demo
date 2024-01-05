$(function() {
    // 手機版分類
    $('#cat_select').on('change', function() {
        if ($(this).val() !== '-1') {
            location.href = 'products.html';
        }
    })
})