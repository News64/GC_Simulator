var base_data = [];
var battle_data = [];
var ability_lock_modifier = [0, 0];
var mind_break_modifier = [0, 0];
var explosion_modifier = [0, 0];
var revival_modifier = [0, 0];
var quick_strike_modifier = [0, 0];
var martyr_modifier = [0, 0];
var deft_step_modifier = [0, 0];
var giga_slash_modifier = [0, 0];
var poison_attack_modifier = [0, 0];
var soul_slash_modifier = [0, 0];
var variable_slash_modifier = [0, 0];
var undead_skill_modifier = [0, 0];
var meteor_skill_modifier = [0, 0];
var mp_burn_modifier = [0, 0];
var predator_modifier = [0 ,0];
var dimension_gate_modifier = [0, 0];
var soul_mind_modifier = [0, 0];
var spirit_attack_modifier = [0, 0];
var inherit_atk = 0, inherit_def = 0, inherit_spd = 0, inherit_wis = 0;
var show_log = true;


function test_output(){
	document.getElementById('res').innerHTML = parseInt(document.getElementById('atk1').value);
} 


function generate_table(num_cards) {
	for (var i = 1; i <= num_cards; i++){
		document.getElementById('team_table').innerHTML += "<tr id='tr_card_selection" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_filter_attr" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_type_stone" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_card_attr" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_hp_mp" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_atk_def" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_spd_wis" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_alt_skill" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_attack_skill" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_intro_skill" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_death_skill" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_dodge_skill" + i.toString() + "'> </tr>";
		document.getElementById('team_table').innerHTML += "<tr id='tr_counter_poison" + i.toString() + "'> </tr>";
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
			document.getElementById('tr_attack_skill' + i.toString()).innerHTML += "<td> <span class='words'> Attack Skill: </span> " + "<select id='attack_skill"+ j.toString() + "." + i.toString() + "'> </select> </td>";
			document.getElementById('tr_intro_skill' + i.toString()).innerHTML += "<td> <span class='words'> Intro Skill 1: </span> " + "<select id='intro_skill1"+ j.toString() + "." + i.toString() + "'> </select>"
				+ " <span class='words'> Intro Skill 2: </span> " + "<select id='intro_skill2"+ j.toString() + "." + i.toString() + "'> </select> </td>";
			document.getElementById('tr_death_skill' + i.toString()).innerHTML += "<td> <span class='words'> Death Skill 1: </span> " + "<select id='death_skill1"+ j.toString() + "." + i.toString() + "'> </select>"
				+ " <span class='words'> Death Skill 2: </span> " + "<select id='death_skill2"+ j.toString() + "." + i.toString() + "'> </select> </td>";
			document.getElementById('tr_dodge_skill' + i.toString()).innerHTML += "<td> <span class='words'> Dodge Skill 1: </span>" + "<select id='dodge_skill1"+ j.toString() + "." + i.toString() + "'> </select>"
				+ " <span class='words'> Dodge Skill 2: </span>" + "<select id='dodge_skill2"+ j.toString() + "." + i.toString() + "'> </select> </td>";
			document.getElementById('tr_counter_poison' + i.toString()).innerHTML += "<td> <span class='words'>  Counter Skill: </span>" + "<select id='counter_skill"+ j.toString() + "." + i.toString() + "'> </select>"
				+ " <span class='words'> Poison Skill: </span>" + "<select id='poison_skill"+ j.toString() + "." + i.toString() + "'> </select> </td>";
			document.getElementById('tr_line' + i.toString()).innerHTML += "<td> ---------------------------- </td>";
		}
	}

	document.getElementById('team_table').innerHTML += "<tr> <td> Red EX: <select id='red_ex1' onchange='update_all(10, 1, 0)'> </select> Blue EX: <select id='blue_ex1'> </select> </td>"
		+ "<td> Red EX: <select id='red_ex2' onchange='update_all(10, 2, 0)'> </select> Blue EX: <select id='blue_ex2'> </select> </td> </tr>";
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
	var attack_skill = 'attack_skill' + team_num.toString() + '.' + card_num.toString();
	var intro_skill1 = 'intro_skill1' + team_num.toString() + '.' + card_num.toString();
	var intro_skill2 = 'intro_skill2' + team_num.toString() + '.' + card_num.toString();
	var death_skill1 = 'death_skill1' + team_num.toString() + '.' + card_num.toString();
	var death_skill2 = 'death_skill2' + team_num.toString() + '.' + card_num.toString();
	var dodge_skill1 = 'dodge_skill1' + team_num.toString() + '.' + card_num.toString();
	var dodge_skill2 = 'dodge_skill2' + team_num.toString() + '.' + card_num.toString();
	var counter_skill = 'counter_skill' + team_num.toString() + '.' + card_num.toString();
	var poison_skill = 'poison_skill' + team_num.toString() + '.' + card_num.toString();
	var red_ex = 'red_ex' + team_num.toString();
	var blue_ex = 'blue_ex' + team_num.toString();
	
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
	for (var i = 0; i < 14; i++){
		option = document.createElement("option");
		switch (i){
			case 0: text = 'クール / Cool'; break;
			case 1: text = 'カオス / Chaotic'; break;
			case 2: text = 'ワイルド / Bold'; break;
			case 3: text = 'セクシー / Sexy'; break;
			case 4: text = 'バージン / Erotic'; break;
			case 5: text = 'パワフル / Powerful'; break;
			case 6: text = 'バーサク / Berserk'; break;
			case 7: text = 'ブレイブ / Brave'; break;
			case 8: text = 'ヒーロー / Stalwart'; break;
			case 9: text = 'ヘイスト / Fast'; break;
			case 10: text = 'ソニック / Sonic'; break;
			case 11: text = 'インテリ / Intelligent'; break;
			case 12: text = 'ワイズ / Wise'; break;
			case 13: text = 'エース / Ace'; break;
			default: text = 'クール / Cool'; 
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

	// Init Attack Skills
	list = document.getElementById(attack_skill);
	count = attack_skills.length;
	for (var i = 0; i < count; i++){
		option = document.createElement("option");
		option.value = attack_skills[i];
		option.text = attack_skills[i];
		list.appendChild(option);
	}

	// Init Intro Skills
	list = document.getElementById(intro_skill1);
	list2 = document.getElementById(intro_skill2);
	count = intro_skills.length;
	for (var i = 0; i < count; i++){
		option = document.createElement("option");
		option.value = intro_skills[i];
		option.text = intro_skills[i].slice(3);
		list.appendChild(option);
		option = document.createElement("option");
		option.value = intro_skills[i];
		option.text = intro_skills[i].slice(3);
		list2.appendChild(option);
	}

	// Init Death Skills
	list = document.getElementById(death_skill1);
	list2 = document.getElementById(death_skill2);
	count = death_skills.length;
	for (var i = 0; i < count; i++){
		option = document.createElement("option");
		option.value = death_skills[i];
		option.text = death_skills[i].slice(3);
		list.appendChild(option);
		option = document.createElement("option");
		option.value = death_skills[i];
		option.text = death_skills[i].slice(3);
		list2.appendChild(option);
	}

	// Init Dodge Skills
	list = document.getElementById(dodge_skill1);
	list2 = document.getElementById(dodge_skill2);
	count = dodge_skills.length;
	for (var i = 0; i < count; i++){
		option = document.createElement("option");
		option.value = dodge_skills[i];
		option.text = dodge_skills[i];
		list.appendChild(option);
		option = document.createElement("option");
		option.value = dodge_skills[i];
		option.text = dodge_skills[i];
		list2.appendChild(option);
	}

	// Init Counter Skills
	list = document.getElementById(counter_skill);
	count = counter_skills.length;
	for (var i = 0; i < count; i++){
		option = document.createElement("option");
		option.value = counter_skills[i];
		option.text = counter_skills[i];
		list.appendChild(option);
	}

	// Init Poison Skills
	list = document.getElementById(poison_skill);
	count = poison_skills.length;
	for (var i = 0; i < count; i++){
		option = document.createElement("option");
		option.value = poison_skills[i];
		option.text = poison_skills[i];
		list.appendChild(option);
	}

	if (card_num == 1){
		// Init Red EX
		list = document.getElementById(red_ex);
		count = red_exs.length;
		for (var i = 0; i < count; i++){
			option = document.createElement("option");
			option.value = red_exs[i];
			option.text = red_exs[i];
			list.appendChild(option);
		}

		// Init Blue EX
		list = document.getElementById(blue_ex);
		count = blue_exs.length;
		for (var i = 0; i < count; i++){
			option = document.createElement("option");
			option.value = blue_exs[i];
			option.text = blue_exs[i];
			list.appendChild(option);
		}
	}

	// Init Colosseum: Only Once
	if (team_num == 1 && card_num == 1){
		list = document.getElementById('num_cards');
		for (var j = 1; j <= 10; j++){
			option = document.createElement("option");
			option.value = j.toString();
			option.text = j.toString();
			list.appendChild(option);
		}
		// document.getElementById('num_cards')[9].selected = true;

		for (var j = 1; j <= 3 ; j++){
			list = document.getElementById('colo_buff_attr' + j.toString());
			count = attributes.length;
			for (var i = 0; i < count; i++){
				option = document.createElement("option");
				option.value = attributes[i];
				option.text = attributes[i];
				list.appendChild(option);
			}

			list = document.getElementById('colo_buff_rate' + j.toString());
			count = colo_rates.length;
			for (var i = 0; i < count; i++){
				option = document.createElement("option");
				option.value = colo_rates[i];
				option.text = colo_rates[i];
				list.appendChild(option);
			}
		}

		list = document.getElementById('colo_buff_skill');
		count = blue_exs.length;
		for (var i = 0; i < count; i++){
			option = document.createElement("option");
			option.value = blue_exs[i];
			option.text = blue_exs[i];
			list.appendChild(option);
		}
	}

	// Generate Initial Box Values
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
	var attack_skill = 'attack_skill' + team_num.toString() + '.' + card_num.toString();
	var intro_skill1 = 'intro_skill1' + team_num.toString() + '.' + card_num.toString();
	var intro_skill2 = 'intro_skill2' + team_num.toString() + '.' + card_num.toString();
	var death_skill1 = 'death_skill1' + team_num.toString() + '.' + card_num.toString();
	var death_skill2 = 'death_skill2' + team_num.toString() + '.' + card_num.toString();
	var dodge_skill1 = 'dodge_skill1' + team_num.toString() + '.' + card_num.toString();
	var dodge_skill2 = 'dodge_skill2' + team_num.toString() + '.' + card_num.toString();
	var counter_skill = 'counter_skill' + team_num.toString() + '.' + card_num.toString();
	var poison_skill = 'poison_skill' + team_num.toString() + '.' + card_num.toString();
	var red_ex = 'red_ex' + team_num.toString();
	var blue_ex = 'blue_ex' + team_num.toString();

	var hp_rate, mp_rate, atk_rate, def_rate, spd_rate, wis_rate;

	switch (document.getElementById(type).value){
		case "クール / Cool": hp_rate = 1.0, mp_rate = 1.0, atk_rate = 1.0, def_rate = 1.0, spd_rate = 1.0, wis_rate = 1.0; break; 
		case "カオス / Chaotic": hp_rate = 1.1, mp_rate = 1.0, atk_rate = 1.0, def_rate = 1.0, spd_rate = 1.0, wis_rate = 0.9; break;
		case "ワイルド / Bold": hp_rate = 1.15, mp_rate = 1.0, atk_rate = 1.0, def_rate = 1.0, spd_rate = 1.0, wis_rate = 0.85; break;
		case "セクシー / Sexy": hp_rate = 0.9, mp_rate = 1.1, atk_rate = 1.0, def_rate = 1.0, spd_rate = 1.0, wis_rate = 1.0; break;
		case "バージン / Erotic": hp_rate = 0.85, mp_rate = 1.15, atk_rate = 1.0, def_rate = 1.0, spd_rate = 1.0, wis_rate = 1.0; break;
		case "パワフル / Powerful": hp_rate = 1.0, mp_rate = 1.0, atk_rate = 1.1, def_rate = 1.0, spd_rate = 0.9, wis_rate = 1.0; break;
		case "バーサク / Berserk": hp_rate = 1.0, mp_rate = 1.0, atk_rate = 1.15, def_rate = 1.0, spd_rate = 0.85, wis_rate = 1.0; break;
		case "ブレイブ / Brave": hp_rate = 1.0, mp_rate = 0.9, atk_rate = 1.0, def_rate = 1.1, spd_rate = 1.0, wis_rate = 1.0; break;
		case "ヒーロー / Stalwart": hp_rate = 1.0, mp_rate = 0.85, atk_rate = 1.0, def_rate = 1.15, spd_rate = 1.0, wis_rate = 1.0; break;
		case "ヘイスト / Fast": hp_rate = 1.0, mp_rate = 1.0, atk_rate = 1.0, def_rate = 0.9, spd_rate = 1.1, wis_rate = 1.0; break;
		case "ソニック / Sonic": hp_rate = 1.0, mp_rate = 1.0, atk_rate = 1.0, def_rate = 0.85, spd_rate = 1.15, wis_rate = 1.0; break;
		case "インテリ / Intelligent": hp_rate = 1.0, mp_rate = 1.0, atk_rate = 0.9, def_rate = 1.0, spd_rate = 1.0, wis_rate = 1.1; break;
		case "ワイズ / Wise": hp_rate = 1.0, mp_rate = 1.0, atk_rate = 0.85, def_rate = 1.0, spd_rate = 1.0, wis_rate = 1.15; break;
		case "エース / Ace": hp_rate = 1.1, mp_rate = 1.1, atk_rate = 1.1, def_rate = 1.1, spd_rate = 1.1, wis_rate = 1.1; break;
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

				document.getElementById(hp).value = Math.floor((data[i].hp * (1 + 1.5 / 59 * 69) * hp_rate + data[i].hp * 0.55 * stone_rate) ).toString();
				document.getElementById(mp).value = Math.floor((data[i].mp * (1 + 1.5 / 59 * 69) * mp_rate + data[i].mp * 0.55 * stone_rate) ).toString();
				document.getElementById(atk).value = Math.floor((data[i].atk * (1 + 1.5 / 59 * 69) * atk_rate + data[i].atk * 0.55 * stone_rate) ).toString();
				document.getElementById(def).value = Math.floor((data[i].def * (1 + 1.5 / 59 * 69) * def_rate + data[i].def * 0.55 * stone_rate) ).toString();
				document.getElementById(spd).value = Math.floor((data[i].spd * (1 + 1.5 / 59 * 69) * spd_rate + data[i].spd * 0.55 * stone_rate) ).toString();
				document.getElementById(wis).value = Math.floor((data[i].wis * (1 + 1.5 / 59 * 69) * wis_rate + data[i].wis * 0.55 * stone_rate) ).toString();

				if (mode != 0){
					skill_count = document.getElementById(attr).options.length;
					for (var j = 0; j < skill_count; j++){
						if (document.getElementById(attr).options[j].value == data[i].attr){
							document.getElementById(attr).options[j].selected = true;
							break;
						}
					}
				}

				skill_count = document.getElementById(attack_skill).options.length;
				for (var j = 0; j < skill_count; j++){
					if (document.getElementById(attack_skill).options[j].value == data[i].attack_skill){
						document.getElementById(attack_skill).options[j].selected = true;
						break;
					}
				}

				skill_count = document.getElementById(intro_skill1).options.length;
				ok = 0;
				for (var j = 0; j < skill_count; j++){
					if (document.getElementById(intro_skill1).options[j].text == data[i].intro_skill1){
						document.getElementById(intro_skill1).options[j].selected = true;
						ok += 1;
					}
					if (document.getElementById(intro_skill2).options[j].text == data[i].intro_skill2){
						document.getElementById(intro_skill2).options[j].selected = true;
						ok += 1;
					}
					if (ok >= 2)
						break;
				}

				skill_count = document.getElementById(death_skill1).options.length;
				ok = 0;
				for (var j = 0; j < skill_count; j++){
					if (document.getElementById(death_skill1).options[j].text == data[i].death_skill1){
						document.getElementById(death_skill1).options[j].selected = true;
						ok += 1;
					}
					if (document.getElementById(death_skill2).options[j].text == data[i].death_skill2){
						document.getElementById(death_skill2).options[j].selected = true;
						ok += 1;
					}
					if (ok >= 2)
						break;
				}

				skill_count = document.getElementById(dodge_skill1).options.length;
				ok = 0;
				for (var j = 0; j < skill_count; j++){
					if (document.getElementById(dodge_skill1).options[j].text == data[i].dodge_skill1){
						document.getElementById(dodge_skill1).options[j].selected = true;
						ok += 1;
					}
					if (document.getElementById(dodge_skill2).options[j].text == data[i].dodge_skill2){
						document.getElementById(dodge_skill2).options[j].selected = true;
						ok += 1;
					}
					if (ok >= 2)
						break;
				}

				skill_count = document.getElementById(poison_skill).options.length;
				for (var j = 0; j < skill_count; j++){
					if (document.getElementById(poison_skill).options[j].value == data[i].poison_skill){
						document.getElementById(poison_skill).options[j].selected = true;
						break;
					}
				}

				skill_count = document.getElementById(counter_skill).options.length;
				for (var j = 0; j < skill_count; j++){
					if (document.getElementById(counter_skill).options[j].value == data[i].counter_skill){
						document.getElementById(counter_skill).options[j].selected = true;
						break;
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

	var hp_boost = 1, mp_boost = 1, atk_boost = 1, def_boost = 1, spd_boost = 1, wis_boost = 1;
	var temp = document.getElementById(red_ex).value.split(" ");
	var percentage;
	if (temp[0] == "All" || temp[0].indexOf(document.getElementById(attr).value) != -1){
		if (temp[2] == "All" || temp[2] == "HP")
			hp_boost *= 1 + parseFloat(temp[1]) / 100.0;
		if (temp[2] == "All" || temp[2] == "MP")
			mp_boost *= 1 + parseFloat(temp[1]) / 100.0;
		if (temp[2] == "All" || temp[2] == "Attack")
			atk_boost *= 1 + parseFloat(temp[1]) / 100.0;
		if (temp[2] == "All" || temp[2] == "Defend")
			def_boost *= 1 + parseFloat(temp[1]) / 100.0;
		if (temp[2] == "All" || temp[2] == "Speed")
			spd_boost *= 1 + parseFloat(temp[1]) / 100.0;
		if (temp[2] == "All" || temp[2] == "Wisdom")
			wis_boost *= 1 + parseFloat(temp[1]) / 100.0;
		if (temp.length > 3){
			if (temp[5] == "Wisdom")
			wis_boost *= 1 + parseFloat(temp[4]) / 100.0;
		}
	}
	for (var i = 1; i <= 3; i++){
		if (document.getElementById('colo_buff_attr' + i.toString()).value == document.getElementById(attr).value){
			percentage = document.getElementById('colo_buff_rate' + i.toString()).value;
			hp_boost *= 1 + parseFloat(percentage) / 100.0;
			mp_boost *= 1 + parseFloat(percentage) / 100.0;
			atk_boost *= 1 + parseFloat(percentage) / 100.0;
			def_boost *= 1 + parseFloat(percentage) / 100.0;
			spd_boost *= 1 + parseFloat(percentage) / 100.0;
			wis_boost *= 1 + parseFloat(percentage) / 100.0;
		}
	}

	document.getElementById(hp).value = Math.floor(parseInt(document.getElementById(hp).value) * hp_boost).toString();
	document.getElementById(mp).value = Math.floor(parseInt(document.getElementById(mp).value) * mp_boost).toString();
	document.getElementById(atk).value = Math.floor(parseInt(document.getElementById(atk).value) * atk_boost).toString();
	document.getElementById(def).value = Math.floor(parseInt(document.getElementById(def).value) * def_boost).toString();
	document.getElementById(spd).value = Math.floor(parseInt(document.getElementById(spd).value) * spd_boost).toString();
	document.getElementById(wis).value = Math.floor(parseInt(document.getElementById(wis).value) * wis_boost).toString();
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
			document.getElementById('attack_skill' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('intro_skill1' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('intro_skill2' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('death_skill1' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('death_skill2' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('dodge_skill1' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('dodge_skill2' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('counter_skill' + j.toString() + '.' + i.toString()).style.display = "inline";
			document.getElementById('poison_skill' + j.toString() + '.' + i.toString()).style.display = "inline";
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
			document.getElementById('attack_skill' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('intro_skill1' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('intro_skill2' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('death_skill1' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('death_skill2' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('dodge_skill1' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('dodge_skill2' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('counter_skill' + j.toString() + '.' + i.toString()).style.display = "none";
			document.getElementById('poison_skill' + j.toString() + '.' + i.toString()).style.display = "none";
		}
	}
}




function attr_cmp(a, b){
	if (a == "Naught" || b == "Naught") return 0;
	if (a == b) return -1;
	switch (a){
		case "Fire": if(b == "Water" || b == "Light") return -1; if(b == "Wind" || b == "Undead") return 1; return 0;
        case "Water": if(b == "Thunder" || b == "Poison") return -1; if(b == "Fire" || b == "Machine") return 1; return 0;
        case "Earth": if(b == "Wind" || b == "Darkness") return -1; if(b == "Thunder" || b == "Poison") return 1; return 0;
        case "Thunder": if(b == "Earth" || b == "Light") return -1; if(b == "Water" || b == "Machine") return 1; return 0;
        case "Wind": if(b == "Fire" || b == "Undead") return -1; if(b == "Earth" || b == "Darkness") return 1; return 0;
        case "Poison": if(b == "Earth" || b == "Undead") return -1; if(b == "Water" || b == "Darkness") return 1; return 0;
        case "Undead": if(b == "Fire" || b == "Machine") return -1; if(b == "Wind" || b == "Poison") return 1; return 0;
        case "Machine": if(b == "Water" || b == "Thunder") return -1; if(b == "Undead" || b == "Light") return 1; return 0;
        case "Light": if(b == "Machine" || b == "Darkness") return -1; if(b == "Fire" || b == "Thunder") return 1; return 0;
        case "Darkness": if(b == "Wind" || b == "Poison") return -1; if(b == "Earth" || b == "Light") return 1; return 0;
        default: return 0;
	}
}

function buff_apply(id1, id2, name){
	var mp_cost = 0;
	if (name == "4: Multi Block") mp_cost = 600;
	else if (name == "4: Healing Light") mp_cost = 300;
	else if (name == "4: All Shift") mp_cost = 900;
	else if (name.search("Shift") != -1) mp_cost = 600;
	else if (name.search("_") != -1) mp_cost = 400;
	else if (name.indexOf("+10") != -1) mp_cost = 100;
	else if (name.indexOf("+20") != -1) mp_cost = 200;
	else if (name.indexOf("+25") != -1) mp_cost = 400;
	else if (name.indexOf("+40") != -1) mp_cost = 1000;
	else if (name.indexOf("-20") != -1) mp_cost = 150;
	else if (name.indexOf("-40") != -1) mp_cost = 1000;

	if (battle_data[id1].mp_left < mp_cost)
		return;
	else
		battle_data[id1].mp_left -= mp_cost;


	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ") uses " + name.slice(3) + "! <br>";
	if (name == "4: Multi Block") {
		battle_data[id1].multi_block = true;
		return;
	}
	if (name == "4: Healing Light") {
		battle_data[id1].healing = 5;
		return;
	}
	if (name == "4: Power Shift") { 
		battle_data[id1].atk_buff += 0.2;
		if (battle_data[id2].resist == false && battle_data[id2].temp_resist == false) 
			battle_data[id2].def_debuff += 0.2; 
		battle_data[id2].temp_resist = false;
	}
	if (name == "4: Mind Shift") { 
		battle_data[id1].wis_buff += 0.2; 
		if (battle_data[id2].resist == false && battle_data[id2].temp_resist == false) 
			battle_data[id2].wis_debuff += 0.2; 
		battle_data[id2].temp_resist = false;
	}
	if (name == "4: Fast Shift") { 
		battle_data[id1].spd_buff += 0.2; 
		if (battle_data[id2].resist == false && battle_data[id2].temp_resist == false) 
			battle_data[id2].wis_debuff += 0.2; 
		battle_data[id2].temp_resist = false;
	}
	if (name == "4: All Shift") { 
		battle_data[id1].atk_buff += 0.2, battle_data[id1].def_buff += 0.2, battle_data[id1].spd_buff += 0.2, battle_data[id1].wis_buff += 0.2; 
		if (battle_data[id2].resist == false && battle_data[id2].temp_resist == false) 
			battle_data[id2].atk_debuff += 0.4, battle_data[id2].def_debuff += 0.4, battle_data[id2].spd_debuff += 0.4, battle_data[id2].wis_debuff += 0.4; 
		battle_data[id2].temp_resist = false;
	}
	var temp = name.split(" ");
	switch (temp[1]){
		case "Attack": 
			if (temp[2].charAt(0) == "+")
				battle_data[id1].atk_buff += parseFloat(temp[2].slice(1)) / 100.0;
			else{
				if (battle_data[id2].resist == false && battle_data[id2].temp_resist == false) 
					battle_data[id2].atk_debuff += parseFloat(temp[2].slice(1)) / 100.0;
				battle_data[id2].temp_resist = false;
			}
			break;
		case "Defend": 
			if (temp[2].charAt(0) == "+")
				battle_data[id1].def_buff += parseFloat(temp[2].slice(1)) / 100.0;
			else{
				if (battle_data[id2].resist == false && battle_data[id2].temp_resist == false) 
					battle_data[id2].def_debuff += parseFloat(temp[2].slice(1)) / 100.0;
				battle_data[id2].temp_resist = false;
			}
			break;
		case "Speed": 
			if (temp[2].charAt(0) == "+")
				battle_data[id1].spd_buff += parseFloat(temp[2].slice(1)) / 100.0;
			else{
				if (battle_data[id2].resist == false && battle_data[id2].temp_resist == false) 
					battle_data[id2].spd_debuff += parseFloat(temp[2].slice(1)) / 100.0;
				battle_data[id2].temp_resist = false;
			}
			break;
		case "Wisdom": 
			if (temp[2].charAt(0) == "+")
				battle_data[id1].wis_buff += parseFloat(temp[2].slice(1)) / 100.0;
			else{
				if (battle_data[id2].resist == false && battle_data[id2].temp_resist == false) 
					battle_data[id2].wis_debuff += parseFloat(temp[2].slice(1)) / 100.0;
				battle_data[id2].temp_resist = false;
			}
			break;
		case "Attack_Defend": battle_data[id1].atk_buff += 0.1; battle_data[id1].def_buff += 0.1; break;
		case "Attack_Speed": battle_data[id1].atk_buff += 0.1; battle_data[id1].spd_buff += 0.1; break;
		case "Attack_Wisdom": battle_data[id1].atk_buff += 0.1; battle_data[id1].wis_buff += 0.1; break;
		case "Defend_Speed": battle_data[id1].def_buff += 0.1; battle_data[id1].spd_buff += 0.1; break;
		case "Defend_Wisdom": battle_data[id1].def_buff += 0.1; battle_data[id1].wis_buff += 0.1; break;
		case "Speed_Wisdom": battle_data[id1].spd_buff += 0.1; battle_data[id1].wis_buff += 0.1; break;
	}

	if (battle_data[id2].atk_debuff > 0.5)
		battle_data[id2].atk_debuff = 0.5;
	if (battle_data[id2].def_debuff > 0.5)
		battle_data[id2].def_debuff = 0.5;
	if (battle_data[id2].spd_debuff > 0.5)
		battle_data[id2].spd_debuff = 0.5;
	if (battle_data[id2].wis_debuff > 0.5)
		battle_data[id2].wis_debuff = 0.5;
}

function damage_dealer(id1, id2, attack_skill, attack_attr, dmg_rate, reduc_rate, fixed){
	var d1 = base_data[id2].dodge_skill1; 
	var d2 = base_data[id2].dodge_skill2;
	var damage = 0, chance = 0, dodge_chance = 0, attr_adv, extra_curse = 0;
	var insta_death = false, dodged = false, undead = false, blocked = false, curse = false;
	var poison = base_data[id1].poison_skill;

	if (attack_attr == "None"){
		damage = Math.round(fixed);
	}
	else if(attack_attr == "Physical"){
		if (battle_data[id2].mp_left >= 300 && battle_data[id2].dodgable == true && battle_data[id2].mind_break == false && 
			battle_data[id2].sleep == 0 && battle_data[id2].freeze == false && battle_data[id2].abs_mind_break == false){
			if (d1.search("Deft Step") != -1){
				if (d1.search("Dark") != -1)
					dodge_chance = 1;
				else
					dodge_chance = 0.7 + deft_step_modifier[id2];
			}
			if (d2.search("Deft Step") != -1){
				if (d2.search("Dark") != -1)
					dodge_chance = 1;
				else
					dodge_chance = 0.7 + deft_step_modifier[id2];
			}
			if (battle_data[id2].mp_left >= 600 && (d1.search("Cursing Dance") != -1 || d2.search("Cursing Dance") != -1) && battle_data[id2].cursing_dance > 0){
				battle_data[id2].cursing_dance -= 1;
				dodge_chance = 1;
				curse = true;
				if (d1.search("\\+S") != -1 || d2.search("\\+S") != -1)
					extra_curse = 0.3;
			}
		}
		if (Math.random() < dodge_chance){
			damage = 0;
			dodged = true;
			if (curse == true)
				battle_data[id2].mp_left -= 600;
			else
				battle_data[id2].mp_left -= 300;
		}
		else{
			damage = Math.round( (base_data[id1].atk + battle_data[id1].inherit_atk) * (dmg_rate + battle_data[id1].atk_buff - battle_data[id1].atk_debuff)
				   - (base_data[id2].def + battle_data[id2].inherit_def) * (1 + battle_data[id2].def_buff - battle_data[id2].def_debuff) * reduc_rate);
		}
	}
	else{
		if (battle_data[id2].mp_left >= 300 && battle_data[id2].dodgable == true && battle_data[id2].mind_break == false && 
			battle_data[id2].sleep == 0 && battle_data[id2].freeze == false && battle_data[id2].abs_mind_break == false){
			if (d1.search("Mirage Drive") != -1){
				if (d1.search("Dark") != -1)
					dodge_chance = 1;
				else
					dodge_chance = 0.8 + deft_step_modifier[id2];
			}
			if (d2.search("Mirage Drive") != -1){
				if (d2.search("Dark") != -1)
					dodge_chance = 1;
				else
					dodge_chance = 0.8 + deft_step_modifier[id2];
			}
			if (battle_data[id2].mp_left >= 600 && (d1.search("Cursing Dance") != -1 || d2.search("Cursing Dance") != -1) && battle_data[id2].cursing_dance > 0){
				battle_data[id2].cursing_dance -= 1;
				dodge_chance = 1;
				curse = true;
				if (d1.search("\\+S") != -1 || d2.search("\\+S") != -1)
					extra_curse = 0.3;
			}
		}
		if (Math.random() < dodge_chance){
			damage = 0;
			dodged = true;
			if (curse == true)
				battle_data[id2].mp_left -= 600;
			else
				battle_data[id2].mp_left -= 300;
		}
		else{
			if (battle_data[id2].multi_block == true)
				attr_adv = -1;
			else
				attr_adv = attr_cmp(attack_attr, base_data[id2].attr);

			if (attack_skill == "Undead +4EX")
				dmg_rate = 1.5;
			if (attack_skill == "Undead +S")
				dmg_rate = 1.9;

			damage = Math.round( (base_data[id1].wis + battle_data[id1].inherit_wis) * (dmg_rate + battle_data[id1].wis_buff - battle_data[id1].wis_debuff) * (1 + attr_adv * 0.15)
				   - (base_data[id2].wis + battle_data[id2].inherit_wis) * (1 + battle_data[id2].wis_buff - battle_data[id2].wis_debuff) * reduc_rate);
			if (attack_skill.search("Undead +") != -1){
				undead = true;
				chance = damage / battle_data[id2].hp_left + undead_skill_modifier[id1];
				damage = 0;
				if (attack_skill != "Undead +4EX" && attack_skill != "Undead +S"){
					if (chance > 0.9 - (4 - parseInt(attack_skill.charAt(8))) * 0.1)
						chance = 0.9 - (4 - parseInt(attack_skill.charAt(8))) * 0.1;
				}
				if (Math.random() < chance){
					insta_death = true;
					battle_data[id2].hp_left = 0;
					damage = 0;
				}
			}
		}
	}
	if (damage <= 0 && dodged == false && undead == false)
		damage = 1;
	if (damage > 0 && battle_data[id2].shield == true && battle_data[id2].blockable == true){
		damage = 0;
		blocked = true;
		battle_data[id2].shield = false;
	}
	if ( (attack_skill == "Crush Drain" || attack_skill == "Soul Drain" || attack_skill == "Life Drain") && damage > battle_data[id2].hp_left)
		damage = battle_data[id2].hp_left;
	battle_data[id2].hp_left -= damage;
	if (damage > 0 && battle_data[id2].freeze == true){
		battle_data[id2].hp_left = 0;
		battle_data[id2].freeze = false;
	}
	if (damage != 0){
		if (show_log == true)
			document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ") deals " + damage.toString() + " damage to " 
				+ base_data[id2].card + " (Team " + (id2 + 1).toString() + ")! HP: " + battle_data[id2].hp_left + "/" + base_data[id2].hp + " <br>";
		if (poison != "None" && (attack_skill.charCodeAt(0) < 48 || attack_skill.charCodeAt(0) > 57) && attack_skill != "Counter" && battle_data[id2].hp_left > 0 && 
			battle_data[id1].mind_break == false && battle_data[id2].resist == false){
			if (poison.search("Deadly Poison") != -1)
				chance = 1;
			else
				chance = 0.8;
			if (Math.random() < chance){
				if (battle_data[id2].temp_resist == true)
					battle_data[id2].temp_resist = false;
				else{
					if (poison.search("Deadly Poison \\+S") != -1){
						battle_data[id2].poisoned_S = true;
						if (show_log == true)
							document.getElementById('res').innerHTML += base_data[id2].card + " (Team " + (id2 + 1).toString() + ") is badly poisoned! (Chance: " + chance.toString() + ") <br>";
					}
					else{
						battle_data[id2].poisoned = true;
						if (show_log == true)
							document.getElementById('res').innerHTML += base_data[id2].card + " (Team " + (id2 + 1).toString() + ") is poisoned! (Chance: " + chance.toString() + ") <br>";
					}
				}
			}
		}
	}
	else{
		if (dodged == true){
			if (show_log == true)
				document.getElementById('res').innerHTML += "But it is dodged! (Chance: " + dodge_chance.toString() + ") <br>";
			if (curse == true){
				if (show_log == true){
					if (extra_curse == 0)
						document.getElementById('res').innerHTML += base_data[id2].card + "'s Cursing Dance's effect! <br>";
					else
						document.getElementById('res').innerHTML += base_data[id2].card + "'s Cursing Dance +S's effect! <br>";
				}
				if (battle_data[id1].resist == false && battle_data[id1].temp_resist == false){
					mp_damage_dealer(id2, id1, "Cursing Dance", "None", 0, 0, 0.7 + extra_curse);	
					battle_data[id1].temp_resist = false;
				}
				else
					if (show_log == true)
						document.getElementById('res').innerHTML += "But it failed! <br> ";
			}
		}
		else if (blocked == true){
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ") deals 0 damage to " + base_data[id2].card + " (Team " + (id2 + 1).toString() + ") because of the shield! <br>";
		}
		else if (attack_skill.search("Undead +") != -1){
			if (insta_death == true){
				if (show_log == true)
					document.getElementById('res').innerHTML += "Death effect succeeds on " + base_data[id2].card + " (Team " + (id2 + 1).toString() + ")! (Chance: " + chance.toString() + ") <br>";
			}
			else
				if (show_log == true)
					document.getElementById('res').innerHTML += "Death effect does not work on " + base_data[id2].card + " (Team " + (id2 + 1).toString() + ")! (Chance: " + (1 - chance).toString() + ")<br>";
		}
	}
	return damage;
}

function mp_damage_dealer(id1, id2, attack_skill, attack_attr, dmg_rate, reduc_rate, percentage){
	var damage, attr_adv;
	if (percentage != 0)
		damage = Math.round(base_data[id2].mp * percentage);
	else{
		attr_adv = attr_cmp(attack_attr, base_data[id2].attr);
		damage = Math.round(base_data[id1].wis * (dmg_rate + battle_data[id1].wis_buff - battle_data[id1].wis_debuff) * (1 + attr_adv * 0.15)
			   - base_data[id2].wis * (1 + battle_data[id2].wis_buff - battle_data[id2].wis_debuff) * reduc_rate);
	}
	
	if (damage > battle_data[id2].mp_left) 
		damage = battle_data[id2].mp_left;
	if (damage < 0)
		damage = 0;

	battle_data[id2].mp_left -= damage;
	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ") deals " + damage.toString() + " MP damage to " + base_data[id2].card + " (Team " + (id2 + 1).toString() + ")! MP: " + battle_data[id2].mp_left + "/" + base_data[id2].mp + " <br>";
	return damage;
}

function death_proc(id1, id2, attack_skill){
	if (battle_data[id1].no_death == true || battle_data[id1].sleep >= 1){
		if (attack_skill == "Death Slash"){
			battle_data[id2].shield = true;
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[id2].card + " (Team " + (id2 + 1).toString() + ") can block an attack for once! <br>";
		}
		return -1;
	}


	var death1 = base_data[id1].death_skill1;
	var death2 = base_data[id1].death_skill2;
	var revival_proc;

	// Revival
	if (death1.charAt(0) == "1" && battle_data[id1].death1_used == false){
		revival_proc = revival_apply(id1, death1);
		if (revival_proc != 0)
			battle_data[id1].death1_used = true;
		if (revival_proc == 1)
			return 1;
	}
	if (death2.charAt(0) == "1" && battle_data[id1].death2_used == false){
		revival_proc = revival_apply(id1, death2);
		if (revival_proc != 0)
			battle_data[id1].death2_used = true;
		if (revival_proc == 1)
			return 1;
	}

	// Last Stand
	if (battle_data[id1].mp_left > 0 && death1.charAt(0) == "2" && battle_data[id1].death1_used == false){
		last_stand_apply(id1, death1);
		battle_data[id1].death1_used = true;
		if (battle_data[id1].hp_left > 0)
			return 1;
	}
	if (battle_data[id1].mp_left > 0 && death2.charAt(0) == "2" && battle_data[id1].death2_used == false){
		last_stand_apply(id1, death2);
		battle_data[id1].death2_used = true;
		if (battle_data[id1].hp_left > 0)
			return 1;
	}


	// Death Slash Effect
	if (attack_skill == "Death Slash"){
		battle_data[id2].shield = true;
		if (show_log == true)
			document.getElementById('res').innerHTML += base_data[id2].card + " (Team " + (id2 + 1).toString() + ") can block an attack for once! <br>";
	}


	// On Death Status (todo)
	if (battle_data[id1].mp_left > 0 && death1.charAt(0) == "3"){
		death_status_apply(id1, id2, death1);
	}
	if (battle_data[id1].mp_left > 0 && death2.charAt(0) == "3"){
		death_status_apply(id1, id2, death2);
	}

	// Self Destruct
	if (death1.charAt(0) == "4"){
		death_damage_apply(id1, id2, death1);
	}
	if (death2.charAt(0) == "4"){
		death_damage_apply(id1, id2, death2);
	}

	return 0;
}

function revival_apply(id, name){
	if (name.search("Free") == -1 && battle_data[id].mp_left < 1)
		return 0;
	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") uses " + name.slice(3) + "! <br>";
	var chance;
	if (name.search("Dark") != -1)
		chance = 1;
	else if (name.search("Godly") != -1)
		chance = 0.8 + revival_modifier[id];
	else
		chance = 0.55 + revival_modifier[id];

	if (Math.random() < chance){
		battle_data[id].hp_left = base_data[id].hp;
		if (name.search("Free") == -1)
			battle_data[id].mp_left -= 1;
		if (show_log == true)
			document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") revives! (Chance: " + chance.toString() + ") <br>";
		if (name.search("Godly") != -1){
			battle_data[id].mp_left = base_data[id].mp;
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ")'s MP is replenished! <br>";
		}
		return 1;
	}
	else{
		if (show_log == true)
			document.getElementById('res').innerHTML += "But it failed! (Chance: " + (1 - chance).toString() + ") <br>";
		return -1;
	}

}

function last_stand_apply(id, name){
	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") uses " + name.slice(3) + "! <br>";
	var chance;
	battle_data[id].hp_left = 1;
	if (name.search("Bastion") != -1)
		battle_data[id].mp_left -= 1;
	else
		battle_data[id].mp_left = 0;
}

function death_status_apply(id1, id2, skill){
	var mp_cost = 0;
	if (skill == "3: Crystallize")
		mp_cost = 300;
	if (battle_data[id1].mp_left < mp_cost)
		return
	else
		battle_data[id1].mp_left -= mp_cost;

	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ") uses " + skill.slice(3) + "! <br>";
	switch (skill){
		case "3: Deep Sleep":
			if (battle_data[id2].resist == false && battle_data[id2].temp_resist == false){
				battle_data[id2].sleep += 1;
				if (show_log == true)
					document.getElementById('res').innerHTML += "Card " + (id2 + 1).toString() + " becomes asleep! <br>";
			}
			else
				if (show_log == true)
					document.getElementById('res').innerHTML += "But it failed! <br>";
			battle_data[id2].temp_resist = false;
			break;
		case "3: Crystallize":
			if (battle_data[id2].resist == false && battle_data[id2].temp_resist == false){
				battle_data[id2].freeze = true;
				if (show_log == true)
					document.getElementById('res').innerHTML += "Card " + (id2 + 1).toString() + " becomes crystallized! <br>";
			}
			else
				if (show_log == true)
					document.getElementById('res').innerHTML += "But it failed! <br>";
			battle_data[id2].temp_resist = false;
			break;
	}
}

function death_damage_apply(id1, id2, skill){
	var mp_cost = 0, chance;
	var temp1, temp2, temp3, temp4;
	if (skill == "4: Soul Taker" || skill == "4: Mind Crush" || skill == "4: Entrust" || skill == "4: Soul Taker +S"){
		mp_cost = 300;
	}
	else if (skill == "4: Explosion" || skill == "4: Dark Explosion" || skill == "4: Burst")
		mp_cost = 1;
	if (battle_data[id1].mp_left < mp_cost)
		return;
	else
		battle_data[id1].mp_left -= mp_cost;

	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id1].card + " (Team " + (id1 + 1).toString() + ") uses " + skill.slice(3) + "! <br>";
	temp1 = battle_data[id2].dodgable, temp2 = battle_data[id2].counterable, temp3 = battle_data[id2].no_death, temp4 = battle_data[id2].blockable;
	battle_data[id2].dodgable = false, battle_data[id2].counterable = false, battle_data[id2].no_death = true, battle_data[id2].blockable = true;
	switch (skill){
		case "4: Explosion":
			chance = 0.5 + explosion_modifier[id1];
			if (Math.random() < chance)
				damage_dealer(id1, id2, skill, "None", 0, 0, battle_data[id1].mp_left);
			else
				if (show_log == true)
					document.getElementById('res').innerHTML += "But it failed! (Chance: " + (1 - chance).toString() + ") <br>";
			break;
		case "4: Dark Explosion":
			damage_dealer(id1, id2, skill, "None", 0, 0, battle_data[id1].mp_left);
			break;
		case "4: Burst":
			damage_dealer(id1, id2, skill, "None", 0, 0, battle_data[id1].mp_left * 0.7);
			break;
		case "4: Soul Taker":
			battle_data[id2].blockable = false;
			damage_dealer(id1, id2, skill, "Physical", 1.5 + soul_mind_modifier[id1], 0.5, 0);
			break;
		case "4: Soul Taker +S":
			battle_data[id2].blockable = false;
			damage_dealer(id1, id2, skill, "Physical", 1.8 + soul_mind_modifier[id1], 0.5, 0);
			break;
		case "4: Mind Crush":
		case "4: Free Mind Crush":
			battle_data[id2].blockable = false;
			damage_dealer(id1, id2, skill, base_data[id1].attr , 1.5 + soul_mind_modifier[id1], 0.5, 0);
			break;
		case "4: Martyr":
			chance = 0.8;
			if (Math.random() < chance){
				if (battle_data[id2].resist == false && battle_data[id2].temp_resist == false)
					mp_damage_dealer(id1, id2, skill, "None", 0, 0, 0.15 + martyr_modifier[id1]);
				else
					if (show_log == true)
						document.getElementById('res').innerHTML += "But it failed! (Chance: " + (1 - chance).toString() + ") <br>";
				battle_data[id2].temp_resist = false;
			}
			else
				if (show_log == true)
					document.getElementById('res').innerHTML += "But it failed! (Chance: " + (1 - chance).toString() + ") <br>";
			break;
		case "4: Entrust":
			if (battle_data[id2].resist == false && battle_data[id2].temp_resist == false)
				mp_damage_dealer(id1, id2, skill, "None", 0, 0, 1);
			else
				if (show_log == true)
					document.getElementById('res').innerHTML += "But it failed! <br>";
			battle_data[id2].temp_resist = false;
		case "4: Force":
			inherit_atk = Math.round(base_data[id1].atk * 0.08), inherit_def = Math.round(base_data[id1].def * 0.08);
			inherit_spd = Math.round(base_data[id1].spd * 0.08), inherit_wis = Math.round(base_data[id1].wis * 0.08);
			break;
	}
	battle_data[id2].dodgable = temp1, battle_data[id2].counterable = temp2, battle_data[id2].no_death = temp3, battle_data[id2].blockable = temp4;
}

function heal_apply(id, percentage, fixed){
	var amount;
	if (percentage != 0)
		amount = Math.round(base_data[id].hp * percentage);
	else
		amount = Math.round(fixed);
	if (battle_data[id].hp_left + amount > base_data[id].hp)
		amount = base_data[id].hp - battle_data[id].hp_left;
	battle_data[id].hp_left += amount;
	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") heals " + amount.toString() + " damage to itself! HP: " + battle_data[id].hp_left + "/" + base_data[id].hp + " <br>";
}

function mp_heal_apply(id, percentage, fixed){
	var amount;
	if (percentage != 0)
		amount = Math.round(base_data[id].mp * percentage);
	else
		amount = Math.round(fixed);
	if (battle_data[id].mp_left + amount > base_data[id].mp)
		amount = base_data[id].mp - battle_data[id].mp_left;
	battle_data[id].mp_left += amount;
	if (show_log == true)
		document.getElementById('res').innerHTML += base_data[id].card + " (Team " + (id + 1).toString() + ") recovers " + amount.toString() + " MP to itself! MP: " + battle_data[id].mp_left + "/" + base_data[id].mp + " <br>";
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

	// Blue EX & Colosseum Skill Buff Effect
	ability_lock_modifier = [0, 0], mind_break_modifier = [0, 0], explosion_modifier = [0, 0], revival_modifier = [0, 0], quick_strike_modifier = [0, 0];
	martyr_modifier = [0, 0], deft_step_modifier = [0, 0], giga_slash_modifier = [0, 0], poison_attack_modifier = [0, 0], soul_slash_modifier = [0, 0];
	variable_slash_modifier = [0, 0], undead_skill_modifier = [0, 0], meteor_skill_modifier = [0, 0], mp_burn_modifier = [0, 0], 
	predator_modifier = [0, 0], dimension_gate_modifier = [0, 0], soul_mind_modifier = [0, 0], spirit_attack_modifier = [0, 0];
	inherit_atk = 0, inherit_def = 0, inherit_spd = 0, inherit_wis = 0;
	var blue = [ document.getElementById('blue_ex1').value, document.getElementById('blue_ex2').value, document.getElementById('colo_buff_skill').value ];
	for (var i = 0; i < 3; i++){
		switch (blue[i]){
			case "None": break;
			case "Ability Lock":
				if (i != 0) ability_lock_modifier[1] += 0.25;
				if (i != 1) ability_lock_modifier[0] += 0.25;
				break;
			case "Mind Break":
				if (i != 0) mind_break_modifier[1] += 0.2;
				if (i != 1) mind_break_modifier[0] += 0.2;
				break;
			case "Explosion":
				if (i != 0) explosion_modifier[1] += 0.15;
				if (i != 1) explosion_modifier[0] += 0.15;
				break;
			case "Revival":
				if (i != 0) revival_modifier[1] += 0.45;
				if (i != 1) revival_modifier[0] += 0.45;
				break;
			case "Quick Strike":
				if (i != 0) quick_strike_modifier[1] += 0.4;
				if (i != 1) quick_strike_modifier[0] += 0.4;
				break;
			case "Martyr":
				if (i != 0) martyr_modifier[1] += 0.5;
				if (i != 1) martyr_modifier[0] += 0.5;
				break;
			case "Deft Step":
				if (i != 0) deft_step_modifier[1] += 0.3;
				if (i != 1) deft_step_modifier[0] += 0.3;
				break;
			case "Giga Slash":
				if (i != 0) giga_slash_modifier[1] += 0.15;
				if (i != 1) giga_slash_modifier[0] += 0.15;
				break;
			case "Poison Attack":
				if (i != 0) poison_attack_modifier[1] += 0.25;
				if (i != 1) poison_attack_modifier[0] += 0.25;
				break;
			case "Soul Slash":
				if (i != 0) soul_slash_modifier[1] = 999;
				if (i != 1) soul_slash_modifier[0] = 999;
			case "Variable Slash":
				if (i != 0) variable_slash_modifier[1] += 0.1;
				if (i != 1) variable_slash_modifier[0] += 0.1;
				break;
			case "Undead Skill":
				if (i != 0) undead_skill_modifier[1] += 0.03;
				if (i != 1) undead_skill_modifier[0] += 0.03;
				break;
			case "Meteor Skill":
				if (i != 0) meteor_skill_modifier[1] += 0.1;
				if (i != 1) meteor_skill_modifier[0] += 0.1;
				break;
			case "Laevateinn & Arondight":
				if (i != 0) mp_burn_modifier[1] += 0.3;
				if (i != 1) mp_burn_modifier[0] += 0.3;
				break;
			case "Predator":
				if (i != 0) predator_modifier[1] += 0.1;
				if (i != 1) predator_modifier[0] += 0.1;
				break;
			case "Dimension Gate":
				if (i != 0) dimension_gate_modifier[1] += 0.1;
				if (i != 1) dimension_gate_modifier[0] += 0.1;
				break;
			case "Soul Taker & Mind Crush 10%":
				if (i != 0) soul_mind_modifier[1] += 0.1;
				if (i != 1) soul_mind_modifier[0] += 0.1;
				break;
			case "Soul Taker & Mind Crush 30%":
				if (i != 0) soul_mind_modifier[1] += 0.3;
				if (i != 1) soul_mind_modifier[0] += 0.3;
				break;
			case "Spirit Attack":
				if (i != 0) spirit_attack_modifier[1] += 0.1;
				if (i != 1) spirit_attack_modifier[0] += 0.1;
				break;
		}
	}


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
		"attack_skill": document.getElementById('attack_skill' + team_num.toString() + '.' + card_num.toString()).value, 
		"intro_skill1": document.getElementById('intro_skill1' + team_num.toString() + '.' + card_num.toString()).value, "intro_skill2": document.getElementById('intro_skill2' + team_num.toString() + '.' + card_num.toString()).value, 
		"death_skill1": document.getElementById('death_skill1' + team_num.toString() + '.' + card_num.toString()).value, "death_skill2": document.getElementById('death_skill2' + team_num.toString() + '.' + card_num.toString()).value, 
		"dodge_skill1": document.getElementById('dodge_skill1' + team_num.toString() + '.' + card_num.toString()).value, "dodge_skill2": document.getElementById('dodge_skill2' + team_num.toString() + '.' + card_num.toString()).value, 
		"counter_skill": document.getElementById('counter_skill' + team_num.toString() + '.' + card_num.toString()).value, "poison_skill": document.getElementById('poison_skill' + team_num.toString() + '.' + card_num.toString()).value
	};

	battle_data[team_num - 1] = {"atk_buff": 0, "def_buff": 0, "spd_buff": 0, "wis_buff": 0, "atk_debuff": 0, "def_debuff": 0, "spd_debuff": 0, "wis_debuff": 0,
		"inherit_atk": inherit_atk, "inherit_def": inherit_def, "inherit_spd": inherit_spd, "inherit_wis": inherit_wis,
		"exceeded_speed": base_data[team_num - 1].spd + inherit_spd, "hp_left": base_data[team_num - 1].hp, "mp_left": base_data[team_num - 1].mp, 
		"intro1_used": false, "intro2_used": false, "death1_used": false, "death2_used": false, "dodgable": true, "counterable": true, "blockable": true, "no_death": false,
		"resist": false, "temp_resist": false, "shield": false, "healing": 0, "mind_break": false, "poisoned": false, "poisoned_S":false, "sleep": 0, "multi_block": false, 
		"freeze": false, "abs_mind_break": false, "cursing_dance": 0};

	if (base_data[team_num - 1].dodge_skill1.search("Cursing Dance") != -1 || base_data[team_num - 1].dodge_skill2.search("Cursing Dance") != -1)
		battle_data[team_num - 1].cursing_dance += 1;

	inherit_atk = 0, inherit_def = 0, inherit_spd = 0, inherit_wis = 0;
}


function battle(){
	var attacker, defender;
	var attack_skill, attack_attr = "Physical", dmg_rate = 1, reduc_rate = 0.5, mp_cost = 0, hp_cost = 0;
	var matrix;
	var chance;
	var keep = false;
	var damage, counter_skill;
	var temp;
	var pre_hp;
	var result = 0;
	var battle_length = 0;
	var intro_activate = true;
	var still_alive;
	var fake_damage = 0, temp_mp, temp_poison, temp_poison_S, temp_freeze, temp_show_log, temp_blockable, temp_dodgable;

	while (true){ 
		// Speed Decision
		if (show_log == true)
			document.getElementById('res').innerHTML += "Speed: " + battle_data[0].exceeded_speed.toString() + " vs " + battle_data[1].exceeded_speed.toString() + "<br>";
		if (battle_data[0].exceeded_speed >= battle_data[1].exceeded_speed){
			attacker = 0, defender = 1;
		}
		else{
			attacker = 1, defender = 0;
		}
		// Reset Flags
		battle_data[defender].dodgable = true, battle_data[defender].counterable = true, battle_data[defender].no_death = false, battle_data[defender].blockable = true;

		// Intro Skill
		// Matrix: 0 = user, 1 = target, 2 = skill name, 3 = used flag
		if (intro_activate == true){
			intro_activate = false;
			matrix = [
				[attacker, defender, base_data[attacker].intro_skill1, battle_data[attacker].intro1_used],
				[attacker, defender, base_data[attacker].intro_skill2, battle_data[attacker].intro2_used],
				[defender, attacker, base_data[defender].intro_skill1, battle_data[defender].intro1_used],
				[defender, attacker, base_data[defender].intro_skill2, battle_data[defender].intro2_used]
			];
			for (var i = 1; i < 9; i++){
				for (var j = 0; j < 4; j++){
					if (battle_data[matrix[j][0]].sleep == 0 && matrix[j][2].charAt(0) == i.toString() && matrix[j][3] == false){
						switch (i){
							// Priority 1: Quick Strike, Wise Smite, Resist Smite
							case 1:
								if (matrix[j][2] == "1: Resist Smite"){
									if (battle_data[matrix[j][0]].mp_left < 600) 
										break;
									else
										battle_data[matrix[j][0]].mp_left -= 300;
								}
								if (battle_data[matrix[j][0]].mp_left < 300)
									break;
								battle_data[matrix[j][0]].mp_left -= 300;
								if (show_log == true)
									document.getElementById('res').innerHTML += base_data[matrix[j][0]].card + " (Team " + (matrix[j][0] + 1).toString() + ") uses " + matrix[j][2].slice(3) + "! <br>";
								pre_hp = battle_data[matrix[j][1]].hp_left;
								switch (matrix[j][2]){
									case "1: Quick Strike": damage = damage_dealer(matrix[j][0], matrix[j][1], matrix[j][2], "Physical", 0.85 + quick_strike_modifier[matrix[j][0]], 0.5, 0); break;
									case "1: Assault Strike": damage = damage_dealer(matrix[j][0], matrix[j][1], matrix[j][2], "Physical", 1.6 + quick_strike_modifier[matrix[j][0]], 0.5, 0); break;
									case "1: Resist Smite":
									case "1: Wise Smite": 
									case "1: Wise Smite +S": 
										battle_data[matrix[j][1]].dodgable = false; 
										if (matrix[j][2] == "1: Wise Smite +S")
											damage = damage_dealer(matrix[j][0], matrix[j][1], matrix[j][2], base_data[matrix[j][0]].attr, 1.7, 0.5, 0); 
										else
											damage = damage_dealer(matrix[j][0], matrix[j][1], matrix[j][2], base_data[matrix[j][0]].attr, 0.95, 0.5, 0); 
										battle_data[matrix[j][1]].dodgable = true; 
										if (matrix[j][2] == "1: Resist Smite"){
											battle_data[matrix[j][0]].temp_resist = true;
											if (show_log == true)
												document.getElementById('res').innerHTML += base_data[matrix[j][0]].card + " (Team " + (matrix[j][0] + 1).toString() + ") gains temporary resistance against bad status! <br>";
										}
										break;
								}
			
								// If Death Occurs
								if (battle_data[matrix[j][1]].hp_left <= 0){
									death_proc(matrix[j][1], 1 - matrix[j][1], matrix[j][2]);

									// If Survived
									if (battle_data[matrix[j][1]].hp_left > 0){ // Set this to > 1 to allow Last Bastion + Counter combo
										intro_activate = true;
										break;
									}
									else if (battle_data[matrix[j][1]].hp_left <= 0){
										if (show_log == true)
											document.getElementById('res').innerHTML += base_data[matrix[j][1]].card + " (Team " + (matrix[j][1] + 1).toString() + ") is defeated! <br>";
										result = 1 - matrix[j][1];
										if (battle_data[1 - matrix[j][1]].hp_left <= 0){
											if (show_log == true)
												document.getElementById('res').innerHTML += base_data[1 - matrix[j][1]].card + " (Team " + (2 - matrix[j][1]).toString() + ") is defeated! <br>";
											result = -1;
										}
										matrix[j][3] = true;
										battle_data[attacker].intro1_used = matrix[0][3];
										battle_data[attacker].intro2_used = matrix[1][3];
										battle_data[defender].intro1_used = matrix[2][3];
										battle_data[defender].intro2_used = matrix[3][3];
										return result;
									}
									else
										damage = pre_hp - 1;
								}
								{ // Counter
									counter_skill = base_data[matrix[j][1]].counter_skill;
									if (battle_data[matrix[j][1]].mp_left >= 300 && battle_data[matrix[j][1]].mind_break == false && 
										battle_data[matrix[j][1]].sleep == 0 && counter_skill != "None"){
										battle_data[matrix[j][1]].mp_left -= 300;
										if (show_log == true)
											document.getElementById('res').innerHTML += base_data[matrix[j][1]].card + " (Team " + (matrix[j][1] + 1).toString() + ") uses " + counter_skill + "! MP: " + battle_data[matrix[j][1]].mp_left + "/" + base_data[matrix[j][1]].mp + " <br>";
										battle_data[matrix[j][0]].dodgable = false, battle_data[matrix[j][0]].counterable = false;
										damage_dealer(matrix[j][1], matrix[j][0], counter_skill, "None", 0, 0, 1.2 * damage);
										battle_data[matrix[j][0]].dodgable = true, battle_data[matrix[j][0]].counterable = true;

										if (battle_data[matrix[j][0]].hp_left <= 0){
											death_proc(matrix[j][0], 1 - matrix[j][0], "Counter");

											// If Survived
											if (battle_data[matrix[j][0]].hp_left > 0){
												intro_activate = true;
												break;
											}
											if (show_log == true)
												document.getElementById('res').innerHTML += base_data[matrix[j][0]].card + " (Team " + (matrix[j][0] + 1).toString() + ") is defeated! <br>";
											result = 1 - matrix[j][0];
											if (battle_data[1 - matrix[j][0]].hp_left <= 0){
												if (show_log == true)
													document.getElementById('res').innerHTML += base_data[1 - matrix[j][0]].card + " (Team " + (2 - matrix[j][0]).toString() + ") is defeated! <br>";
												result = -1;
											}
											matrix[j][3] = true;
											battle_data[attacker].intro1_used = matrix[0][3];
											battle_data[attacker].intro2_used = matrix[1][3];
											battle_data[defender].intro1_used = matrix[2][3];
											battle_data[defender].intro2_used = matrix[3][3];
											return result;
										}
									}
								}
								break;
							// Priority 2: Divine Shield
							case 2:
								if (battle_data[matrix[j][0]].mp_left >= 600){
									battle_data[matrix[j][0]].mp_left -= 600;
									battle_data[matrix[j][0]].shield = true;
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[matrix[j][0]].card + " (Team " + (matrix[j][0] + 1).toString() + ") can block an attack for once! <br>";
								}
								break;
							// Priority 3: Resistance 
							case 3:
								if (battle_data[matrix[j][0]].mp_left >= 600){
									battle_data[matrix[j][0]].mp_left -= 600;
									battle_data[matrix[j][0]].resist = true;
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[matrix[j][0]].card + " (Team " + (matrix[j][0] + 1).toString() + ") gains resistance against bad status! <br>";
								}
								break;
							// Priority 4: Buff, Debuff, Multi Block, Healing Light
							case 4:
								buff_apply(matrix[j][0], matrix[j][1], matrix[j][2]); 
								break;
							// Priority 5: Celestial Pulse
							case 5:
								if (battle_data[matrix[j][0]].mp_left >= 300 && 
									(battle_data[matrix[j][1]].atk_buff + battle_data[matrix[j][1]].def_buff + battle_data[matrix[j][1]].spd_buff + battle_data[matrix[j][1]].wis_buff != 0 || 
									battle_data[matrix[j][1]].inherit_atk + battle_data[matrix[j][1]].inherit_def + battle_data[matrix[j][1]].inherit_spd + battle_data[matrix[j][1]].inherit_wis != 0 || 
									battle_data[matrix[j][1]].resist == true || battle_data[matrix[j][1]].temp_resist == true || battle_data[matrix[j][1]].healing > 0 || battle_data[matrix[j][1]].shield == true || 
									battle_data[matrix[j][1]].multi_block == true )){
									battle_data[matrix[j][1]].atk_buff = 0, battle_data[matrix[j][1]].def_buff = 0, battle_data[matrix[j][1]].spd_buff = 0, battle_data[matrix[j][1]].wis_buff = 0; 
									battle_data[matrix[j][1]].inherit_atk = 0, battle_data[matrix[j][1]].inherit_def = 0, battle_data[matrix[j][1]].inherit_spd = 0, battle_data[matrix[j][1]].inherit_wis = 0; 
									battle_data[matrix[j][1]].resist = false, battle_data[matrix[j][1]].temp_resist = false, battle_data[matrix[j][1]].healing = 0, battle_data[matrix[j][1]].shield = false;
									battle_data[matrix[j][1]].multi_block = false;
									keep = false;
									battle_data[matrix[j][0]].mp_left -= 300;
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[matrix[j][0]].card + " (Team " + (matrix[j][0] + 1).toString() + ") uses " + matrix[j][2].slice(3) + "! <br>";
								}
								else
									keep = true;
								break;
							// Priority 6: Ability Lock
							case 6:
								if (battle_data[matrix[j][0]].mp_left >= 600){
									if (matrix[j][2].search("Dark") != -1)
										chance = 1;
									else
										chance = 0.75 + ability_lock_modifier[matrix[j][0]];
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[matrix[j][0]].card + " (Team " + (matrix[j][0] + 1).toString() + ") uses " + matrix[j][2].slice(3) + "! <br>";
									battle_data[matrix[j][0]].mp_left -= 600;
									if (Math.random() < chance){
										if (battle_data[matrix[j][1]].resist == false && battle_data[matrix[j][1]].temp_resist == false){
											battle_data[matrix[j][1]].mp_left = 0;
											if (show_log == true)
												document.getElementById('res').innerHTML += base_data[matrix[j][1]].card + " (Team " + (matrix[j][1] + 1).toString() + ")'s MP becomes 0! (Chance: " + chance.toString() + ") <br> ";
										}
										else
											if (show_log == true)
												document.getElementById('res').innerHTML += "But it failed! (Chance: " + (1 - chance).toString() + ") <br> ";
										battle_data[matrix[j][1]].temp_resist = false;
									}
									else
										if (show_log == true)
											document.getElementById('res').innerHTML += "But it failed! (Chance: " + (1 - chance).toString() + ") <br> ";
								}
								break;
							// Priority 7: Transposition
							case 7:
								if (battle_data[matrix[j][0]].mp_left >= 300){
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[matrix[j][0]].card + " (Team " + (matrix[j][0] + 1).toString() + ") uses " + matrix[j][2].slice(3) + "! <br>";
									battle_data[matrix[j][0]].mp_left -= 300;
									temp = battle_data[matrix[j][1]].hp_left;
									battle_data[matrix[j][1]].hp_left = battle_data[matrix[j][1]].mp_left;
									battle_data[matrix[j][1]].mp_left = temp;
									temp = base_data[matrix[j][1]].hp;
									base_data[matrix[j][1]].hp = base_data[matrix[j][1]].mp;
									base_data[matrix[j][1]].mp = temp;
									if (show_log == true)
										document.getElementById('res').innerHTML += base_data[matrix[j][1]].card + " (Team " + (matrix[j][1] + 1).toString() + ")'s HP and MP are switched! <br> ";

									if (battle_data[matrix[j][1]].hp_left <= 0){
										death_proc(matrix[j][1], 1 - matrix[j][1], "Transposition");

										// If Survived
										if (battle_data[matrix[j][1]].hp_left > 0){
											intro_activate = true;
											break;
										}
										if (show_log == true)
											document.getElementById('res').innerHTML += base_data[matrix[j][1]].card + " (Team " + (matrix[j][1] + 1).toString() + ") is defeated! <br>";
										result = 1 - matrix[j][1];
										if (battle_data[1 - matrix[j][1]].hp_left <= 0){
											if (show_log == true)
												document.getElementById('res').innerHTML += base_data[1 - matrix[j][1]] + " (Team " + (2 - matrix[j][1]).toString() + ") is defeated! <br>";
											result = -1;
										}
										matrix[j][3] = true;
										battle_data[attacker].intro1_used = matrix[0][3];
										battle_data[attacker].intro2_used = matrix[1][3];
										battle_data[defender].intro1_used = matrix[2][3];
										battle_data[defender].intro2_used = matrix[3][3];
										return result;
									}
								}
								break;
							// Priority 8: Mind Break, Fast Sleep
							case 8:
								if (matrix[j][2].search("Mind Break") != -1){
									if (battle_data[matrix[j][0]].mp_left >= 600 && battle_data[matrix[j][0]].mind_break != true && battle_data[matrix[j][0]].abs_mind_break != true && battle_data[matrix[j][0]].sleep == 0){
										if (matrix[j][2].search("Dark") != -1 || matrix[j][2].search("Absolute") != -1)
											chance = 1;
										else
											chance = 0.6;
										if (show_log == true)
											document.getElementById('res').innerHTML += base_data[matrix[j][0]].card + " (Team " + (matrix[j][0] + 1).toString() + ") uses " + matrix[j][2].slice(3) + "! <br>";
										battle_data[matrix[j][0]].mp_left -= 600;
										if (Math.random() < chance){
											if (battle_data[matrix[j][1]].resist == false && battle_data[matrix[j][1]].temp_resist == false){
												if(matrix[j][2].search("Absolute") != -1)
													battle_data[matrix[j][1]].abs_mind_break = true;
												else
													battle_data[matrix[j][1]].mind_break = true;
												if (show_log == true)
													document.getElementById('res').innerHTML += base_data[matrix[j][1]].card + " (Team " + (matrix[j][1] + 1).toString() + ") becomes confused! (Chance: " + chance.toString() + ") <br> ";
											}
											else
												if (show_log == true)
													document.getElementById('res').innerHTML += "But it failed! (Chance: " + (1 - chance).toString() + ") <br> ";
											battle_data[matrix[j][1]].temp_resist = false;
										}
										else
											if (show_log == true)
												document.getElementById('res').innerHTML += "But it failed! (Chance: " + (1 - chance).toString() + ") <br> ";
									}
								}
								else if (matrix[j][2].search("Fast Sleep") != -1){
									if (battle_data[matrix[j][0]].mp_left >= 300 && battle_data[matrix[j][0]].mind_break != true && battle_data[matrix[j][0]].abs_mind_break != true && battle_data[matrix[j][0]].sleep != true){
										if (show_log == true)
											document.getElementById('res').innerHTML += base_data[matrix[j][0]].card + " (Team " + (matrix[j][0] + 1).toString() + ") uses " + matrix[j][2].slice(3) + "! <br>";
										battle_data[matrix[j][0]].mp_left -= 300;
										if (battle_data[matrix[j][1]].resist == false && battle_data[matrix[j][1]].temp_resist == false){
											if (matrix[j][2].search("Fast Sleep \\+S") != -1){
												battle_data[matrix[j][1]].sleep += 2;
												if (show_log == true)
													document.getElementById('res').innerHTML += base_data[matrix[j][1]].card + " (Team " + (matrix[j][1] + 1).toString() + ") becomes deeply asleep! <br> ";
											}
											else{
												battle_data[matrix[j][1]].sleep += 1;
												if (show_log == true)
													document.getElementById('res').innerHTML += base_data[matrix[j][1]].card + " (Team " + (matrix[j][1] + 1).toString() + ") becomes asleep! <br> ";
											}
										}
										else
											if (show_log == true)
												document.getElementById('res').innerHTML += "But it failed! <br> ";
										battle_data[matrix[j][1]].temp_resist = false;
									}
								}
								break;
						}
						matrix[j][3] = true;
						if (keep ==  true){
							matrix[j][3] = false;
							keep = false;
						}
					}
				}
			}
			battle_data[attacker].intro1_used = matrix[0][3];
			battle_data[attacker].intro2_used = matrix[1][3];
			battle_data[defender].intro1_used = matrix[2][3];
			battle_data[defender].intro2_used = matrix[3][3];
		}


		// Battle
		// Speed Change
		battle_data[attacker].exceeded_speed -= battle_data[defender].exceeded_speed;
		battle_data[defender].exceeded_speed = Math.round((base_data[defender].spd + battle_data[defender].inherit_spd) * (1 + battle_data[defender].spd_buff - battle_data[defender].spd_debuff));

		// Self Heal
		if (battle_data[attacker].healing > 0){
			heal_apply(attacker, 0.5, 0);
			battle_data[attacker].healing -= 1;
		}
		// Poison Damage
		if (battle_data[attacker].poisoned == true){
			damage = Math.round((0.4 + poison_attack_modifier[defender]) * base_data[attacker].hp);
			battle_data[attacker].hp_left -= damage;
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") takes " + damage.toString() + " damage from poison! HP: " + battle_data[attacker].hp_left + "/" + base_data[attacker].hp + " <br>";
			if (battle_data[attacker].hp_left <= 0){
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") is defeated! <br>";
				result = 1 - attacker;
				return result;
			}
		}
		if (battle_data[attacker].poisoned_S == true){
			damage = Math.round((0.75 + poison_attack_modifier[defender]) * base_data[attacker].hp);
			battle_data[attacker].hp_left -= damage;
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") takes " + damage.toString() + " damage from severe poison! HP: " + battle_data[attacker].hp_left + "/" + base_data[attacker].hp + " <br>";
			if (battle_data[attacker].hp_left <= 0){
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") is defeated! <br>";
				result = 1 - attacker;
				return result;
			}
		}
		// Sleep
		if (battle_data[attacker].sleep >= 1){
			battle_data[attacker].sleep -= 1;
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") skips a turn because of sleep! <br>";
			battle_length++;
			continue;
		}
		// Freeze
		if (battle_data[attacker].freeze == true){
			battle_data[attacker].freeze = false;
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") skips a turn because of crytallization! <br>";
			battle_length++;
			continue;
		}

		// Fetch Attack Skill
		attack_skill = base_data[attacker].attack_skill;
		temp = attack_skill.split(" ");
		attack_attr = "Physical";
		dmg_rate = 1, reduc_rate = 0.5, hp_cost = 0, mp_cost = 0;
		battle_data[defender].dodgable = true, battle_data[defender].counterable = true, battle_data[defender].no_death = false, battle_data[defender].blockable = true;
		if(temp.length > 1 && temp[1].charAt(0) == '+'){
			attack_attr = temp[0];
			switch(temp[1]){
				case "+1": dmg_rate = 1.07; mp_cost = 150; break;
				case "+2": dmg_rate = 1.12; mp_cost = 300; break;
				case "+3": dmg_rate = 1.25; mp_cost = 600; break;
				case "+4": dmg_rate = 1.5;; mp_cost = 1200; break;
				case "+4EX": dmg_rate = 1.6; mp_cost = 1300; break;
				case "+S": dmg_rate = 2; mp_cost = 1500; break;
			}
		}
		else{
			switch (attack_skill){
				case "Giga Slash":
				case "Death Slash":
					attack_attr = "Physical";
					if (Math.random() < 0.85 + giga_slash_modifier[attacker])
						dmg_rate = 2;
					else
						dmg_rate = 0.5;
					reduc_rate = 0, mp_cost = 1200;
					battle_data[defender].dodgable = false;
					break;
				case "Dark Giga Slash":
					attack_attr = "Physical";
					dmg_rate = 2, reduc_rate = 0, mp_cost = 1200;
					battle_data[defender].dodgable = false;
					break;
				case "Soul Slash":
				case "Soul Buster":
					attack_attr = "Physical";
					hp_cost = 1000 - soul_slash_modifier[attacker];
					if (attack_skill == "Soul Slash")
						dmg_rate = 1.5;
					else
						dmg_rate = 2;
					battle_data[defender].dodgable = false;
					break;
				case "Crush Drain":
				case "Soul Drain":
					if (battle_data[attacker].mind_break == true || battle_data[attacker].abs_mind_break == true){
						attack_skill = "Normal Attack";
						break;
					}
					attack_attr = "Physical";
					if (attack_skill == "Crush Drain")
						dmg_rate = 1.5, mp_cost = 1400;
					else
						dmg_rate = 2, mp_cost = 1600;
					battle_data[defender].dodgable = false, battle_data[defender].counterable = false;
					break;
				case "Life Drain":
					if (battle_data[attacker].mind_break == true || battle_data[attacker].abs_mind_break == true){
						attack_skill = "Normal Attack";
						break;
					}
					attack_attr = "Physical";
					mp_cost = 450;
					battle_data[defender].dodgable = false, battle_data[defender].counterable = false;
					break;
				case "Energy Drain":
					if (battle_data[attacker].mind_break == true || battle_data[attacker].abs_mind_break == true || battle_data[defender].mp_left <= 0 
					|| battle_data[attacker].mp_left == base_data[attacker].mp ){
						attack_skill = "Normal Attack";
						break;
					}
					attack_attr = "None";
					mp_cost = 20;
					battle_data[defender].dodgable = false, battle_data[defender].counterable = false;
					break;
				case "Spirit Attack":
					attack_attr = base_data[attacker].attr;
					mp_cost = 1300;
					dmg_rate = 1 + spirit_attack_modifier[attacker];
					battle_data[defender].dodgable = false, battle_data[defender].counterable = false, battle_data[defender].blockable = false;
					break;
				case "Heal": 
				case "Greater Heal": 
				case "Holy Grail": 
					if (battle_data[attacker].mind_break == true || battle_data[attacker].abs_mind_break == true || battle_data[attacker].hp_left / base_data[attacker].hp > 0.8){
						attack_skill = "Normal Attack";
						break;
					}
					if (attack_skill == "Heal")
						mp_cost = 100;
					else
						mp_cost = 300;
					attack_attr = "None";
					break;
				case "Predator":
				case "Death Fang":
					if (battle_data[attacker].mind_break == true || battle_data[attacker].abs_mind_break == true){
						attack_skill = "Normal Attack";
						break;
					}
					attack_attr = "Physical";
					if(attack_skill == "Predator")
						dmg_rate = 1.5 + predator_modifier[attacker], mp_cost = 1400;
					else
						dmg_rate = 2 + predator_modifier[attacker], mp_cost = 1600;
					battle_data[defender].no_death = true;
					break;
				case "Laevateinn":
					attack_attr = "Physical";
					dmg_rate = 1.5, mp_cost = 1400;
					break;
				case "Balmung":
					attack_attr = "Physical";
					dmg_rate = 1.5, mp_cost = 1500;
					break;
				case "Meteor Impact":
				case "Meteor Impact EX":
					attack_attr = "Physical";
					reduc_rate = 0;
					if(attack_skill == "Meteor Impact")
						dmg_rate = 1.3 + meteor_skill_modifier[attacker], mp_cost = 1300;
					else
						dmg_rate = 1.5 + meteor_skill_modifier[attacker], mp_cost = 1400;
					battle_data[defender].blockable = false;
					break;
				case "Dimension Gate":
				case "Dimension Gate +S":
					attack_attr = base_data[attacker].attr;
					if(attack_skill == "Dimension Gate")
						dmg_rate = 1.5 + dimension_gate_modifier[attacker], mp_cost = 1300;
					else
						dmg_rate = 2 + dimension_gate_modifier[attacker], mp_cost = 1600;
					battle_data[defender].no_death = true;
					break;
				case "Arondight":
					attack_attr = base_data[attacker].attr;
					dmg_rate = 1.5, mp_cost = 1400;
					break;
				case "Gram":
					attack_attr = base_data[attacker].attr;
					dmg_rate = 1.5, mp_cost = 1500;
					break;
				case "Meteor Nova":
				case "Meteor Nova EX":
					attack_attr = base_data[attacker].attr;
					reduc_rate = 0;
					if(attack_skill == "Meteor Nova")
						dmg_rate = 1.3 + meteor_skill_modifier[attacker], mp_cost = 1300;
					else
						dmg_rate = 1.5 + meteor_skill_modifier[attacker], mp_cost = 1400;
					battle_data[defender].blockable = false;
					break;
				case "Variable Slash":
				case "Variable Buster":
					attack_attr = base_data[attacker].attr;
					if(attack_skill == "Variable Slash")
						dmg_rate = 1.7 + variable_slash_modifier[attacker];
					else
						dmg_rate = 2 + variable_slash_modifier[attacker];
					if (battle_data[attacker].mp_left > 1400)
						mp_cost = 1400;
					else
						hp_cost = 1400;
					battle_data[defender].dodgable = false;
					break;
			}
			
		}

		if( ( (mp_cost == 0 || battle_data[attacker].mp_left < mp_cost) && (hp_cost == 0 || battle_data[attacker].hp_left <= hp_cost) ) || (battle_data[defender].hp_left < 24 && attack_skill != "Crush Drain" && attack_skill != "Life Drain" && attack_skill != "Soul Drain") ){ // Special Normal Attack Decision
			attack_skill = "Normal Attack", attack_attr = "Physical";
			dmg_rate = 1, reduc_rate = 0.5, hp_cost = 0, mp_cost = 0;
			battle_data[defender].dodgable = true, battle_data[defender].counterable = true, battle_data[defender].no_death = false, battle_data[defender].blockable = true;
		}
		if( attack_skill == "Spirit Attack" || attack_skill == "Energy Drain"){
			temp_show_log = show_log, temp_mp = battle_data[defender].mp_left;
			show_log = false;
			fake_damage = mp_damage_dealer(attacker, defender, attack_skill, attack_attr, dmg_rate, 0.5, 0);
			if (fake_damage == 0 && temp_mp > 0){
				attack_skill = "Normal Attack", attack_attr = "Physical";
				dmg_rate = 1, reduc_rate = 0.5, hp_cost = 0, mp_cost = 0;
				battle_data[defender].dodgable = true, battle_data[defender].counterable = true, battle_data[defender].no_death = false, battle_data[defender].blockable = true;
			}
			else
				mp_heal_apply(defender, 0, fake_damage);
			show_log = temp_show_log;
		}
		else if ( attack_skill != "Heal" && attack_skill != "Greater Heal" && attack_skill != "Holy Grail" && attack_skill.search('Undead') == -1){
			temp_show_log = show_log, temp_blockable = battle_data[defender].blockable, temp_dodgable = battle_data[defender].dodgable;
			temp_poison = battle_data[defender].poisoned, temp_poison_S = battle_data[defender].poisoned_S, temp_freeze = battle_data[defender].freeze;
			show_log = false, battle_data[defender].blockable = false, battle_data[defender].dodgable = false, battle_data[defender].freeze = false;
			fake_damage = damage_dealer(attacker, defender, attack_skill, attack_attr, dmg_rate, reduc_rate, 0);
			if (fake_damage == 1){
				attack_skill = "Normal Attack", attack_attr = "Physical";
				dmg_rate = 1, reduc_rate = 0.5, hp_cost = 0, mp_cost = 0;
				battle_data[defender].dodgable = true, battle_data[defender].counterable = true, battle_data[defender].no_death = false, battle_data[defender].blockable = true;
				heal_apply(defender, 0, 1);
			}
			else
				heal_apply(defender, 0, fake_damage);
			show_log = temp_show_log, battle_data[defender].blockable = temp_blockable, battle_data[defender].dodgable = temp_dodgable;
			battle_data[defender].poisoned = temp_poison, battle_data[defender].poisoned_S = temp_poison_S, battle_data[defender].freeze = temp_freeze;
		}


		battle_data[attacker].hp_left -= hp_cost;
		battle_data[attacker].mp_left -= mp_cost;
		if (show_log == true)
			document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") attacks with " + attack_skill + "! MP: " + battle_data[attacker].mp_left + "/" + base_data[attacker].mp + " <br>";
		if (hp_cost != 0)
			if (show_log == true)
				document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") spends " + hp_cost + " HP! HP: " + battle_data[attacker].hp_left + "/" + base_data[attacker].hp + " <br>";

		// Mind Break Effect
		if (battle_data[attacker].mind_break ==  true || battle_data[attacker].abs_mind_break == true){
			if (battle_data[attacker].abs_mind_break == true || Math.random() < 0.8 + mind_break_modifier[attacker]){
				battle_data[attacker].dodgable = battle_data[defender].dodgable, battle_data[attacker].counterable = battle_data[defender].counterable;
				battle_data[attacker].no_death = battle_data[defender].no_death, battle_data[attacker].blockable = battle_data[defender].blockable;
				battle_data[defender].dodgable = true, battle_data[defender].counterable = true, battle_data[defender].no_death = false, battle_data[defender].blockable = true;
				defender = attacker;
			}
		}
		
		// Damage Calc
		pre_hp = battle_data[defender].hp_left;
		if (attack_skill == "Energy Drain"){
			damage = mp_damage_dealer(attacker, defender, attack_skill, attack_attr, 1, 0.5, 0);
			mp_heal_apply(attacker, 0, 0.6 * damage);
			damage = 0;
		}
		else if (attack_skill == "Spirit Attack"){
			damage = mp_damage_dealer(attacker, defender, attack_skill, attack_attr, dmg_rate, 0.5, 0);
			damage = 0;
		}
		else if (attack_skill == "Heal"){
			heal_apply(attacker, 0.55, 0);
		}
		else if (attack_skill == "Greater Heal"){
			heal_apply(attacker, 0.85, 0);
		}
		else if (attack_skill == "Holy Grail"){
			heal_apply(attacker, 1, 0);
		}
		else
			damage = damage_dealer(attacker, defender, attack_skill, attack_attr, dmg_rate, reduc_rate, 0);
		
		// Extra Heal or MP Damage
		if (damage > 0){
			if (attack_skill == "Crush Drain" || attack_skill == "Soul Drain")
				heal_apply(attacker, 0, 0.9 * damage);
			else if (attack_skill == "Life Drain")
				heal_apply(attacker, 0, 0.2 * damage);
			else if (attack_skill == "Laevateinn" || attack_skill == "Arondight")
				mp_damage_dealer(attacker, defender, attack_skill, "None", 0, 0, 0.5 + mp_burn_modifier[attacker]);
			else if (attack_skill == "Balmung" || attack_skill == "Gram" )
				mp_damage_dealer(attacker, defender, attack_skill, "None", 0, 0, 1 + mp_burn_modifier[attacker]);
		}
		

		// If Death Occurs
		if (battle_data[defender].hp_left <= 0 || (attack_skill == "Spirit Attack" && battle_data[defender].mp_left <= 0)){		
			still_alive = death_proc(defender, 1 - defender, attack_skill);

			// If Survived
			if (still_alive == 1){
				intro_activate = true;
				battle_length++;
				continue;
			}
			else{ 
				if (attack_skill == "Predator" || attack_skill == "Death Fang"){
					switch (attr_cmp(base_data[attacker].attr, base_data[defender].attr)){
						case 1: 
							battle_data[attacker].atk_buff += 0.2, battle_data[attacker].def_buff += 0.2, battle_data[attacker].spd_buff += 0.2, battle_data[attacker].wis_buff += 0.2; 
							if (show_log == true)
								document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ")'s stats have greatly increased! <br>";
							break; 
						case 0: 
							battle_data[attacker].atk_buff += 0.1, battle_data[attacker].def_buff += 0.1, battle_data[attacker].spd_buff += 0.1, battle_data[attacker].wis_buff += 0.1; 
							if (show_log == true)
								document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ")'s stats have increased! <br>";
							break;
						case -1: 
							battle_data[attacker].atk_debuff += 0.1, battle_data[attacker].def_debuff += 0.1, battle_data[attacker].spd_debuff += 0.1, battle_data[attacker].wis_debuff += 0.1; 
							if (show_log == true)
								document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ")'s stats have decreased! <br>";
							break;
					}
				}

				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[defender].card + " (Team " + (defender + 1).toString() + ") is defeated! <br>";
				result = 1 - defender;
				if (battle_data[1 - defender].hp_left <= 0){
					if (show_log == true)
						document.getElementById('res').innerHTML += base_data[1 - defender].card + " (Team " + (2 - defender).toString() + ") is defeated! <br>";
					result = -1;
				}
				return result;
			}
		}

		// Counter
		{
			counter_skill = base_data[defender].counter_skill;
			if (damage > 0 && battle_data[defender].counterable == true && battle_data[defender].mp_left >= 300 && 
				battle_data[defender].mind_break == false && battle_data[defender].sleep == 0 && counter_skill != "None"){
				battle_data[defender].mp_left -= 300;
				if (show_log == true)
					document.getElementById('res').innerHTML += base_data[defender].card + " (Team " + (defender + 1).toString() + ") uses " + counter_skill + "! MP: " + battle_data[defender].mp_left + "/" + base_data[defender].mp + " <br>";
				battle_data[attacker].dodgable = false, battle_data[attacker].counterable = false;
				damage_dealer(defender, attacker, counter_skill, "None", 0, 0, 1.2 * damage);
				battle_data[attacker].dodgable = true, battle_data[attacker].counterable = true;

				if (battle_data[attacker].hp_left <= 0){
					death_proc(attacker, 1 - attacker, "Counter");

					// If Survived
					if (battle_data[attacker].hp_left > 0){
						intro_activate = true;
						battle_length++;
						continue;
					}
					if (show_log == true)
						document.getElementById('res').innerHTML += base_data[attacker].card + " (Team " + (attacker + 1).toString() + ") is defeated! <br>";
					result = 1 - attacker;
					if (battle_data[1 - attacker].hp_left <= 0){
						if (show_log == true)
							document.getElementById('res').innerHTML += base_data[1 - attacker].card + " (Team " + (2 - attacker).toString() + ") is defeated! <br>";
						result = -1;
					}
					return result;
				}
			}
		}

		battle_length++;
		if (battle_length > 50) break;
	}
}



function basic_calc(){
	document.getElementById('hpc').value = Math.floor(parseInt(document.getElementById('hpc').value) / 2.754).toString();
	document.getElementById('mpc').value = Math.floor(parseInt(document.getElementById('mpc').value) / 2.754).toString();
	document.getElementById('atkc').value = Math.floor(parseInt(document.getElementById('atkc').value) / 2.754).toString();
	document.getElementById('defc').value = Math.floor(parseInt(document.getElementById('defc').value) / 2.754).toString();
	document.getElementById('spdc').value = Math.floor(parseInt(document.getElementById('spdc').value) / 2.754).toString();
	document.getElementById('wisc').value = Math.floor(parseInt(document.getElementById('wisc').value) / 2.754).toString();
}