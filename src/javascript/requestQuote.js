//Text box if user selects "Other" in quote form
 function CheckStyle(val) {
    var element = document.getElementById('style');
    if (val == 'other')
        element.style.display = 'block';
    else
        element.style.display = 'none';
}