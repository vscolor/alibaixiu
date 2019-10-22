$('#logo').on('change', function() {
    var file = this.files[0];
    var formData = new FormData();
    formData.append('logo', file);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            console.log(response);
            $('#hiddenLogo').val(response[0].logo)
        }
    })
});