module.exports = function(a){
	return a.filter(function(e,i,b){
		return (i===b.indexOf(e));
	});
};
