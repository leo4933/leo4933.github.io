var items = document.querySelectorAll('.items');
var txt = document.querySelector('#txt');
var names = [];

for (var i = 0; i < items.length; i++) {
  var name = items[i].id;
  names.push(name);
}


txt.onkeyup = function(e) {
    var str = txt.value;
    var results = names.filter(function(item){
        if (item.toLowerCase().indexOf(str.toLowerCase()) > -1) {
            return item;
        }
    });

    for (var i = 0; i < names.length; i++) {
       var n = names[i];
       for (var j = 0; j < results.length; j++) {
        var result = results[j];
        
        if (result == n) {
          items[i].style.display = 'block';
          break;
        }else {
          items[i].style.display = 'none';

        }
       }
    }
}
