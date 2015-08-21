
function matrix() {

  var arr = '',
      i = 0,
      str = '',
      j;

  while(i < 6000) {
    
    j = 0;
    str = '';

    while(j < 6000) {

      str += 'value:' + j + ',' + 'checked:' + false + '@'; 
      j++;

    }

    arr += str + '#';

    i++;
  }

  console.log('Done processing array');

}

matrix();

