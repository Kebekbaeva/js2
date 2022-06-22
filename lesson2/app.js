let num = 0;

const count = () => {
	num++;
	console.log(num);
	if (num< 100);{
		count()
	}
}