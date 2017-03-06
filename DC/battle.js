var base_data = [];
var battle_data = [];

var show_log = true;

function generate_table(num_cards){
	for (var i = 1; i <= num_cards; i++){
		document.getElementById('team_table').innerHTML += "<tr id='tr_card_selection" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_filter_attr" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_type_stone" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_card_attr" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_hp_mp" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_atk_def" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_spd_wis" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_alt_skill" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_skill1" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_skill2" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_skill3" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_skill4" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_skill5" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_skill6" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_gear_level" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_line" + i.toString() + "'> </tr>";
	}

	for (var i = 1; i <= num_cards; i++){
		for (var j = 1; j <= 2; j++){
			document.getElementById('tr_card_selection' + i.toString()).innerHTML += "<td> Card " + j.toString() + "." + i.toString() + ": "
				+ "<select id='card"+ j.toString() + "." + i.toString() + "' onchange='update_box("+ j.toString() + ", " + i.toString() + ", 1)'> </select> </td>";
			document.getElementById('tr_filter_attr' + i.toString()).innerHTML += "<td> Filter By Attribute: "
				+ "<select id='filter_attr"+ j.toString() + "." + i.toString() + "' onchange='filter_name("+ j.toString() + ", " + i.toString() + ")'> </select> </td>";
			document.getElementById('tr_type_stone' + i.toString()).innerHTML += "<td> Type: "
				+ "<select id='type" + j.toString() + "." + i.toString() + "' onchange='update_box("+ j.toString() + ", " + i.toString() + ", 0)'> </select> Stone: "
				+ "<select id='stone" + j.toString() + "." + i.toString() + "' onchange='update_box("+ j.toString() + ", " + i.toString() + ", 0)'>" 
				+ "<option value='Full'>Full</option> <option value='None'>None</option> </select> </td>";
			document.getElementById('tr_card_attr' + i.toString()).innerHTML += "<td> Attribute: "
				+ "<select id='attr" + j.toString() + "." + i.toString() + "' onchange='update_box("+ j.toString() + ", " + i.toString() + ", 0)'> </select> "
				+ "<button id='apply" + j.toString() + "." + i.toString() + "' onclick='update_box("+ j.toString() + ", " + i.toString() + ", 2)'>" 
				+ "Re-apply Boosts </button> </td>";
			document.getElementById('tr_hp_mp' + i.toString()).innerHTML += "<td> <input type='text' name='hp" + j.toString() + "." + i.toString() + "' id='hp" + j.toString() + "." + i.toString() + "'>"
				+ "<input type='text' name='mp" + j.toString() + "." + i.toString() + "' id='mp" + j.toString() + "." + i.toString() + "'> </td>";
			document.getElementById('tr_atk_def' + i.toString()).innerHTML += "<td> <input type='text' name='atk" + j.toString() + "." + i.toString() + "' id='atk" + j.toString() + "." + i.toString() + "'>"
				+ "<input type='text' name='def" + j.toString() + "." + i.toString() + "' id='def" + j.toString() + "." + i.toString() + "'> </td>";
			document.getElementById('tr_spd_wis' + i.toString()).innerHTML += "<td> <input type='text' name='spd" + j.toString() + "." + i.toString() + "' id='spd" + j.toString() + "." + i.toString() + "'>"
				+ "<input type='text' name='wis" + j.toString() + "." + i.toString() + "' id='wis" + j.toString() + "." + i.toString() + "'> </td>";
			document.getElementById('tr_alt_skill' + i.toString()).innerHTML += "<td> <span class='words'> Alternative Skill: </span> <span id='alt_skill" + j.toString() + "." + i.toString() + "'> </span> </td>";
			document.getElementById('tr_skill1' + i.toString()).innerHTML += "<td> <span class='words'> Skill 1: </span> " + "<select id='skill1"+ j.toString() + "." + i.toString() + "'> </select> </td>";
			document.getElementById('tr_skill2' + i.toString()).innerHTML += "<td> <span class='words'> Skill 2: </span> " + "<select id='skill2"+ j.toString() + "." + i.toString() + "'> </select> </td>";	
			document.getElementById('tr_skill3' + i.toString()).innerHTML += "<td> <span class='words'> Skill 3: </span> " + "<select id='skill3"+ j.toString() + "." + i.toString() + "'> </select> </td>";
			document.getElementById('tr_skill4' + i.toString()).innerHTML += "<td> <span class='words'> Skill 4: </span> " + "<select id='skill4"+ j.toString() + "." + i.toString() + "'> </select> </td>";
			document.getElementById('tr_skill5' + i.toString()).innerHTML += "<td> <span class='words'> Skill 5: </span> " + "<select id='skill5"+ j.toString() + "." + i.toString() + "'> </select> </td>";
			document.getElementById('tr_skill6' + i.toString()).innerHTML += "<td> <span class='words'> Skill 6: </span> " + "<select id='skill6"+ j.toString() + "." + i.toString() + "'> </select> </td>";
			document.getElementById('tr_gear_level' + i.toString()).innerHTML += "<td> <span class='words'> Gear: </span> " + "<select id='gear"+ j.toString() + "." + i.toString() + "' onchange='update_box("+ j.toString() + ", " + i.toString() + ", 0)'> </select> "
				+ "<select id='gear_lv"+ j.toString() + "." + i.toString() + "' onchange='update_box("+ j.toString() + ", " + i.toString() + ", 0)'> </select> </td>";
			document.getElementById('tr_line' + i.toString()).innerHTML += "<td> ---------------------------- </td>";
		}
	}

}

function init_all(num_cards){
	for (var i = 1; i <= num_cards; i++)
		for (var j = 1; j <= 2; j++)
			init_list(j, i);
}


function init_list(team_num, card_num){
	var card = 'card' + team_num.toString() + '.' + card_num.toString();
	var type = 'type' + team_num.toString() + '.' + card_num.toString();
	var attr = 'attr' + team_num.toString() + '.' + card_num.toString();
	var filter_attr = 'filter_attr' + team_num.toString() + '.' + card_num.toString();
	var skill = [
		'skill1' + team_num.toString() + '.' + card_num.toString(),
		'skill2' + team_num.toString() + '.' + card_num.toString(),
		'skill3' + team_num.toString() + '.' + card_num.toString(),
		'skill4' + team_num.toString() + '.' + card_num.toString(),
		'skill5' + team_num.toString() + '.' + card_num.toString(),
		'skill6' + team_num.toString() + '.' + card_num.toString(),
	];
	var gear = 'gear' + team_num.toString() + '.' + card_num.toString();
	var gear_lv = 'gear_lv' + team_num.toString() + '.' + card_num.toString();
	
	var list, list2, option, text, count;

	// Init Names
	list = document.getElementById(card);
	count = data.length;
	for (var i = 0; i < count; i++){
		option = document.createElement("option");
		option.value = data[i].name;
		option.text = data[i].name;
		list.appendChild(option);
	}

	// Init Types
	list = document.getElementById(type);
	for (var i = 0; i < 8; i++){
		option = document.createElement("option");
		switch (i){
			case 0: text = 'クール / Average'; break;
			case 1: text = 'バイタル / Fresh'; break;
			case 2: text = 'クレバー / Mental'; break;
			case 3: text = 'フォース / Strong'; break;
			case 4: text = 'ソリッド / Tough'; break;
			case 5: text = 'クイック / Quick'; break;
			case 6: text = 'スマート / Smart'; break;
			case 7: text = 'エース / Perfect'; break;
			default: text = 'クール / Average'; 
		}
		option.value = text;
		option.text = text;
		list.appendChild(option);
	}

	// Init Attributes
	list = document.getElementById(attr);
	list2 = document.getElementById(filter_attr);
	option = document.createElement("option");
	option.value = "None";
	option.text = "None";
	list2.appendChild(option);
	count = attributes.length;
	for (var i = 0; i < count; i++){
		option = document.createElement("option");
		option.value = attributes[i];
		option.text = attributes[i];
		list.appendChild(option);
		option = document.createElement("option");
		option.value = attributes[i];
		option.text = attributes[i];
		list2.appendChild(option);
	}

	// Init All Skills
	count = all_skills.length;
	for (var i = 0; i < 6; i++){
		list = document.getElementById(skill[i]);
		for (var j = 0; j < count; j++){
			option = document.createElement("option");
			option.value = all_skills[j];
			option.text = all_skills[j];
			list.appendChild(option);
		}
	}

	list = document.getElementById(gear);
	count = gears.length;
	for (var i = 0; i < count; i++){
		option = document.createElement("option");
		option.value = gears[i];
		option.text = gears[i];
		list.appendChild(option);
	}

	list = document.getElementById(gear_lv);
	for (var i = 0; i <= 20; i++){
		option = document.createElement("option");
		option.value = i;
		option.text = i.toString();
		list.appendChild(option);
	}

	if (team_num == 1 && card_num == 1){
		list = document.getElementById('num_cards');
		for (var j = 1; j <= 10; j++){
			option = document.createElement("option");
			option.value = j.toString();
			option.text = j.toString();
			list.appendChild(option);
		}
	}

	// Initial Box Values
	update_box(team_num, card_num, 1);
}

function filter_name(team_num, card_num){
	var list = document.getElementById("card" + team_num.toString() + "." + card_num.toString());

	for (var i = list.length - 1; i >= 0; i--)
		list.remove(i);

	var attr = document.getElementById("filter_attr" + team_num.toString() + "." + card_num.toString()).value;
	var count = data.length;
	for (var i = 0; i < count; i++){
		if (attr != data[i].attr && attr != "None")
			continue;
		option = document.createElement("option");
		option.value = data[i].name;
		option.text = data[i].name;
		list.appendChild(option);
	}

	if (document.getElementById("card" + team_num.toString() + "." + card_num.toString()).length > 0)
		update_box(team_num, card_num, 1);
}


function update_all(num_cards, team_num, mode){
	for (var i = 1; i <= num_cards; i++)
		update_box(team_num, i, mode);
}

function update_box(team_num, card_num, mode){
	var card = 'card' + team_num.toString() + '.' + card_num.toString();
	var type = 'type' + team_num.toString() + '.' + card_num.toString();
	var stone = 'stone' + team_num.toString() + '.' + card_num.toString();
	var attr = 'attr' + team_num.toString() + '.' + card_num.toString();
	var hp = 'hp' + team_num.toString() + '.' + card_num.toString();
	var mp = 'mp' + team_num.toString() + '.' + card_num.toString();
	var atk = 'atk' + team_num.toString() + '.' + card_num.toString();
	var def = 'def' + team_num.toString() + '.' + card_num.toString();
	var spd = 'spd' + team_num.toString() + '.' + card_num.toString();
	var wis = 'wis' + team_num.toString() + '.' + card_num.toString();
	var filter_attr = 'filter_attr' + team_num.toString() + '.' + card_num.toString();
	var alt_skill = 'alt_skill' + team_num.toString() + '.' + card_num.toString();
	var skill = [
		'skill1' + team_num.toString() + '.' + card_num.toString(),
		'skill2' + team_num.toString() + '.' + card_num.toString(),
		'skill3' + team_num.toString() + '.' + card_num.toString(),
		'skill4' + team_num.toString() + '.' + card_num.toString(),
		'skill5' + team_num.toString() + '.' + card_num.toString(),
		'skill6' + team_num.toString() + '.' + card_num.toString(),
	];
	var gear = 'gear' + team_num.toString() + '.' + card_num.toString();
	var gear_lv = 'gear_lv' + team_num.toString() + '.' + card_num.toString();

	var hp_rate, mp_rate, atk_rate, def_rate, spd_rate, wis_rate;

	switch (document.getElementById(type).value){
		case "クール / Cool": hp_rate = 1.0, mp_rate = 1.0, atk_rate = 1.0, def_rate = 1.0, spd_rate = 1.0, wis_rate = 1.0; break; 
		case "バイタル / Fresh": hp_rate = 1.1, mp_rate = 1.0, atk_rate = 1.0, def_rate = 1.0, spd_rate = 0.95, wis_rate = 1.0; break; 
		case "クレバー / Mental": hp_rate = 1.0, mp_rate = 1.1, atk_rate = 0.95, def_rate = 1.0, spd_rate = 1.0, wis_rate = 1.0; break; 
		case "フォース / Strong": hp_rate = 1.0, mp_rate = 1.0, atk_rate = 1.1, def_rate = 1.0, spd_rate = 1.0, wis_rate = 0.95; break; 
		case "ソリッド / Tough": hp_rate = 1.0, mp_rate = 0.95, atk_rate = 1.0, def_rate = 1.1, spd_rate = 1.0, wis_rate = 1.0; break; 
		case "クイック / Quick": hp_rate = 0.95, mp_rate = 1.0, atk_rate = 1.0, def_rate = 1.0, spd_rate = 1.1, wis_rate = 1.0; break; 
		case "スマート / Smart": hp_rate = 1.0, mp_rate = 1.0, atk_rate = 1.0, def_rate = 0.95, spd_rate = 1.0, wis_rate = 1.1; break; 
		case "エース / Perfect": hp_rate = 1.1, mp_rate = 1.1, atk_rate = 1.1, def_rate = 1.1, spd_rate = 1.1, wis_rate = 1.1; break; 
		default: hp_rate = 1.0, mp_rate = 1.0, atk_rate = 1.0, def_rate = 1.0, spd_rate = 1.0, wis_rate = 1.0; 
	}


	var count = data.length;
	var skill_count;
	var ok;
	var stone_rate = 0;

	if (document.getElementById(stone).value == "Full")
		stone_rate = 1;
	else
		stone_rate = 0;

	if (mode != 2){
		for (var i = 0; i < count; i++){
			if (data[i].name == document.getElementById(card).value){

				document.getElementById(hp).value = Math.floor((data[i].hp * (1 + 1.5 / 59 * 69) * hp_rate + data[i].hp * (0.2 + 0.3 / 59 * 69) * stone_rate) ).toString();
				document.getElementById(mp).value = Math.floor((data[i].mp * (1 + 1.5 / 59 * 69) * mp_rate + data[i].mp * (0.2 + 0.3 / 59 * 69) * stone_rate) ).toString();
				document.getElementById(atk).value = Math.floor((data[i].atk * (1 + 1.5 / 59 * 69) * atk_rate + data[i].atk * (0.2 + 0.3 / 59 * 69) * stone_rate) ).toString();
				document.getElementById(def).value = Math.floor((data[i].def * (1 + 1.5 / 59 * 69) * def_rate + data[i].def * (0.2 + 0.3 / 59 * 69) * stone_rate) ).toString();
				document.getElementById(spd).value = Math.floor((data[i].spd * (1 + 1.5 / 59 * 69) * spd_rate + data[i].spd * (0.2 + 0.3 / 59 * 69) * stone_rate) ).toString();
				document.getElementById(wis).value = Math.floor((data[i].wis * (1 + 1.5 / 59 * 69) * wis_rate + data[i].wis * (0.2 + 0.3 / 59 * 69) * stone_rate) ).toString();

				if (mode != 0){
					skill_count = document.getElementById(attr).options.length;
					for (var j = 0; j < skill_count; j++){
						if (document.getElementById(attr).options[j].value == data[i].attr){
							document.getElementById(attr).options[j].selected = true;
							break;
						}
					}
				}

				for (var j = 0; j < 6; j++){
					skill_count = document.getElementById(skill[0]).options.length;
					for (var k = 0; k < skill_count; k++){
						if (document.getElementById(skill[j]).options[k].value == data[i].skill[j]){
							document.getElementById(skill[j]).options[k].selected = true;
							break;
						}
					}
				}

				if (data[i].hasOwnProperty("alt_skill")){
					document.getElementById(alt_skill).innerHTML = data[i].alt_skill;
				}
				else
					document.getElementById(alt_skill).innerHTML = "";

				break;
			}
		}
	}

	// Apply Gear Boosts on stats
	//var hp_boost = 1.0, mp_boost = 1.0, atk_boost = 1.0, def_boost = 1.0, spd_boost = 1.0, wis_boost = 1.0;
	var hp_ratio = 1.0, mp_ratio = 1.0, atk_ratio = 1.0, def_ratio = 1.0, spd_ratio = 1.0, wis_ratio = 1.0;
	var hp_fixed = 0, mp_fixed = 0, atk_fixed = 0, def_fixed = 0, spd_fixed = 0, wis_fixed = 0;
	var up_ratio = 0.0, up_fixed = 0;
	var gear_name = document.getElementById(gear).value;
	var gear_lv_value = Math.floor(parseInt(document.getElementById(gear_lv).value));
	if (gear_name.search("Earring") != -1){
		up_fixed = 100 + 10 * gear_lv_value;

		if (gear_lv_value == 0)
			up_fixed = 0;

		if (gear_name.search("Fresh") != -1) hp_fixed = up_fixed;
		else if (gear_name.search("Mental") != -1) mp_fixed = up_fixed;
		else if (gear_name.search("Strong") != -1) atk_fixed = up_fixed;
		else if (gear_name.search("Tough") != -1) def_fixed = up_fixed;
		else if (gear_name.search("Quick") != -1) spd_fixed = up_fixed;
		else if (gear_name.search("Smart") != -1) wis_fixed = up_fixed;
	}
	else if (gear_name.search("Ring") != -1){
		up_ratio = 0.005 * gear_lv_value;
		if (gear_name.search("Fresh") != -1) hp_ratio += up_ratio;
		else if (gear_name.search("Mental") != -1) mp_ratio += up_ratio;
		else if (gear_name.search("Strong") != -1) atk_ratio += up_ratio;
		else if (gear_name.search("Tough") != -1) def_ratio += up_ratio;
		else if (gear_name.search("Quick") != -1) spd_ratio += up_ratio;
		else if (gear_name.search("Smart") != -1) wis_ratio += up_ratio;
	}
	else if (gear_name.search("SPD") != -1){
		up_fixed = 100 + 5 * gear_lv_value;

		if (gear_lv_value == 0)
			up_fixed = 0;

		spd_fixed = up_fixed;
		if (gear_name.search("ATK") != -1) atk_fixed = up_fixed;
		else wis_fixed = up_fixed;
	}
	else if (gear_name.search("All Stats") != -1){
		up_fixed = 50 + 2 * gear_lv_value;

		if (gear_lv_value == 0)
			up_fixed = 0;
		hp_fixed = up_fixed;
		mp_fixed = up_fixed;
		atk_fixed = up_fixed;
		def_fixed = up_fixed;
		spd_fixed = up_fixed;
		wis_fixed = up_fixed;
	}
	
	

	document.getElementById(hp).value = Math.floor(parseInt(document.getElementById(hp).value) * hp_ratio + hp_fixed).toString();
	document.getElementById(mp).value = Math.floor(parseInt(document.getElementById(mp).value) * mp_ratio + mp_fixed).toString();
	document.getElementById(atk).value = Math.floor(parseInt(document.getElementById(atk).value) * atk_ratio + atk_fixed).toString();
	document.getElementById(def).value = Math.floor(parseInt(document.getElementById(def).value) * def_ratio + def_fixed).toString();
	document.getElementById(spd).value = Math.floor(parseInt(document.getElementById(spd).value) * spd_ratio + spd_fixed).toString();
	document.getElementById(wis).value = Math.floor(parseInt(document.getElementById(wis).value) * wis_ratio + wis_fixed).toString();
}



function show_details(){
	var words = document.getElementsByClassName('words');
	for (var i = 0; i < words.length; i++){
		words[i].style.display = "inline";
	}
	for (var i = 1; i <= 10; i++){
		for (var j = 1; j <= 2; j++){
			document.getElementById('hp' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('mp' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('atk' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('def' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('spd' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('wis' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('alt_skill' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('skill1' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('skill2' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('skill3' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('skill4' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('skill5' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('skill6' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('gear' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('gear_lv' + j.toString() + '.' + i.toString()).style.display = "inline";
		}
	}
}

function hide_details(){
	var words = document.getElementsByClassName('words');
	for (var i = 0; i < words.length; i++){
		words[i].style.display = "none";
	}
	for (var i = 1; i <= 10; i++){
		for (var j = 1; j <= 2; j++){
			document.getElementById('hp' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('mp' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('atk' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('def' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('spd' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('wis' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('alt_skill' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('skill1' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('skill2' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('skill3' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('skill4' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('skill5' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('skill6' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('gear' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('gear_lv' + j.toString() + '.' + i.toString()).style.display = "none";
		}
	}
}

function save_deck(num_cards, team_num, mode){
	// mode 0 = local, mode 1 = cookie
	var curr_data = [], temp, JSON_target;
	for (var i = 1; i <= num_cards; i++){
		temp = [
			document.getElementById('card' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('type' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('attr' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('hp' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('mp' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('atk' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('def' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('spd' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('wis' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('skill1' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('skill2' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('skill3' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('skill4' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('skill5' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('skill6' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('gear' + team_num.toString() + '.' + i.toString()).value,
			document.getElementById('gear_lv' + team_num.toString() + '.' + i.toString()).value
		];
		curr_data.push(temp);
	}
	JSON_target = JSON.stringify(curr_data);
	
	if (mode == 0){
		var uriContent = "data:application/octet-stream," + encodeURIComponent(JSON_target);
		var newWindow = window.open(uriContent, 'Saved!');
	}
	else if (mode == 1){
		setCookie(document.getElementById('deckname_' + team_num.toString()).value, JSON_target, 365 * 10);
	}
}

function load_file(event, team_num){
	var input = event.target;

	var reader = new FileReader();
	reader.onload = function(){
		var dataURL = reader.result;
		var curr_data = JSON.parse(dataURL);

    	for (var i = 0; i < 10; i++){
    		document.getElementById('card' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][0];
    		document.getElementById('type' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][1];
    		document.getElementById('attr' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][2];
    		document.getElementById('hp' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][3];
    		document.getElementById('mp' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][4];
    		document.getElementById('atk' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][5];
    		document.getElementById('def' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][6];
    		document.getElementById('spd' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][7];
    		document.getElementById('wis' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][8];
    		document.getElementById('skill1' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][9];
    		document.getElementById('skill2' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][10];
    		document.getElementById('skill3' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][11];
    		document.getElementById('skill4' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][12];
    		document.getElementById('skill5' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][13];
    		document.getElementById('skill6' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][14];
    		document.getElementById('gear' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][15];
    		document.getElementById('gear_lv' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][16];
    	}
	};
    
    reader.readAsText(input.files[0]);
}

function load_cookie(team_num){
	var name = document.getElementById('loadname_'+ team_num.toString()).value;
    var res = checkCookie(name);
    
    if (res == "")
    	return;

    res = JSON.parse(res);

    for (var i = 0; i < 10; i++){
    	document.getElementById('card' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][0];
    	document.getElementById('type' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][1];
    	document.getElementById('attr' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][2];
    	document.getElementById('hp' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][3];
    	document.getElementById('mp' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][4];
    	document.getElementById('atk' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][5];
    	document.getElementById('def' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][6];
    	document.getElementById('spd' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][7];
   		document.getElementById('wis' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][8];
   		document.getElementById('skill1' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][9];
   		document.getElementById('skill2' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][10];
   		document.getElementById('skill3' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][11];
   		document.getElementById('skill4' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][12];
   		document.getElementById('skill5' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][13];
   		document.getElementById('skill6' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][14];
   		document.getElementById('gear' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][15];
   		document.getElementById('gear_lv' + team_num.toString() + '.' + (i + 1).toString()).value = curr_data[i][16];
   	}
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}








function attr_cmp(a, b){
	if (a == "中性型 / Voider" || b == "中性型 / Voider") return 0;
	if (a == b) return -1;
	switch (a){
		case "発熱型 / Burner": if(b == "冷却型 / Chiller" || b == "猛毒型 / Spitter") return -1; if(b == "共鳴型 / Screamer" || b == "誘惑型 / Charmer") return 1; return 0;
        case "冷却型 / Chiller": if(b == "放電型 / Shocker" || b == "猛毒型 / Spitter") return -1; if(b == "発熱型 / Burner" || b == "寄生型 / Leecher") return 1; return 0;
        case "疾風型 / Slasher": if(b == "共鳴型 / Screamer" || b == "寄生型 / Leecher") return -1; if(b == "放電型 / Shocker" || b == "猛毒型 / Spitter") return 1; return 0;
        case "放電型 / Shocker": if(b == "疾風型 / Slasher" || b == "共鳴型 / Screamer") return -1; if(b == "冷却型 / Chiller" || b == "寄生型 / Leecher") return 1; return 0;
        case "共鳴型 / Screamer": if(b == "発熱型 / Burner" || b == "誘惑型 / Charmer") return -1; if(b == "疾風型 / Slasher" || b == "放電型 / Shocker") return 1; return 0;
        case "猛毒型 / Spitter": if(b == "疾風型 / Slasher" || b == "誘惑型 / Charmer") return -1; if(b == "発熱型 / Burner" || b == "冷却型 / Chiller") return 1; return 0;
        case "誘惑型 / Charmer": if(b == "発熱型 / Burner" || b == "寄生型 / Leecher") return -1; if(b == "共鳴型 / Screamer" || b == "猛毒型 / Spitter") return 1; return 0;
        case "寄生型 / Leecher": if(b == "冷却型 / Chiller" || b == "放電型 / Shocker") return -1; if(b == "誘惑型 / Charmer" || b == "疾風型 / Slasher") return 1; return 0;
        default: return 0;
	}
}

function buff_apply(id1, id2, stat, rate){

	var real_rate;
	if (stat == 'ATK'){
		if (rate > 0){
			battle_data[id1].atk_buff += rate;
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ")'s " + stat + " is increased by "
				+ Math.floor(base_data[id1].atk * rate).toString() + "! <br>";
		}
		else{
			rate = -rate;
			if (rate + battle_data[id2].atk_debuff <= 0.5){
				battle_data[id2].atk_debuff += rate;
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[id2].card + " (Team " + (id2 + 1).toString() + ")'s " + stat + " is decreased by "
					 + Math.floor(base_data[id2].atk * rate).toString() + "! <br>";
			}
			else {
				real_rate = 0.5 - battle_data[id2].atk_debuff;
				battle_data[id2].atk_debuff = 0.5;
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id2 + 1).toString() + ")'s " + stat + " is decreased by "
					 + Math.floor(base_data[id2].atk * real_rate).toString() + "! <br>";
			}
		}
	}
	else if (stat == 'DEF'){
		if (rate > 0){
			battle_data[id1].def_buff += rate;
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ")'s " + stat + " is increased by "
				+ Math.floor(base_data[id1].def * rate).toString() + "! <br>";
		}
		else{
			rate = -rate;
			if (rate + battle_data[id2].def_debuff <= 0.5){
				battle_data[id2].def_debuff += rate;
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[id2].card + " (Team " + (id2 + 1).toString() + ")'s " + stat + " is decreased by "
					 + Math.floor(base_data[id2].def * rate).toString() + "! <br>";
			}
			else {
				real_rate = 0.5 - battle_data[id2].def_debuff;
				battle_data[id2].def_debuff = 0.5;
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id2 + 1).toString() + ")'s " + stat + " is decreased by "
					 + Math.floor(base_data[id2].def * real_rate).toString() + "! <br>";
			}
		}
	}
	else if (stat == 'SPD'){
		if (rate > 0){
			battle_data[id1].spd_buff += rate;
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ")'s " + stat + " is increased by "
				+ Math.floor(base_data[id1].spd * rate).toString() + "! <br>";
		}
		else{
			rate = -rate;
			if (rate + battle_data[id2].spd_debuff <= 0.5){
				battle_data[id2].spd_debuff += rate;
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[id2].card + " (Team " + (id2 + 1).toString() + ")'s " + stat + " is decreased by "
					 + Math.floor(base_data[id2].spd * rate).toString() + "! <br>";
			}
			else {
				real_rate = 0.5 - battle_data[id2].spd_debuff;
				battle_data[id2].spd_debuff = 0.5;
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id2 + 1).toString() + ")'s " + stat + " is decreased by "
					 + Math.floor(base_data[id2].spd * real_rate).toString() + "! <br>";
			}
		}
	}
	else if (stat == 'WIS'){
		if (rate > 0){
			battle_data[id1].wis_buff += rate;
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ")'s " + stat + " is increased by "
				+ Math.floor(base_data[id1].wis * rate).toString() + "! <br>";
		}
		else{
			rate = -rate;
			if (rate + battle_data[id2].wis_debuff <= 0.5){
				battle_data[id2].wis_debuff += rate;
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[id2].card + " (Team " + (id2 + 1).toString() + ")'s " + stat + " is decreased by "
					 + Math.floor(base_data[id2].wis * rate).toString() + "! <br>";
			}
			else {
				real_rate = 0.5 - battle_data[id2].wis_debuff;
				battle_data[id2].wis_debuff = 0.5;
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id2 + 1).toString() + ")'s " + stat + " is decreased by "
					 + Math.floor(base_data[id2].wis * real_rate).toString() + "! <br>";
			}
		}
	}
}

function damage_dealer(id1, id2, attack_skill, attack_attr, dmg_rate, reduc_rate, fixed, real_or_not){
	var damage = 0, chance = 0, dodge_chance = 0, attr_adv, extra_curse = 0;
	var insta_death = false, dodged = false, undead = false, blocked = false, curse = false;
	var temp = 0;

	if (attack_attr == "None"){
		damage = Math.floor(fixed);
	}
	else if(attack_attr == "Physical"){
		if (attack_skill.search("Triple Threat") != -1){
			damage = Math.floor( (base_data[id1].atk) * (1.5 + battle_data[id1].atk_buff - battle_data[id1].atk_debuff)
				   - (base_data[id2].def) * (1 + battle_data[id2].def_buff - battle_data[id2].def_debuff) * 0.5);

			chance = damage / battle_data[id2].hp_left;
			if (chance > 0.85)
				chance = 0.85;
			if (base_data[id1].gear.search("Triple Threat Success Rate +") != -1)
				chance += base_data[id1].gear_lv * 0.0025;

			if (Math.random() < chance){
				insta_death = true;
			}
			else{
				damage = Math.floor( (base_data[id1].atk) * (1.12 + battle_data[id1].atk_buff - battle_data[id1].atk_debuff)
				   - (base_data[id2].def) * (1 + battle_data[id2].def_buff - battle_data[id2].def_debuff) * 0.5);

				if (base_data[id1].gear.search("Triple Threat Damage +") != -1)
					damage = Math.floor(damage * (1 + 0.015 * base_data[id1].gear_lv));
			}
		}
		else{
			damage = Math.floor( (base_data[id1].atk) * (dmg_rate + battle_data[id1].atk_buff - battle_data[id1].atk_debuff)
				   - (base_data[id2].def) * (1 + battle_data[id2].def_buff - battle_data[id2].def_debuff) * reduc_rate);

			if ((attack_skill.search("Blood Strike") != -1 && base_data[id1].gear.search("Blood Strike Damage +") != -1) ||
				(attack_skill.search("Transfusion") != -1 && base_data[id1].gear.search("Transfusion Damage +") != -1) ||
				(attack_skill.search("Poison Attack") != -1 && base_data[id1].gear.search("Poison Attack Damage +") != -1) ||
				(attack_skill.search("Twin Ripper") != -1 && base_data[id1].gear.search("Twin Ripper Damage +") != -1))
				damage = Math.floor(damage * (1 + 0.01 * base_data[id1].gear_lv));
		}
	}
	else{
		attr_adv = attr_cmp(attack_attr, base_data[id2].attr);
		damage = Math.floor( (base_data[id1].wis) * (dmg_rate + battle_data[id1].wis_buff - battle_data[id1].wis_debuff) * (1 + attr_adv * 0.15)
					- (base_data[id2].wis) * (1 + battle_data[id2].wis_buff - battle_data[id2].wis_debuff) * reduc_rate);


		// Double Binder/ Gear
		if (battle_data[id2].double_binder[0] == attack_attr || battle_data[id2].double_binder[1] == attack_attr)
			damage /= 2;
		if (attack_skill.search("Quick Thinking") == -1 &&
			( (base_data[id1].gear.search("Burner Damage +") != -1 && attack_attr.search("Burner") != -1) || 
				(base_data[id1].gear.search("Chiller Damage +") != -1 && attack_attr.search("Chiller") != -1) || 
				(base_data[id1].gear.search("Slasher Damage +") != -1 && attack_attr.search("Slasher") != -1) || 
				(base_data[id1].gear.search("Shocker Damage +") != -1 && attack_attr.search("Shocker") != -1) || 
				(base_data[id1].gear.search("Screamer Damage +") != -1 && attack_attr.search("Screamer") != -1) || 
				(base_data[id1].gear.search("Spitter Damage +") != -1 && attack_attr.search("Spitter") != -1) || 
				(base_data[id1].gear.search("Leecher Damage +") != -1 && attack_attr.search("Leecher") != -1) ))
			damage = Math.floor(damage * (1 + 0.0125 * base_data[id1].gear_lv));
		if (attack_skill.search("Quick Thinking") == -1 &&
			( (base_data[id1].gear.search("Chiller +") != -1 && attack_attr.search("Chiller") != -1) || 
				(base_data[id1].gear.search("Slasher +") != -1 && attack_attr.search("Slasher") != -1) || 
				(base_data[id1].gear.search("Screamer +") != -1 && attack_attr.search("Screamer") != -1) ))
			damage = Math.floor(damage * (1 + 0.0075 * base_data[id1].gear_lv));
		if ( (base_data[id2].gear.search("Leecher -") != -1 && attack_attr.search("Leecher") != -1) || 
				(base_data[id2].gear.search("Spitter -") != -1 && attack_attr.search("Spitter") != -1) || 
				(base_data[id2].gear.search("Shocker -") != -1 && attack_attr.search("Shocker") != -1) )
			damage = Math.floor(damage * 0.9);


		// Charmer 
		if (attack_attr.search("Charmer") != -1){
			undead = true;
			chance = damage / battle_data[id2].hp_left;
			temp = attack_skill.length - 1;

			if (attack_skill.search("Double") != -1){
				if (chance > 0.8)
					chance = 0.8;
			}
			else if (chance > 0.5 + parseInt(attack_skill.charAt(temp)) * 0.1)
				chance = 0.5 + parseInt(attack_skill.charAt(temp)) * 0.1;

			if (base_data[id1].gear.search("Charmer Success Rate +") != -1)
				chance += base_data[id1].gear_lv * 0.0025;

			if (Math.random() < chance){
				insta_death = true;
			}
		}
	}

	if (damage < 0)
		damage = 1;

	if (real_or_not ==  true){		
		if (insta_death == true){
			battle_data[id2].hp_left = 0;
			damage = 0;
		}
		if (attack_attr.search("Charmer") != -1)
			damage = 0;
				
		battle_data[id2].hp_left -= damage;
		
		if (damage != 0){
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ") deals " + damage.toString() + " damage to " 
					+ base_data[id2].card + " (Team " + (id2 + 1).toString() + ")! HP: " + battle_data[id2].hp_left + "/" + base_data[id2].hp + " <br>";
			if (attack_skill.search("Poison Attack") != -1 && battle_data[id2].hp_left > 0){
				chance = 0.5;
				if (base_data[id1].gear.search("Poison Attack Success Rate +") != -1)
					chance += 0.01 * base_data[id1].gear_lv;

				if (Math.random() < chance){
					battle_data[id2].poisoned = true;
					if (show_log == true)
						document.getElementById('res').innerHTML += base_data[id2].card + " (Team " + (id2 + 1).toString() + ") is poisoned! (Chance: " + chance.toString() + ") <br>";
				}
			}
		}
		else{
			if (attack_attr.search("Charmer") != -1){
				if (insta_death == true){
					if (show_log == true)
						document.getElementById('res').innerHTML += "Death effect succeeds on " + base_data[id2].card + " (Team " + (id2 + 1).toString() + ")! (Chance: " + chance.toString() + ") <br>";
				}
				else
					if (show_log == true)
						document.getElementById('res').innerHTML += "Death effect does not work on " + base_data[id2].card + " (Team " + (id2 + 1).toString() + ")! (Chance: " + (1 - chance).toString() + ")<br>";
			}
			else if (attack_skill.search("Triple Threat") != -1){
				if (insta_death == true){
					if (show_log == true)
						document.getElementById('res').innerHTML += "Death effect succeeds on " + base_data[id2].card + " (Team " + (id2 + 1).toString() + ")! (Chance: " + chance.toString() + ") <br>";
				}
			}
		}
	}
	else{
		if ( (attack_skill.search("Triple Threat") != -1 && insta_death == true) || attack_attr.search("Charmer") != -1)
			damage = battle_data[id2].hp_left;
	}

	return damage;
}


function mp_damage_dealer(id1, id2, attack_skill, attack_attr, dmg_rate, reduc_rate, percentage, fixed){
	var damage, attr_adv;
	if (fixed != 0)
		damage = fixed;
	else if (percentage != 0)
		damage = Math.floor(base_data[id2].mp * percentage);
	else{
		attr_adv = attr_cmp(attack_attr, base_data[id2].attr);
		damage = Math.floor(base_data[id1].wis * (dmg_rate + battle_data[id1].wis_buff - battle_data[id1].wis_debuff) * (1 + attr_adv * 0.15)
			   - base_data[id2].wis * (1 + battle_data[id2].wis_buff - battle_data[id2].wis_debuff) * reduc_rate);
	}
	
	if (damage < 0)
		damage = 0;

	battle_data[id2].mp_left -= damage;
	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ") deals " + damage.toString() + " MP damage to " + base_data[id2].card + " (Team " + (id2 + 1).toString() + ")! MP: " + battle_data[id2].mp_left + "/" + base_data[id2].mp + " <br>";
	return damage;
}


function death_proc(id1, id2, attack_skill, pre_hp){
	var mp_cost, threshold;
	var revival_proc;

	// Revival
	for (var i = 0; i < 3; i++){
		if (base_data[id1].skill[i].search("Revival") != -1){
			revival_proc = revival_apply(id1, i, base_data[id1].skill[i]);
			if (revival_proc == 1)
				return 1;
		}
	}

	// Last Stand
	threshold = 0.1;
	if (base_data[id1].gear.search("Survive Condition +") != -1)
		threshold -= 0.0025 * base_data[id1].gear_lv;
	if (pre_hp / base_data[id1].hp > threshold)
		for (var i = 0; i < 3; i++){
			if (base_data[id1].skill[i].search("Survive") != -1){
				revival_proc = survive_apply(id1, i, base_data[id1].skill[i]);
				if (revival_proc == 1)
					return 1;
			}
		}

	// Beat Down Effect
	mp_cost = 300;
	if (battle_data[id1].pressure == true)
		mp_cost *= 2;
	if (base_data[id1].gear.search("All Cost -") != -1)
		mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[id1].gear_lv));

	for (var i = 0; i < 3; i++){
		if (battle_data[id2].mp_left < mp_cost)
			break;

		if (base_data[id2].skill[i].search("Sadist") != -1 && battle_data[id2].skill_used[i] < 2){
			battle_data[id2].mp_left -= mp_cost;
			battle_data[id2].skill_used[i]++;

			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[id2].card + " (Team " + (id2 + 1).toString() + ") uses " + base_data[id2].skill[i] + "! <br>";
			
			buff_apply(id2, id1, "ATK", 0.3);
			continue;
		}

		if (base_data[id2].skill[i].search("Psychopath") != -1 && battle_data[id2].skill_used[i] < 2){
			battle_data[id2].mp_left -= mp_cost;
			battle_data[id2].skill_used[i]++;

			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[id2].card + " (Team " + (id2 + 1).toString() + ") uses " + base_data[id2].skill[i] + "! <br>";
			
			buff_apply(id2, id1, "SPD", 0.3);
			battle_data[id2].exceeded_speed = Math.floor((base_data[id2].spd) * (1 + battle_data[id2].spd_buff - battle_data[id2].spd_debuff));
			continue;
		}
	}

	// Last Cloud
	for (var i = 0; i < 3; i++){
		if (base_data[id1].skill[i].search("Last Cloud") != -1){
			death_status_apply(id1, id2, base_data[id1].skill[i]);
		}
	}

	// Self Destruct
	for (var i = 0; i < 3; i++){
		if (base_data[id1].skill[i].search("Synchro") != -1 || base_data[id1].skill[i].search("Brain Death") != -1){
			death_damage_apply(id1, id2, base_data[id1].skill[i]);
		}
	}

	return 0;
}

function revival_apply(id, skill_id, name){
	var mp_cost = 1;
	if (battle_data[id].pressure == true)
		mp_cost *= 2;

	if (name.search("Free") == -1 && battle_data[id].mp_left < mp_cost)
		return 0;

	var chance;
	var max_revival = 1;

	if (name.search("Double") != -1)
		max_revival++;
	if (battle_data[id].skill_used[skill_id] >= max_revival)
		return 0;
	else
		battle_data[id].skill_used[skill_id]++;


	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") uses " + name + "! <br>";
	


	if (name.search("Holy") != -1)
		chance = 0.55;
	else
		chance = 0.5;

	if (base_data[id].gear.search("Revival Success Rate +") != -1){
		if ((base_data[id].gear.search("Full") != -1 && name.search("Full") != -1) || (base_data[id].gear.search("Full") == -1 && name.search("Full") == -1))
			chance += 0.01 * base_data[id].gear_lv;
	}

	if (Math.random() < chance){		
		if (name.search("Full") != -1){
			battle_data[id].hp_left = base_data[id].hp;
			battle_data[id].mp_left = 0;
		}
		else{
			battle_data[id].hp_left = Math.floor(base_data[id].hp * 0.5);
			battle_data[id].mp_left -= mp_cost;
		}

		if (show_log == true)
			document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") revives! (Chance: " + chance.toString() + ") <br>";

		return 1;
	}
	else{
		if (show_log == true)
			document.getElementById('res').innerHTML += "But it failed! (Chance: " + (1 - chance).toString() + ") <br>";
		return -1;
	}

}

function survive_apply(id, name){
	var mp_cost = 1;
	if (battle_data[id].pressure == true)
		mp_cost *= 2;

	if (name.search("Free") == -1 && battle_data[id].mp_left < mp_cost)
		return 0;

	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") uses Survive! <br>";
	
	var chance = 0.7;
	if (base_data[id1].gear.search("Survive Success Rate +") != -1)
		chance += 0.005 * base_data[id1].gear_lv;

	if (Math.random() < chance){
		battle_data[id].hp_left = 1;
		battle_data[id].mp_left = 0;
		if (show_log == true)
			document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") survives! (Chance: " + chance.toString() + ") <br>";
		return 1;
	}
	else{
		if (show_log == true)
			document.getElementById('res').innerHTML += "But it failed! (Chance: " + (1 - chance).toString() + ") <br>";
		return -1;
	}
}

function death_status_apply(id1, id2, skill){
	var mp_cost = 400;
	if (battle_data[id1].pressure == true)
		mp_cost *= 2;
	if (base_data[id1].gear.search("All Cost -") != -1)
		mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[id1].gear_lv));

	if (battle_data[id1].mp_left < mp_cost)
		return
	else
		battle_data[id1].mp_left -= mp_cost;

	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ") uses " + skill + "! <br>";
	
	if (battle_data[id2].cleanness == false){
		buff_apply(id1, id2, "ATK", -0.15);
		buff_apply(id1, id2, "DEF", -0.15);
		buff_apply(id1, id2, "SPD", -0.15);
		buff_apply(id1, id2, "WIS", -0.15);
		battle_data[id2].exceeded_speed = Math.floor((base_data[id2].spd) * (1 + battle_data[id2].spd_buff - battle_data[id2].spd_debuff));
	}
	else{
		if (show_log == true)
			document.getElementById('res').innerHTML += "But it failed! <br>";
	}
}

function death_damage_apply(id1, id2, skill){
	var mp_cost = 1, chance, multiplier = 1.0;
	var temp1, temp2, temp3, temp4;
	if (battle_data[id1].pressure == true)
		mp_cost *= 2;
	
	if (battle_data[id1].mp_left < mp_cost)
		return;
	else
		battle_data[id1].mp_left -= mp_cost;

	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ") uses " + skill + "! <br>";
	
	temp1 = battle_data[id2].dodgable, temp2 = battle_data[id2].counterable, temp3 = battle_data[id2].no_death, temp4 = battle_data[id2].reflectable;
	battle_data[id2].dodgable = false, battle_data[id2].counterable = false, battle_data[id2].no_death = true, battle_data[id2].reflectable = true;

	if (base_data[id1].gear.search("Synchro Damage +") != -1)
		multiplier += 0.01 * base_data[id1].gear_lv;

	switch (skill){
		case "DE: デッドシンクロ（自爆） / Dead Synchro":
			chance = 0.5;
			if (Math.random() < chance)
				damage_dealer(id1, id2, skill, "None", 0, 0, battle_data[id1].mp_left * multiplier, true);
			else
				if (show_log == true)
					document.getElementById('res').innerHTML += "But it failed! (Chance: " + (1 - chance).toString() + ") <br>";
			break;
		case "DE: ジェノサイドシンクロ（絶対自爆） / Genocide Synchro":
			console.log("Genocide");
			damage_dealer(id1, id2, skill, "None", 0, 0, battle_data[id1].mp_left * multiplier, true);
			break;
		case "DE: ブレイン・デス（MP自爆） / Brain Death":
			mp_damage_dealer(id1, id2, skill, "None", 0, 0, 0, battle_data[id1].mp_left * multiplier);
			break;
	}
	battle_data[id2].dodgable = temp1, battle_data[id2].counterable = temp2, battle_data[id2].no_death = temp3, battle_data[id2].reflectable = temp4;
}

function heal_apply(id, percentage, fixed){
	var amount;
	if (percentage != 0)
		amount = Math.floor(base_data[id].hp * percentage);
	else
		amount = Math.floor(fixed);
	if (battle_data[id].hp_left + amount > base_data[id].hp)
		amount = base_data[id].hp - battle_data[id].hp_left;
	battle_data[id].hp_left += amount;
	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") heals " + amount.toString() + " damage to itself! HP: " + battle_data[id].hp_left + "/" + base_data[id].hp + " <br>";
}

function mp_heal_apply(id, percentage, fixed){
	var amount;
	if (percentage != 0)
		amount = Math.floor(base_data[id].mp * percentage);
	else
		amount = Math.floor(fixed);
	if (battle_data[id].mp_left + amount > base_data[id].mp)
		amount = base_data[id].mp - battle_data[id].mp_left;
	battle_data[id].mp_left += amount;
	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") recovers " + amount.toString() + " MP to itself! MP: " + battle_data[id].mp_left + "/" + base_data[id].mp + " <br>";
}

function lock_apply(id){
	for (var i = 0; i < 3; i++){
		if (base_data[id].skill[i].search("RE") != -1 || base_data[id].skill[i].search("DE") != -1)
			base_data[id].skill[i] = "None";
	}

	battle_data[id].avoid = 0, battle_data[id].high_avoid = 0;
}

function on_hit_reaction(id){
	var mp_cost, chance, avoided;
	var pre_hp, pre_mp;

	/*
	if (battle_data[id].hp_left == base_data[id].hp)
		return;
	*/

	for (var i = 0; i < 3; i++){
		if (battle_data[id].skill_used[i] > 0)
			continue;

		if (base_data[id].skill[i].search("Lock Reaction") != -1 && (battle_data[id].hp_left / base_data[id].hp <= 0.5)){
			mp_cost = 400;
			if (battle_data[id].pressure == true)
				mp_cost *= 2;
			if (base_data[id].gear.search("All Cost -") != -1)
				mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[id].gear_lv));

			if (battle_data[id].mp_left >= mp_cost){
				battle_data[id].mp_left -= mp_cost;
				battle_data[id].skill_used[i]++;

				if (show_log == true){
					document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") uses " + base_data[id].skill[i] + "! <br>";
					document.getElementById('res').innerHTML += base_data[1 - id].card + " (Team " + (1 - id + 1).toString() + ")'s reaction abilities are locked! <br>";
				}

				battle_data[1 - id].locked = true;
				lock_apply(1 - id);
				continue;
			}
		}

		if (base_data[id].skill[i].search("Predator") != -1 && (battle_data[id].hp_left / base_data[id].hp <= 0.5)){
			mp_cost = 300;
			if (battle_data[id].pressure == true)
				mp_cost *= 2;
			if (base_data[id].gear.search("All Cost -") != -1)
				mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[id].gear_lv));

			if (battle_data[id].mp_left >= mp_cost){
				battle_data[id].mp_left -= mp_cost;
				battle_data[id].skill_used[i]++;

				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") uses " + base_data[id].skill[i] + "! <br>";

				avoided = false;
				if (battle_data[1 - id].avoid > 0){
					battle_data[1 - id].avoid--;
					if (Math.random() < 0.4){
						avoided = true;
						if (show_log == true)
							document.getElementById('res').innerHTML += base_data[1 - id].card + " (Team " + (1 - id + 1).toString() + ") dodges the attack! (Chance: 0.4) <br>";
					}
					else 
						avoided = false;
				}
				else if (battle_data[1 - id].high_avoid > 0){
					battle_data[1 - id].high_avoid--;
					avoided = true;
					if (show_log == true)
						document.getElementById('res').innerHTML += base_data[1 - id].card + " (Team " + (1 - id + 1).toString() + ") dodges the attack! (Chance: 1) <br>";
				}

				if (avoided == true){
					continue;
				}
				else {
					if (base_data[id].skill[i].search("Holy") != -1)
						chance = 0.35;
					else
						chance = 0.3;

					if (Math.random() < chance){
						if (show_log == true)
							document.getElementById('res').innerHTML += base_data[1 - id].card + " (Team " + (1 - id + 1).toString() + ") has been eaten! <br>";
						
						pre_hp = battle_data[1 - id].hp_left;
						pre_mp = battle_data[1 - id].mp_left;

						heal_apply(id, 0, pre_hp);
						mp_heal_apply(id, 0, pre_mp);

						battle_data[1 - id].hp_left = 0;
						battle_data[1 - id].mp_left = 0;
					}
					else{
						if (show_log == true)
							document.getElementById('res').innerHTML += "But it failed! <br>";
					}
				}

				continue;
			}
		}

		if (base_data[id].skill[i].search("Masochist") != -1 && (battle_data[id].hp_left / base_data[id].hp <= 0.35)){
			mp_cost = 300;
			if (battle_data[id].pressure == true)
				mp_cost *= 2;
			if (base_data[id].gear.search("All Cost -") != -1)
				mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[id].gear_lv));

			if (battle_data[id].mp_left >= mp_cost){
				battle_data[id].mp_left -= mp_cost;
				battle_data[id].skill_used[i]++;

				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") uses " + base_data[id].skill[i] + "! <br>";

				buff_apply(id, 1 - id, "ATK", 0.5);
				continue;
			}
		}
	}
}

function auto_heal(id){
	if (battle_data[id].regenerate > 0){
		battle_data[id].regenerate--;
		heal_apply(id, 0.3, 0);
	}

	if (battle_data[id].meditation > 0){
		battle_data[id].meditation--;
		mp_heal_apply(id, 0.3, 0);
	}
}



function win_rate_test(){
	show_log = false;
	var temp_res = 0, win_rate = 0;

	for (var i = 0; i < 1000; i++)
		temp_res += 1 - team_battle();

	win_rate = temp_res / 10.0;
	document.getElementById('res').innerHTML = "Win Rate for Team 1 is " + win_rate.toString() + "%";

	show_log = true;

	return win_rate;
}


function team_battle(){
	var num_cards = parseInt(document.getElementById('num_cards').value);
	var temp_result;
	var curr = [1, 1];

	document.getElementById('res').innerHTML = "";
	data_init(1, 1);
	data_init(2, 1);

	while (true){
		temp_result = battle();
		switch (temp_result){
			case 0:
			case 1:
				curr[1 - temp_result] += 1;
				if (curr[1 - temp_result] > num_cards){
					if (show_log == true)
						document.getElementById('res').innerHTML += "Team " + (temp_result + 1).toString() + " wins! <br>";
					return temp_result;
				}
				else
					data_init(2 - temp_result, curr[1 - temp_result]);
				break;
			case -1:
				curr[0] += 1, curr[1] += 1;
				if (curr[0] > num_cards && curr[1] > num_cards){
					if (show_log == true)
						document.getElementById('res').innerHTML += "Team 1 wins! <br>";
					return 0;
				}
				if (curr[0] > num_cards){
					if (show_log == true)
						document.getElementById('res').innerHTML += "Team 2 wins! <br>";
					return 1;
				}
				else
					data_init(1, curr[0]);
				if (curr[1] > num_cards){
					if (show_log == true)
						document.getElementById('res').innerHTML += "Team 1 wins! <br>";
					return 0;
				}
				else
					data_init(2, curr[1]);
				break;
		}
	}
}

function data_init(team_num, card_num){
	base_data[team_num - 1] = {"card": document.getElementById('card' + team_num.toString() + '.' + card_num.toString()).value, "attr": document.getElementById('attr' + team_num.toString() + '.' + card_num.toString()).value, 
		"hp": parseInt(document.getElementById('hp' + team_num.toString() + '.' + card_num.toString()).value), "mp": parseInt(document.getElementById('mp' + team_num.toString() + '.' + card_num.toString()).value),
		"atk": parseInt(document.getElementById('atk' + team_num.toString() + '.' + card_num.toString()).value), "def": parseInt(document.getElementById('def' + team_num.toString() + '.' + card_num.toString()).value), 
		"spd": parseInt(document.getElementById('spd' + team_num.toString() + '.' + card_num.toString()).value), "wis": parseInt(document.getElementById('wis' + team_num.toString() + '.' + card_num.toString()).value),
		"skill": [
			document.getElementById('skill1' + team_num.toString() + '.' + card_num.toString()).value, 
			document.getElementById('skill2' + team_num.toString() + '.' + card_num.toString()).value, 
			document.getElementById('skill3' + team_num.toString() + '.' + card_num.toString()).value, 
			document.getElementById('skill4' + team_num.toString() + '.' + card_num.toString()).value, 
			document.getElementById('skill5' + team_num.toString() + '.' + card_num.toString()).value, 
			document.getElementById('skill6' + team_num.toString() + '.' + card_num.toString()).value,
		],
		"gear": document.getElementById('gear' + team_num.toString() + '.' + card_num.toString()).value,
		"gear_lv": parseInt(document.getElementById('gear_lv' + team_num.toString() + '.' + card_num.toString()).value)
	};

	battle_data[team_num - 1] = {"atk_buff": 0, "def_buff": 0, "spd_buff": 0, "wis_buff": 0, "atk_debuff": 0, "def_debuff": 0, "spd_debuff": 0, "wis_debuff": 0,
		"exceeded_speed": base_data[team_num - 1].spd, "hp_left": base_data[team_num - 1].hp, "mp_left": base_data[team_num - 1].mp, 
		"skill_used": [0, 0, 0], "dodgable": true, "counterable": true, "reflectable": true, "no_death": false,
		"cleanness": false, "shell": false, "healing": 0, "confusion": false, "poisoned": false, "locked": false, "avoid": 0, "high_avoid": 0,
		"double_binder": ["None", "None"], "regenerate": 0, "meditation": 0, "pressure": false
	};

}


function battle(){
	var attacker, defender, battler = [0, 1];
	var attack_skill, attack_attr = "Physical", dmg_rate = 1, reduc_rate = 0.5, mp_cost = 0, hp_cost = 0;
	var matrix;
	var chance;
	var keep = false;
	var damage, counter_skill, damage_comp = [-1, -1, -1], mp_comp = [0, 0, 0], hp_comp = [0, 0, 0], max_damage = 0, min_mp = 10000, choose_skill = -1;
	var temp, temp2, temp_stat;
	var pre_hp;
	var result = 0;
	var battle_length = 0;
	var intro_activate = true;
	var still_alive;
	var fake_damage = 0, temp_mp, temp_poison, temp_poison_S, temp_freeze, temp_show_log, temp_blockable, temp_dodgable;
	var mirrored = false, avoided = false;
	var twice = 1;

	for (var i = 0; i < 2; i++){
		on_hit_reaction(i);
		if (battle_data[1 - i].hp_left <= 0){
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[1 - i].card + " (Team " + (1 - i + 1).toString() + ") is defeated! <br>";
			result = i;
		return result;
		}
	}

	Outer:
	while (true){ 
		//console.log(battle_length.toString());
		// Speed Decision
		if (show_log == true)
			document.getElementById('res').innerHTML += "Speed: " + battle_data[0].exceeded_speed.toString() + " vs " + battle_data[1].exceeded_speed.toString() + "<br>";
		if (battle_data[0].exceeded_speed >= battle_data[1].exceeded_speed){
			attacker = 0, defender = 1;
			battler[1] = 1, battler[0] = 0;
		}
		else{
			attacker = 1, defender = 0;
			battler[0] = 1, battler[1] = 0;
		}
		// Reset Flags
		battle_data[defender].dodgable = true, battle_data[defender].counterable = true;
		battle_data[defender].no_death = false, battle_data[defender].reflectable = true;
		mirrored = false, avoided = false, twice = 1;

		for (var i = 0; i <3; i++){
			damage_comp[i] = -1;
			mp_comp[i] = 0;
			hp_comp[i] = 0;
		}
		max_damage = 0, min_mp = 10000, choose_skill = -1;

		// Intro Skill
		if (intro_activate == true){
			intro_activate = false;

			for (var i = 0; i < 2; i++){
				for (var j = 0; j < 3; j++){
					if (battle_data[battler[i]].skill_used[j] == 1)
						break;

					// Dead Shell should be processed earliest
					if (base_data[battler[i]].skill[j].search("Dead Shell") != -1){
						mp_cost = 400;
						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].mp_left -= mp_cost;
							battle_data[battler[i]].shell = true;
							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[0] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[0] + 1).toString() + ") becomes immune to initial abilities! <br>";
							}

						}
						battle_data[battler[i]].skill_used[j]++;
						break;
					}
				}
			}

			for (var i = 0; i < 2; i++){
				Inner:
				for (var j = 0; j < 3; j++){
					if (battle_data[battler[i]].skill_used[j] == 1)
						continue;

					// Cleanness
					if (base_data[battler[i]].skill[j].search("Cleanness") != -1){
						mp_cost = 300;
						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].mp_left -= mp_cost;
							battle_data[battler[i]].cleanness = true;						
							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") can block debuff for once! <br>";
							}
							battle_data[battler[i]].skill_used[j]++;
							continue;
						}
						
					}

					// Buff
					if (base_data[battler[i]].skill[j].search("Buff") != -1){


						if (base_data[battler[i]].skill[j].search("_") != -1) mp_cost = 400, temp = 0.1;
						else if (base_data[battler[i]].skill[j].search("10") != -1) mp_cost = 100, temp = 0.1;
						else if (base_data[battler[i]].skill[j].search("20") != -1) mp_cost = 200, temp = 0.2;
						else if (base_data[battler[i]].skill[j].search("25") != -1) mp_cost = 600, temp = 0.25;
						else if (base_data[battler[i]].skill[j].search("30") != -1) mp_cost = 400, temp = 0.3;

						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].mp_left -= mp_cost;

							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
							}

							if (base_data[battler[i]].skill[j].search("RAN") != -1){
								temp2 = Math.random();
								if (temp2 < 0.25) base_data[battler[i]].skill[j] = base_data[battler[i]].skill[j].replace("RAN", "ATK");
								else if (temp2 < 0.5) base_data[battler[i]].skill[j] = base_data[battler[i]].skill[j].replace("RAN", "DEF");
								else if (temp2 < 0.75) base_data[battler[i]].skill[j] = base_data[battler[i]].skill[j].replace("RAN", "SPD");
								else base_data[battler[i]].skill[j] = base_data[battler[i]].skill[j].replace("RAN", "WIS");
							}

							if (base_data[battler[i]].skill[j].search("ATK") != -1) 
								buff_apply(battler[i], battler[1 - i], "ATK", temp);
							if (base_data[battler[i]].skill[j].search("DEF") != -1) 
								buff_apply(battler[i], battler[1 - i], "DEF", temp);
							if (base_data[battler[i]].skill[j].search("SPD") != -1) {
								buff_apply(battler[i], battler[1 - i], "SPD", temp);
								battle_data[battler[i]].exceeded_speed = Math.floor((base_data[battler[i]].spd) * (1 + battle_data[battler[i]].spd_buff - battle_data[battler[i]].spd_debuff));
							}
							if (base_data[battler[i]].skill[j].search("WIS") != -1) 
								buff_apply(battler[i], battler[1 - i], "WIS", temp);
						}
						battle_data[battler[i]].skill_used[j]++;
						continue;
					}

					// Debuff
					if (base_data[battler[i]].skill[j].search("Debuff") != -1){

						if (base_data[battler[i]].skill[j].search("SPD_WIS") != -1) mp_cost = 900, temp = -0.3;
						else if (base_data[battler[i]].skill[j].search("_") != -1) mp_cost = 400, temp = -0.1;
						else if (base_data[battler[i]].skill[j].search("10") != -1) mp_cost = 150, temp = -0.1;
						else if (base_data[battler[i]].skill[j].search("20") != -1) mp_cost = 300, temp = -0.2;
						else if (base_data[battler[i]].skill[j].search("25") != -1) mp_cost = 600, temp = -0.25;


						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].mp_left -= mp_cost;
							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
							}

							if (battle_data[battler[1 - i]].cleanness == true){
								battle_data[battler[1 - i]].cleanness = false;
								if (show_log == true){
									document.getElementById('res').innerHTML += "But it failed! <br>";
								}
								battle_data[battler[i]].skill_used[j]++;
								continue;
							}

							if (base_data[battler[i]].skill[j].search("ATK") != -1) 
								buff_apply(battler[i], battler[1 - i], "ATK", temp);
							if (base_data[battler[i]].skill[j].search("DEF") != -1) 
								buff_apply(battler[i], battler[1 - i], "DEF", temp);
							if (base_data[battler[i]].skill[j].search("SPD") != -1) {
								buff_apply(battler[i], battler[1 - i], "SPD", temp);					
								battle_data[1 - battler[i]].exceeded_speed = Math.floor((base_data[1 - battler[i]].spd) * (1 + battle_data[1 - battler[i]].spd_buff - battle_data[1 - battler[i]].spd_debuff));
							}
							if (base_data[battler[i]].skill[j].search("WIS") != -1) 
								buff_apply(battler[i], battler[1 - i], "WIS", temp);
						}
						battle_data[battler[i]].skill_used[j]++;
						continue;
					}
					
					// Avoid
					if (base_data[battler[i]].skill[j].search("Avoid") != -1){
						if (base_data[battler[i]].skill[j].search("High") != -1)
							mp_cost = 900;
						else
							mp_cost = 400;


						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].mp_left -= mp_cost;
							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") can avoid attack for once! <br>";
							}

							if (battle_data[battler[i]].locked == false){
								if (base_data[battler[i]].skill[j].search("High") != -1)
									battle_data[battler[i]].high_avoid++;
								else
									battle_data[battler[i]].avoid++;
							}
							
						}
						battle_data[battler[i]].skill_used[j]++;
						continue;
					}

					// First Blood / Quick Thinking
					if (base_data[battler[i]].skill[j].search("First Blood") != -1 || base_data[battler[i]].skill[j].search("Quick Thinking") != -1){
						mp_cost = 300;

						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].mp_left -= mp_cost;
							battle_data[battler[i]].skill_used[j]++;

							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
							}

							if (battle_data[1 - battler[i]].shell == true){
								if (show_log == true){
									document.getElementById('res').innerHTML += "But it failed! <br>";
								}
								continue Inner;
							}

							avoided = false, mirrored = false;
							if (battle_data[1 - battler[i]].avoid > 0){
								battle_data[1 - battler[i]].avoid--;
								if (Math.random() < 0.4){
									avoided = true;
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") dodges the attack! (Chance: 0.4) <br>";
								}
								else 
									avoided = false;
							}
							else if (battle_data[1 - battler[i]].high_avoid > 0){
								battle_data[1 - battler[i]].high_avoid--;
								avoided = true;
								if (show_log == true)
									document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") dodges the attack! (Chance: 1) <br>";
							}

							if (avoided == true){
								continue Inner;
							}
							else{
								if (base_data[battler[i]].skill[j].search("First Blood") != -1)
									attack_attr = "Physical";
								else
									attack_attr = base_data[battler[i]].attr;

								// Damage Calc
								damage = damage_dealer(battler[i], 1 - battler[i], base_data[battler[i]].skill[j], attack_attr, 0.8, 0.5, 0, false);

								// Mirror Damage
								mp_cost = 700;
								if (battle_data[1 - battler[i]].pressure == true)
									mp_cost *= 2;
								if (base_data[1 - battler[i]].gear.search("All Cost -") != -1)
									mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[1 - battler[i]].gear_lv));
								if (battle_data[1 - battler[i]].mp_left >= mp_cost){
									for (var k = 0; k < 3; k++){
										if (base_data[1 - battler[i]].skill[k].search("Mirror Damage") != -1){
											if (Math.random() < 0.6){
												mirrored = true;
												battle_data[1 - battler[i]].mp_left -= mp_cost;

												if (show_log == true)
													document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") uses Mirror Damage! MP: " + battle_data[1 - battler[i]].mp_left + "/" + base_data[1 - battler[i]].mp + " <br>";

												battle_data[battler[i]].dodgable = false, battle_data[battler[i]].counterable = false, battle_data[battler[i]].no_death = true, battle_data[battler[i]].reflectable = false;
												damage = damage * 0.4;
												damage = damage_dealer(1 - battler[i], battler[i], "Mirror Damage", "None", 0, 0, damage, true);

												

												if (battle_data[battler[i]].hp_left <= 0){
													if (show_log == true)
														document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") is defeated! <br>";
													result = 1 - battler[i];
													return result;
												}
											}
											else
												mirrored = false;
											break;
										}
									}
								}

								if (mirrored == true){
									continue Inner;
								}
								else{
									pre_hp = battle_data[1 - battler[i]].hp_left;
									damage = damage_dealer(battler[i], 1 - battler[i], base_data[battler[i]].skill[j], attack_attr, 0.8, 0.5, 0, true);
																	

									// If Death Occurs
									if (battle_data[1 - battler[i]].hp_left <= 0){		
										still_alive = death_proc(1 - battler[i], battler[i], base_data[battler[i]].skill[j], pre_hp);

										// If Survived
										if (still_alive == 1){
											// intro_activate = true;
											on_hit_reaction(1 - battler[i]);
											if (battle_data[battler[i]].hp_left <= 0){
												if (show_log == true)
													document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") is defeated! <br>";
												result = 1 - battler[i];
												return result;
											}

											battle_length++;
											continue Inner;
										}
										else{ 
											if (show_log == true)
												document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") is defeated! <br>";
											result = battler[i];
											if (battle_data[battler[i]].hp_left <= 0){
												if (show_log == true)
													document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (2 - 1 - battler[i]).toString() + ") is defeated! <br>";
												result = -1;
											}
											else{
												// Speed Change
												battle_data[battler[i]].exceeded_speed -= battle_data[1 - battler[i]].exceeded_speed;
												battle_data[1 - battler[i]].exceeded_speed = Math.floor((base_data[1 - battler[i]].spd) * (1 + battle_data[1 - battler[i]].spd_buff - battle_data[1 - battler[i]].spd_debuff));
											}
											return result;
										}
									}
									else {
										// Counter
										for (var k = 0; k < 3; k++){
											if (base_data[1 - battler[i]].skill[k].search("Counter") != -1){
												if (damage > 0 && battle_data[1 - battler[i]].counterable == true && battle_data[1 - battler[i]].mp_left >= 300 && twice == 1){
													battle_data[1 - battler[i]].mp_left -= 300;
													if (show_log == true)
														document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") uses Counter! MP: " + battle_data[1 - battler[i]].mp_left + "/" + base_data[1 - battler[i]].mp + " <br>";

													avoided = false;
													if (battle_data[battler[i]].avoid > 0){
														battle_data[battler[i]].avoid--;
														if (Math.random() < 0.4){
															avoided = true;
															if (show_log == true)
																document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") dodges the attack! (Chance: 0.4) <br>";
														}
														else 
															avoided = false;
													}
													else if (battle_data[battler[i]].high_avoid > 0){
														battle_data[battler[i]].high_avoid--;
														avoided = true;
														if (show_log == true)
															document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") dodges the attack! (Chance: 1) <br>";
													}

													if (avoided == true){
														continue Inner;
													}

													battle_data[battler[i]].dodgable = false, battle_data[battler[i]].counterable = false, battle_data[battler[i]].no_death = true, battle_data[battler[i]].reflectable = false;
													damage_dealer(1 - battler[i], battler[i], "Counter", "None", 0, 0, 1.2 * damage, true);
													if (battle_data[battler[i]].hp_left <= 0){
														if (show_log == true)
															document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") is defeated! <br>";
														result = 1 - battler[i];
														return result;
													}
												}
												break;
											}
										}
										
										on_hit_reaction(1 - battler[i]);
										if (battle_data[battler[i]].hp_left <= 0){
											if (show_log == true)
												document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") is defeated! <br>";
											result = 1 - battler[i];
											return result;
										}

										continue Inner;
									}
								}
								
							}
						}
					}

					// Skull Shatter
					if (base_data[battler[i]].skill[j].search("Skull Shatter") != -1){
						mp_cost = 300;
						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost && (battle_data[1 - battler[i]].atk_buff > 0 || battle_data[1 - battler[i]].def_buff > 0 
							|| battle_data[1 - battler[i]].spd_buff > 0 || battle_data[1 - battler[i]].wis_buff > 0 
							|| battle_data[1 - battler[i]].double_binder[0] != "None" || battle_data[1 - battler[i]].double_binder[1] != "None") ){
							battle_data[battler[i]].mp_left -= mp_cost;

							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
								document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ")'s buffs are cancelled! <br>";
							}

							battle_data[1 - battler[i]].atk_buff = 0;
							battle_data[1 - battler[i]].def_buff = 0;
							if (battle_data[1- battler[i]].spd_buff > 0){
								battle_data[1 - battler[i]].spd_buff = 0;
								battle_data[1 - battler[i]].exceeded_speed = Math.floor((base_data[1 - battler[i]].spd) * (1 + battle_data[1 - battler[i]].spd_buff - battle_data[1 - battler[i]].spd_debuff));
							}
							battle_data[1 - battler[i]].wis_buff = 0;
							battle_data[1 - battler[i]].double_binder[0] = "None";
							battle_data[1 - battler[i]].double_binder[1] = "None";

							battle_data[battler[i]].skill_used[j]++;
							continue;
						}
					}

					// Shift
					if (base_data[battler[i]].skill[j].search("Shift") != -1){
						mp_cost = 300;
						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].mp_left -= mp_cost;

							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
								document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ")'s HP and MP are shifted! <br>";
							}

							temp = battle_data[1 - battler[i]].hp_left;
							battle_data[1 - battler[i]].hp_left = battle_data[1 - battler[i]].mp_left;
							battle_data[1 - battler[i]].mp_left = temp;

							temp = base_data[1 - battler[i]].hp;
							base_data[1 - battler[i]].hp = base_data[1 - battler[i]].mp;
							base_data[1 - battler[i]].mp = temp;

							if (battle_data[1 - battler[i]].hp_left <= 0){		
								still_alive = death_proc(1 - battler[i], battler[i], base_data[battler[i]].skill[j], battle_data[1 - battler[i]].mp_left);

								// If Survived
								if (still_alive == 1){
									// intro_activate = true;
									battle_length++;
									continue Inner;
								}
								else{ 
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") is defeated! <br>";
									result = battler[i];
									if (battle_data[battler[i]].hp_left <= 0){
										if (show_log == true)
											document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (2 - 1 - battler[i]).toString() + ") is defeated! <br>";
										result = -1;
									}
									else{
										// Speed Change
										battle_data[battler[i]].exceeded_speed -= battle_data[1 - battler[i]].exceeded_speed;
										battle_data[1 - battler[i]].exceeded_speed = Math.floor((base_data[1 - battler[i]].spd) * (1 + battle_data[1 - battler[i]].spd_buff - battle_data[1 - battler[i]].spd_debuff));
									}
									return result;
								}
							}

							battle_data[battler[i]].skill_used[j]++;
							continue;
						}
					}


					// Fast Lock
					if (base_data[battler[i]].skill[j].search("Fast Lock") != -1){
						mp_cost = 600;
						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							if (Math.random() < 0.7){
								battle_data[battler[i]].mp_left -= mp_cost;

								if (show_log == true){
									document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
									document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ")'s reaction abilities are locked! <br>";
								}

								battle_data[1 - battler[i]].locked = true;

								lock_apply(1 - battler[i]);
							}

							battle_data[battler[i]].skill_used[j]++;
							continue;
						}
					}

					// Regenerate
					if (base_data[battler[i]].skill[j].search("Regenerate") != -1){
						mp_cost = 400;
						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].mp_left -= mp_cost;
							battle_data[battler[i]].regenerate = 10;						
							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") can regenerate HP over time! <br>";
							}
							battle_data[battler[i]].skill_used[j]++;
							continue;
						}
						
					}

					// Meditation
					if (base_data[battler[i]].skill[j].search("Meditation") != -1){
						mp_cost = 400;
						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].mp_left -= mp_cost;
							battle_data[battler[i]].meditation = 10;						
							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") can regenerate MP over time! <br>";
							}
							battle_data[battler[i]].skill_used[j]++;
							continue;
						}
						
					}

					// Pressure
					if (base_data[battler[i]].skill[j].search("Pressure") != -1){
						mp_cost = 400;
						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].mp_left -= mp_cost;
							battle_data[battler[i]].skill_used[j]++;

							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
								document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ")'s MP costs are doubled! <br>";
							}

							battle_data[1 - battler[i]].pressure = true;
						}

						
						continue;
					}

					// Double Binder
					if (base_data[battler[i]].skill[j].search("Double Binder") != -1){
						mp_cost = 600;
						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].mp_left -= mp_cost;
							battle_data[battler[i]].skill_used[j]++;

							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
							}

							temp = 0;
							if (base_data[battler[i]].skill[j].search("熱") != -1) {
								battle_data[battler[i]].double_binder[temp] = "発熱型 / Burner";
								if (show_log == true){
									document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ")'s resistance to " + battle_data[battler[i]].double_binder[temp] + " is doubled! <br>";
								}
								temp++;
							}
							if (base_data[battler[i]].skill[j].search("冷") != -1) {
								battle_data[battler[i]].double_binder[temp] = "冷却型 / Chiller";
								if (show_log == true){
									document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ")'s resistance to " + battle_data[battler[i]].double_binder[temp] + " is doubled! <br>";
								}
								temp++;
							}
							if (base_data[battler[i]].skill[j].search("風") != -1) {
								battle_data[battler[i]].double_binder[temp] = "疾風型 / Slasher";
								if (show_log == true){
									document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ")'s resistance to " + battle_data[battler[i]].double_binder[temp] + " is doubled! <br>";
								}
								temp++;
							}
							if (base_data[battler[i]].skill[j].search("電") != -1) {
								battle_data[battler[i]].double_binder[temp] = "放電型 / Shocker";
								if (show_log == true){
									document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ")'s resistance to " + battle_data[battler[i]].double_binder[temp] + " is doubled! <br>";
								}
								temp++;
							}
							if (base_data[battler[i]].skill[j].search("鳴") != -1) {
								battle_data[battler[i]].double_binder[temp] = "共鳴型 / Screamer";
								if (show_log == true){
									document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ")'s resistance to " + battle_data[battler[i]].double_binder[temp] + " is doubled! <br>";
								}
								temp++;
							}
							if (base_data[battler[i]].skill[j].search("毒") != -1) {
								battle_data[battler[i]].double_binder[temp] = "猛毒型 / Spitter";
								if (show_log == true){
									document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ")'s resistance to " + battle_data[battler[i]].double_binder[temp] + " is doubled! <br>";
								}
								temp++;
							}
							if (base_data[battler[i]].skill[j].search("誘") != -1) {
								battle_data[battler[i]].double_binder[temp] = "誘惑型 / Charmer";
								if (show_log == true){
									document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ")'s resistance to " + battle_data[battler[i]].double_binder[temp] + " is doubled! <br>";
								}
								temp++;
							}
							if (base_data[battler[i]].skill[j].search("寄") != -1) {
								battle_data[battler[i]].double_binder[temp] = "寄生型 / Leecher";
								if (show_log == true){
									document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ")'s resistance to " + battle_data[battler[i]].double_binder[temp] + " is doubled! <br>";
								}
								temp++;
							}
						}

						
						continue;
					} 
				}
			}


			for (var i = 0; i < 2; i++){
				for (var j = 0; j < 3; j++){
					if (battle_data[battler[i]].skill_used[j] == 1)
						continue;
					if (battle_data[battler[i]].confusion == true)
						break;

					// Brain Suck
					if (base_data[battler[i]].skill[j].search("Brain Suck") != -1){
						mp_cost = 300;
						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].skill_used[j]++;
							battle_data[battler[i]].mp_left -= mp_cost;

							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
							}
							
							if (battle_data[1 - battler[i]].shell == true){
								if (show_log == true){
									document.getElementById('res').innerHTML += "But it failed! <br>";
								}
								continue;
							}

							chance = 0.5;
							if (base_data[battler[i]].gear.search("Brain Suck Success Rate +") != -1)
								chance += 0.0075 * base_data[battler[i]].gear_lv;

							if (Math.random() < chance){
								avoided = false;
								if (battle_data[1 - battler[i]].avoid > 0){
									battle_data[1 - battler[i]].avoid--;
									if (Math.random() < 0.4){
										avoided = true;
										if (show_log == true)
											document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") dodges the attack! (Chance: 0.4) <br>";
									}
									else 
										avoided = false;
								}
								else if (battle_data[1 - battler[i]].high_avoid > 0){
									battle_data[1 - battler[i]].high_avoid--;
									avoided = true;
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") dodges the attack! (Chance: 1) <br>";
								}

								if (avoided == true){
									continue;
								}
								else{
									battle_data[1 - battler[i]].mp_left = 1;
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ")'s MP becomes 1! (Chance: 0.5) <br>";
								}
							}
							else{
								if (show_log == true){
									document.getElementById('res').innerHTML += "But it failed! <br>";
								}
							}
						}
							
					}

					// Confusion
					if (base_data[battler[i]].skill[j].search("Confusion") != -1){
						mp_cost = 400;
						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].skill_used[j]++;
							battle_data[battler[i]].mp_left -= mp_cost;

							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
							}

							avoided = false;
							if (battle_data[1 - battler[i]].avoid > 0){
								battle_data[1 - battler[i]].avoid--;
								if (Math.random() < 0.4){
									avoided = true;
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") dodges the attack! (Chance: 0.4) <br>";
								}
								else 
									avoided = false;
							}
							else if (battle_data[1 - battler[i]].high_avoid > 0){
								battle_data[1 - battler[i]].high_avoid--;
								avoided = true;
								if (show_log == true)
									document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") dodges the attack! (Chance: 1) <br>";
							}

							if (avoided == true){
								continue;
							}
							else{
								battle_data[1 - battler[i]].confusion = true;
								if (show_log == true)
									document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") becomes confused! <br>";
							}
						}
						
					}


					// Illusion
					if (base_data[battler[i]].skill[j].search("Illusion") != -1){
						mp_cost = 300;
						if (battle_data[battler[i]].pressure == true)
							mp_cost *= 2;
						if (base_data[battler[i]].gear.search("All Cost -") != -1)
							mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[battler[i]].gear_lv));

						if (battle_data[battler[i]].mp_left >= mp_cost){
							battle_data[battler[i]].skill_used[j]++;
							battle_data[battler[i]].mp_left -= mp_cost;

							if (show_log == true){
								document.getElementById('res').innerHTML += base_data[battler[i]].card + " (Team " + (battler[i] + 1).toString() + ") uses " + base_data[battler[i]].skill[j] + "! <br>";
							}

							chance = 0.3;
							if (base_data[battler[i]].gear.search("Illusion Success Rate +") != -1)
								chance += 0.0075 * base_data[battler[i]].gear_lv;

							if (Math.random() < chance){

								avoided = false;
								if (battle_data[1 - battler[i]].avoid > 0){
									battle_data[1 - battler[i]].avoid--;
									if (Math.random() < 0.4){
										avoided = true;
										if (show_log == true)
											document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") dodges the attack! (Chance: 0.4) <br>";
									}
									else 
										avoided = false;
								}
								else if (battle_data[1 - battler[i]].high_avoid > 0){
									battle_data[1 - battler[i]].high_avoid--;
									avoided = true;
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") dodges the attack! (Chance: 1) <br>";
								}

								if (avoided == true){
									continue;
								}
								else{
									battle_data[1 - battler[i]].hp_left = 460;
									battle_data[1 - battler[i]].mp_left = 460;
									base_data[1 - battler[i]].hp = 460;
									base_data[1 - battler[i]].mp = 460;
									base_data[1 - battler[i]].atk = 460;
									base_data[1 - battler[i]].def = 460;
									base_data[1 - battler[i]].spd = 460;
									base_data[1 - battler[i]].wis = 440;
									battle_data[1 - battler[i]].exceeded_speed = Math.floor((base_data[1 - battler[i]].spd) * (1 + battle_data[1 - battler[i]].spd_buff - battle_data[1 - battler[i]].spd_debuff));

									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[1 - battler[i]].card + " (Team " + (1 - battler[i] + 1).toString() + ") becomes a Chick! (Chance: 0.3) <br>";
								}
							}
							else{
								if (show_log == true){
									document.getElementById('res').innerHTML += "But it failed! <br>";
								}
							}
						}
							
					}
				}
			}

		}
			


		// Battle
		mirrored = false, avoided = false;
		/*
		damage = 0;
		attack_attr = "Physical";
		dmg_rate = 1, reduc_rate = 0.5, hp_cost = 0, mp_cost = 0;
		battle_data[defender].dodgable = true, battle_data[defender].counterable = true, battle_data[defender].no_death = false, battle_data[defender].reflectable = true;
		*/

		// Speed Change
		if (show_log == true)
			document.getElementById('res').innerHTML += "Speed: " + battle_data[0].exceeded_speed.toString() + " vs " + battle_data[1].exceeded_speed.toString() + "<br>";
		if (battle_data[0].exceeded_speed >= battle_data[1].exceeded_speed){
			attacker = 0, defender = 1;
			battler[1] = 1, battler[0] = 0;
		}
		else{
			attacker = 1, defender = 0;
			battler[0] = 1, battler[1] = 0;
		}

		battle_data[attacker].exceeded_speed -= battle_data[defender].exceeded_speed;
		battle_data[defender].exceeded_speed = Math.floor((base_data[defender].spd) * (1 + battle_data[defender].spd_buff - battle_data[defender].spd_debuff));

		
		// Fetch Attack Skill
		// Confusion Effect
		if (battle_data[attacker].confusion ==  true && Math.random() < 0.5){
			defender = attacker;
		}
		else{
			for (var i = 0; i < 3; i++){
				attack_skill = base_data[attacker].skill[i];
				temp = attack_skill.split(" ");
				if (temp[0].search("AT") == -1)
					continue;
				
				attack_attr = "Physical";
				dmg_rate = 1, reduc_rate = 0.5, hp_cost = 0, mp_cost = 0, mp_comp[i] = 0, hp_comp[i] = 0;
				battle_data[defender].dodgable = true, battle_data[defender].counterable = true, battle_data[defender].no_death = false, battle_data[defender].reflectable = true;
				if (temp.length > 2 && temp[2].charAt(0) == '+'){
					switch(temp[1]){
						case "熱": attack_attr = "発熱型 / Burner"; break;
						case "冷": attack_attr = "冷却型 / Chiller"; break;
						case "風": attack_attr = "疾風型 / Slasher"; break;
						case "電": attack_attr = "放電型 / Shocker"; break;
						case "鳴": attack_attr = "共鳴型 / Screamer"; break;
						case "毒": attack_attr = "猛毒型 / Spitter"; break;
						case "誘": attack_attr = "誘惑型 / Charmer"; break;
						case "寄": attack_attr = "寄生型 / Leecher"; break;
						default: attack_attr = "Physical";
					}
					switch(temp[2]){
						case "+1": dmg_rate = 1.07; mp_cost = 150; mp_comp[i] = 150; break;
						case "+2": dmg_rate = 1.12; mp_cost = 300; mp_comp[i] = 300; break;
						case "+3": dmg_rate = 1.25; mp_cost = 600; mp_comp[i] = 600; break;
						case "+4": dmg_rate = 1.5;; mp_cost = 1200; mp_comp[i] = 1200; break;
						case "+5": dmg_rate = 1.9;; mp_cost = 1200; mp_comp[i] = 1200; break;
					}
				}
				else{
					switch(attack_skill){
						case "AT: トランスフュージョン（回復攻撃） / Transfusion":
							dmg_rate = 1.5, mp_cost = 1200, mp_comp[i] = 1200;
							break;
						case "AT: ツインリッパー（二連射） / Twin Ripper":
							dmg_rate = 1.0, mp_cost = 1200, mp_comp[i] = 1200;
							break;
						case "AT: ダブルストレイン（属性二連射） / Double Strain":
							attack_attr = base_data[attacker].attr;
							dmg_rate = 1.0, mp_cost = 1200, mp_comp[i] = 1200;
							if (attack_attr.search('Charmer') != -1)
								dmg_rate = 1.2;
							console.log(mp_cost);
							break;
						case "AT: トリプルスレット（会心一撃） / Triple Threat":
							mp_cost = 1200, mp_comp[i] = 1200;
							break;
						case "AT: ポイズンアタック（毒攻撃） / Poison Attack":
							dmg_rate = 1.5, mp_cost = 1200, mp_comp[i] = 1200;
							break;
						case "AT: アームブレイカー（攻-20%攻撃） / Arm Breaker":
							dmg_rate = 1.5, mp_cost = 1200, mp_comp[i] = 1200;
							break;
						case "AT: ブラッドストライク（HP消費攻撃） / Blood Strike":
							dmg_rate = 1.5, hp_cost = 1000, hp_comp[i] = 1000;
							break;
					}
				}
				
				if (battle_data[attacker].pressure == true)
					mp_cost *= 2, mp_comp[i] *= 2;
				if (base_data[attacker].gear.search("All Cost -") != -1){
					mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[attacker].gear_lv));
					mp_comp[i] = mp_cost;
					hp_cost = Math.round(hp_cost * (1 - 0.01 * base_data[attacker].gear_lv));
				}

				if (battle_data[attacker].mp_left >= mp_cost && battle_data[attacker].hp_left >= hp_cost){
					damage_comp[i] = damage_dealer(attacker, defender, attack_skill, attack_attr, dmg_rate, reduc_rate, 0, false);

					if (attack_skill.search("Twin") != -1 || attack_skill.search("Double") != -1)
						damage_comp[i] *= 2;
				}
				else
					damage_comp[i] = -1;

				if (damage_comp[i] > max_damage && attack_skill.search("Blood Strike") == -1){
					max_damage = damage_comp[i];
					min_mp = mp_cost;
				}
				else if (damage_comp[i] == max_damage && attack_skill.search("Blood Strike") == -1){
					if (mp_cost < min_mp)
						min_mp = mp_cost;
				}
			}

			for (var i = 2; i >= 0; i--){
				if (damage_comp[i] == max_damage && mp_comp[i] == min_mp && hp_comp[i] == 0){
					choose_skill = i;
				}
			}

			if (choose_skill == -1){
				for (var i = 2; i >= 0; i--){
					if (hp_comp[i] > 0){
						choose_skill = i;
					}
				}
			}
		}

		attack_attr = "Physical";
		dmg_rate = 1, reduc_rate = 0.5, hp_cost = 0, mp_cost = 0, twice = 1;
		battle_data[defender].dodgable = true, battle_data[defender].counterable = true, battle_data[defender].no_death = false, battle_data[defender].reflectable = true;
		if (choose_skill == -1){
			attack_skill = "AT: 通常攻撃 / Normal Attack";
			if (attacker == defender){
				battle_data[defender].dodgable = false, battle_data[defender].counterable = false, battle_data[defender].no_death = false, battle_data[defender].reflectable = false;
			}
		}
		else{
			attack_skill = base_data[attacker].skill[choose_skill];
			temp = attack_skill.split(" ");
			if (temp.length > 2 && temp[2].charAt(0) == '+'){
				switch(temp[1]){
					case "熱": attack_attr = "発熱型 / Burner"; break;
					case "冷": attack_attr = "冷却型 / Chiller"; break;
					case "風": attack_attr = "疾風型 / Slasher"; break;
					case "電": attack_attr = "放電型 / Shocker"; break;
					case "鳴": attack_attr = "共鳴型 / Screamer"; break;
					case "毒": attack_attr = "猛毒型 / Spitter"; break;
					case "誘": attack_attr = "誘惑型 / Charmer"; break;
					case "寄": attack_attr = "寄生型 / Leecher"; break;
					default: attack_attr = "Physical";
				}
				switch(temp[2]){
					case "+1": dmg_rate = 1.07; mp_cost = 150; mp_comp[i] = 150; break;
					case "+2": dmg_rate = 1.12; mp_cost = 300; mp_comp[i] = 300; break;
					case "+3": dmg_rate = 1.25; mp_cost = 600; mp_comp[i] = 600; break;
					case "+4": dmg_rate = 1.5;; mp_cost = 1200; mp_comp[i] = 1200; break;
					case "+5": dmg_rate = 1.9;; mp_cost = 1200; mp_comp[i] = 1200; break;
				}
			}
			else{
				switch(attack_skill){
					case "AT: トランスフュージョン（回復攻撃） / Transfusion":
						dmg_rate = 1.5, mp_cost = 1200;
						break;

					case "AT: ツインリッパー（二連射） / Twin Ripper":
						dmg_rate = 1.0, mp_cost = 1200, mp_comp[i] = 1200;
						twice = 2;
						break;
					case "AT: ダブルストレイン（属性二連射） / Double Strain":
						attack_attr = base_data[attacker].attr;
						dmg_rate = 1.0, mp_cost = 1200, mp_comp[i] = 1200;
						if (attack_attr.search('Charmer') != -1)
							dmg_rate = 1.2;
						twice = 2;
						break;
					case "AT: トリプルスレット（会心一撃） / Triple Threat":
						mp_cost = 1200, mp_comp[i] = 1200;
						break;
					case "AT: ポイズンアタック（毒攻撃） / Poison Attack":
						dmg_rate = 1.5, mp_cost = 1200, mp_comp[i] = 1200;
						break;
					case "AT: アームブレイカー（攻-20%攻撃） / Arm Breaker":
						dmg_rate = 1.5, mp_cost = 1200, mp_comp[i] = 1200;
						break;
					case "AT: ブラッドストライク（HP消費攻撃） / Blood Strike":
						dmg_rate = 1.5, hp_cost = 1000, hp_comp[i] = 1000;
						break;
				}
			}
		}


		if (battle_data[attacker].pressure == true)
			mp_cost *= 2;
		if (base_data[attacker].gear.search("All Cost -") != -1){
			mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[attacker].gear_lv));
			mp_comp[i] = mp_cost;
			hp_cost = Math.round(hp_cost * (1 - 0.01 * base_data[attacker].gear_lv));
		}

		battle_data[attacker].hp_left -= hp_cost;
		battle_data[attacker].mp_left -= mp_cost;
		if (show_log == true)
			document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") attacks with " + attack_skill + "! MP: " + battle_data[attacker].mp_left + "/" + base_data[attacker].mp + " <br>";
		if (hp_cost != 0)
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") spends " + hp_cost + " HP! HP: " + battle_data[attacker].hp_left + "/" + base_data[attacker].hp + " <br>";


		for (var control = 0; control < 2; control++){
			avoided = false, mirrored = false;

			if ((attack_skill.search("Double") != -1 || attack_skill.search("Twin") != -1) && twice == 2){
				if (show_log == true)
					document.getElementById('res').innerHTML += "First Attack <br>";
			}

			// Avoid
			if (battle_data[defender].avoid > 0 && attacker != defender){
				battle_data[defender].avoid--;
				if (Math.random() < 0.4){
					avoided = true;
					if (show_log == true)
						document.getElementById('res').innerHTML += base_data[defender].card + " (Team " + (defender + 1).toString() + ") dodges the attack! (Chance: 0.4) <br>";
				}
				else 
					avoided = false;
			}
			else if (battle_data[defender].high_avoid > 0 && attacker != defender){
				battle_data[defender].high_avoid--;
				avoided = true;
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[defender].card + " (Team " + (defender + 1).toString() + ") dodges the attack! (Chance: 1) <br>";
			}

			if (avoided == true){
				if (twice == 1)
					auto_heal(defender);
			}
			else{
				// Damage Calc
				pre_hp = battle_data[defender].hp_left;
				damage = damage_dealer(attacker, defender, attack_skill, attack_attr, dmg_rate, reduc_rate, 0, false);
				if (attack_skill.search("Transfusion") != -1 && damage > pre_hp)
					damage = pre_hp;

				// Mirror Damage
				mp_cost = 700;
				if (battle_data[defender].pressure == true)
					mp_cost *= 2;
				if (base_data[defender].gear.search("All Cost -") != -1)
					mp_cost = Math.round(mp_cost * (1 - 0.01 * base_data[defender].gear_lv));
				if (battle_data[defender].reflectable == true && battle_data[defender].mp_left >= mp_cost && twice == 1 && attacker != defender){
					for (var i = 0; i < 3; i++){
						if (base_data[defender].skill[i].search("Mirror Damage") != -1){
							if (Math.random() < 0.6){
								mirrored = true;
								battle_data[defender].mp_left -= mp_cost;

								if (show_log == true)
									document.getElementById('res').innerHTML += base_data[defender].card + " (Team " + (defender + 1).toString() + ") uses Mirror Damage! MP: " + battle_data[defender].mp_left + "/" + base_data[defender].mp + " <br>";

								battle_data[attacker].dodgable = false, battle_data[attacker].counterable = false, battle_data[attacker].no_death = true, battle_data[attacker].reflectable = false;
								damage = damage * 0.4;
								damage = damage_dealer(defender, attacker, "Mirror Damage", "None", 0, 0, damage, true);

								

								if (battle_data[attacker].hp_left <= 0){
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") is defeated! <br>";
									result = 1 - attacker;
									return result;
								}
							}
							else
								mirrored = false;
							break;
						}
					}
				}
				if (mirrored == true){
					auto_heal(defender);
				}
				else{
					pre_hp = battle_data[defender].hp_left;
					damage = damage_dealer(attacker, defender, attack_skill, attack_attr, dmg_rate, reduc_rate, 0, true);
					if (attack_skill.search("Transfusion") != -1 && damage > pre_hp)
						damage = pre_hp;

					// Extra Heal, Poison, ATK Debuff
					if (damage > 0){
						if (attack_skill.search("Transfusion") != -1)
							heal_apply(attacker, 0, 0.3 * damage);

						/*
						else if (attack_skill.search("Poison Attack") != -1){
							if (Math.random() < 0.5){
								battle_data[defender].poisoned = true;

								if (show_log == true)
									document.getElementById('res').innerHTML += base_data[defender].card + " (Team " + (defender + 1).toString() + ") is poisoned! <br>";
							}
						}
						*/

						else if (attack_skill.search("Arm Breaker") != -1){
							buff_apply(attacker, defender, "ATK", -0.2);
						}
					}
					

					// If Death Occurs
					if (battle_data[defender].hp_left <= 0){		
						still_alive = death_proc(defender, 1 - defender, attack_skill, pre_hp);

						// If Survived
						if (still_alive == 1){
							// intro_activate = true;
							on_hit_reaction(defender);
							if (battle_data[1 - defender].hp_left <= 0){
								if (show_log == true)
									document.getElementById('res').innerHTML += base_data[1 - defender].card + " (Team " + (1 - defender + 1).toString() + ") is defeated! <br>";
								result = defender;
								return result;
							}

							if (twice == 2){

							}
							else{
								auto_heal(defender);
								battle_length++;
								continue Outer;
							}
						}
						else{ 
							if (show_log == true)
								document.getElementById('res').innerHTML += base_data[defender].card + " (Team " + (defender + 1).toString() + ") is defeated! <br>";
							result = 1 - defender;


							if (battle_data[1 - defender].hp_left <= 0){
								if (show_log == true)
									document.getElementById('res').innerHTML += base_data[1 - defender].card + " (Team " + (2 - defender).toString() + ") is defeated! <br>";
								result = -1;
							}
							else{
								if (battle_data[attacker].poisoned == true){
									damage_dealer(1 - attacker, attacker, "Poison", "None", 0, 0, 0.15 * base_data[attacker].hp, true);
									if (battle_data[attacker].hp_left <= 0){
										if (show_log == true)
											document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") is defeated! <br>";
										result = 1 - attacker;
										return result;
									}
								}
							}
							return result;
						}
					}
					else {
						// Counter
						for (var i = 0; i < 3; i++){
							if (base_data[defender].skill[i].search("Counter") != -1 && attacker != defender){
								if (damage > 0 && battle_data[defender].counterable == true && battle_data[defender].mp_left >= 300 && twice == 1){
									battle_data[defender].mp_left -= 300;
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[defender].card + " (Team " + (defender + 1).toString() + ") uses Counter! MP: " + battle_data[defender].mp_left + "/" + base_data[defender].mp + " <br>";

									avoided = false;
									if (battle_data[attacker].avoid > 0){
										battle_data[attacker].avoid--;
										if (Math.random() < 0.4){
											avoided = true;
											if (show_log == true)
												document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") dodges the attack! (Chance: 0.4) <br>";
										}
										else 
											avoided = false;
									}
									else if (battle_data[attacker].high_avoid > 0){
										battle_data[attacker].high_avoid--;
										avoided = true;
										if (show_log == true)
											document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") dodges the attack! (Chance: 1) <br>";
									}

									if (avoided == true){
										//auto_heal(defender);
									}
									else{
										battle_data[attacker].dodgable = false, battle_data[attacker].counterable = false, battle_data[attacker].no_death = true, battle_data[attacker].reflectable = false;
										damage_dealer(defender, attacker, "Counter", "None", 0, 0, 1.2 * damage, true);
										if (battle_data[attacker].hp_left <= 0){
											if (show_log == true)
												document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") is defeated! <br>";
											result = 1 - attacker;
											return result;
										}
									}
								}
								break;
							}
						}
						
						on_hit_reaction(defender);
						if (battle_data[1 - defender].hp_left <= 0){
							if (show_log == true)
								document.getElementById('res').innerHTML += base_data[1 - defender].card + " (Team " + (1 - defender + 1).toString() + ") is defeated! <br>";
							result = defender;
							return result;
						}

						if (twice == 1)
							auto_heal(defender);
					}
				}
				
			}


			if (attack_skill.search("Double") != -1 || attack_skill.search("Twin") != -1){
				twice--;
				if (show_log == true)
					document.getElementById('res').innerHTML += "Second Attack <br>";
			}
			else
				break;
		}
		
		if (battle_data[attacker].poisoned == true){
			damage_dealer(1 - attacker, attacker, "Poison", "None", 0, 0, 0.15 * base_data[attacker].hp, true);
			if (battle_data[attacker].hp_left <= 0){
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") is defeated! <br>";
				result = 1 - attacker;
				return result;
			}
		}

		battle_length++;
		if (battle_length > 50) 
			break;
	}
	return -1;
}

function basic_calc(){
	document.getElementById('hpc').value = Math.floor(parseInt(document.getElementById('hpc').value) / 2.754).toString();
	document.getElementById('mpc').value = Math.floor(parseInt(document.getElementById('mpc').value) / 2.754).toString();
	document.getElementById('atkc').value = Math.floor(parseInt(document.getElementById('atkc').value) / 2.754).toString();
	document.getElementById('defc').value = Math.floor(parseInt(document.getElementById('defc').value) / 2.754).toString();
	document.getElementById('spdc').value = Math.floor(parseInt(document.getElementById('spdc').value) / 2.754).toString();
	document.getElementById('wisc').value = Math.floor(parseInt(document.getElementById('wisc').value) / 2.754).toString();
}