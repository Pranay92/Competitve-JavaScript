
function matrix() {
	
	var arr = [],
		i = 0,
		str = '',
		j;

	while(i < 6000) {
		
		j = 0;
		arr[i] = [];

		while(j < 6000) {

			arr[i]['push']({'value' : j,'checked' : false});
			j++;

		}

		i++;
	}

	console.log('Done processing array ' + arr.length);
	// console.log(arr);
}

matrix();