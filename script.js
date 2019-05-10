var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

const siteGenerator = (arr1,arr2,arr3)=>{
	let result = "";
	for (let i in arr1){
		for (let j in arr2){
			for (let k in arr3){
				result += arr1[i] + arr2[j] + arr3[k] + ".com" + "\n";	
			}
		}
	}

	return result;

}

siteGenerator(pronoun,adj,noun);