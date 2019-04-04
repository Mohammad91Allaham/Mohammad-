




document.getElementById('plus').addEventListener('click', function () {
    document.getElementById('my-ol').className = 'my-ol-show';
    document.getElementById('plus').className = 'my-plus-hide';
    document.getElementById('dash').className = 'my-dash-show';
   
    

})
document.getElementById('dash').addEventListener('click', function () {
    document.getElementById('my-ol').className = 'my-ol-hide';
    document.getElementById('plus').className = 'my-plus-show';
    document.getElementById('dash').className = 'my-dash-hide';
   
});