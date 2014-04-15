function $(id) {
	return document.getElementById(id);
}

var storage = window.localStorage;
var complex_upper = storage.getItem('complex_upper');
if(complex_upper == null)
{
    complex_upper = 0.2;
    storage.setItem('complex_upper', 0.2);
}
var complexity = [];
complexity[2] = '初级';
complexity[4] = '中级';
complexity[6] = '高级';
complexity[8] = '砖家';
var opts = '';
for(var i = 2; i < 9; i += 2)
{
    var tmp = "0." + i;
    var selected = '';
    if(complex_upper+'' == tmp)
        selected = 'selected';
    opts += "<option value='" + tmp + "' " + selected + ">" + complexity[i]  + "</option>";
}
$('complexity').innerHTML = opts;
$('complexity').onchange = function() {
    storage.setItem('complex_upper', $('complexity').value);
    window.location.reload();
}
$('chkBtn').onclick = function() {
    sudoku.chkResult();
}

$('nextGame').onclick = function() {
    window.location.reload();
}

