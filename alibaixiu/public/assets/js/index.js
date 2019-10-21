$.ajax({
    type: 'get',
    url: '/posts/count',
    success: function(response) {
        console.log(response);
    }
})