console.log('My code is running!');

let setClass = function (className) {
    document.getElementById('mypara').className = className;
}

let makeWarning = document.getElementById('make-warning');
makeWarning.addEventListener('click', function (event) {
    setClass('warning');
});
let makeTip = document.getElementById('make-tip');
makeTip.addEventListener('click', function (event) {
    setClass('tip');
});
let makeNormal = document.getElementById('make-normal');
makeNormal.addEventListener('click', function (event) {
    setClass('');
});