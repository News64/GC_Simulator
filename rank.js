function data_prep(){
	var attr_bonus = 1, alm = false;
	for (var i = 0; i < data.length; i++){
		if (data[i].attr != "Naught")
			attr_bonus = 1.15;
		if (data[i].name.search("Archfiend Azi Dahaka") != -1)
			alm = true;

		switch(data[i].attack_skill){
			case ""
		}
	}
}