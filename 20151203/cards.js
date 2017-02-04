var data =
[
	{
		"name": "Leviathan", "attr": "Water", "hp": 1025, "mp": 1015, "atk": 1050, "def": 1080, "spd": 900, "wis": 920, 
		"attack_skill": "Water +4", "intro_skill1": "None", "intro_skill2": "None", "death_skill1": "Revival", "death_skill2": "None",
		"dodge_skill1": "None", "dodge_skill2": "None", "poison_skill": "None", "counter_skill": "None"
	},
	{
		"name": "Efreet", "attr": "Fire", "hp": 1010, "mp": 1005, "atk": 1080, "def": 1050, "spd": 920, "wis": 920, 
		"attack_skill": "Fire +4", "intro_skill1": "Attack +25%", "intro_skill2": "None", "death_skill1": "None", "death_skill2": "None",
		"dodge_skill1": "None", "dodge_skill2": "None", "poison_skill": "None", "counter_skill": "None"
	},
	{
		"name": "Almighty Kushinadahime", "attr": "Earth", "hp": 2340, "mp": 1560, "atk": 1820, "def": 1710, "spd": 1404, "wis": 1660, 
		"attack_skill": "Crush Drain", "intro_skill1": "Quick Strike", "intro_skill2": "None", "death_skill1": "None", "death_skill2": "None",
		"dodge_skill1": "Mirage Drive", "dodge_skill2": "None", "poison_skill": "None", "counter_skill": "None"
	},
	{
		"name": "King Troll", "attr": "Earth", "hp": 2320, "mp": 1600, "atk": 1740, "def": 1800, "spd": 1384, "wis": 1500, 
		"attack_skill": "Giga Slash", "intro_skill1": "Celestial Pulse", "intro_skill2": "Ability Lock", "death_skill1": "None", "death_skill2": "None",
		"dodge_skill1": "None", "dodge_skill2": "None", "poison_skill": "None", "counter_skill": "None"
	},
	{
		"name": "Hell Abyss", "attr": "Undead", "hp": 2340, "mp": 1700, "atk": 1380, "def": 1520, "spd": 1450, "wis": 1960, 
		"attack_skill": "Dimension Gate", "intro_skill1": "All Shift", "intro_skill2": "None", "death_skill1": "Mind Crush", "death_skill2": "None",
		"dodge_skill1": "None", "dodge_skill2": "None", "poison_skill": "None", "counter_skill": "None"
	},
	{
		"name": "Ceridwen", "attr": "Poison", "hp": 2320, "mp": 1640, "atk": 1620, "def": 1540, "spd": 1411, "wis": 1940, 
		"attack_skill": "Variable Slash", "intro_skill1": "Divine Shield", "intro_skill2": "None", "death_skill1": "None", "death_skill2": "None",
		"dodge_skill1": "Dark Deft Step", "dodge_skill2": "None", "poison_skill": "None", "counter_skill": "None"
	},
	{
		"name": "Cor Leonis", "attr": "Wind", "hp": 2480, "mp": 1300, "atk": 1800, "def": 1920, "spd": 1430, "wis": 1720, 
		"attack_skill": "Giga Slash", "intro_skill1": "None", "intro_skill2": "None", "death_skill1": "Last Bastion", "death_skill2": "None",
		"dodge_skill1": "None", "dodge_skill2": "None", "poison_skill": "None", "counter_skill": "Counter"
	},
	{
		"name": "Aria", "attr": "Light", "hp": 2220, "mp": 1380, "atk": 1780, "def": 1600, "spd": 1460, "wis": 1640, 
		"attack_skill": "Giga Slash", "intro_skill1": "Assault Strike", "intro_skill2": "Resistance", "death_skill1": "None", "death_skill2": "None",
		"dodge_skill1": "None", "dodge_skill2": "None", "poison_skill": "None", "counter_skill": "None"
	},
	{
		"name": "Dark Rabi", "attr": "Darkness", "hp": 11500, "mp": 11500, "atk": 2700, "def": 10, "spd": 2200, "wis": 4540, 
		"attack_skill": "Dimension Gate", "intro_skill1": "Resistance", "intro_skill2": "Healing Light", "death_skill1": "None", "death_skill2": "None",
		"dodge_skill1": "None", "dodge_skill2": "None", "poison_skill": "None", "counter_skill": "None"
	}
];


var attributes = [
	"Fire", "Water", "Earth", "Thunder", "Wind", "Poison", "Undead", "Machine", "Light", "Darkness", "Naught"
];


var colo_rates = [ "0", "5%", "12%" ];


var red_exs = [
	"None",
	"Fire 15% All", "Water 15% All", "Earth 15% All", "Thunder 15% All", "Wind 15% All", 
	"Poison 15% All", "Machine 15% All", "Light 15% All", "Darkness 15% All",
	"All 15% HP", "All 10% MP", "All 15% Attack", "All 15% Defend", "All 15% Wisdom",
	"All 10% Attack & 10% Wisdom", "All 15% Defend & 10% Wisdom"
];


var blue_exs = [
	"None", "Ability Lock", "Mind Break", "Explosion", "Revival", "Quick Strike", "Martyr", "Deft Step", "Giga Slash", "Poison Attack", "Soul Slash", "Undead Skill"
];


var attack_skills = [
	"Normal Attack",
	"Giga Slash", "Dark Giga Slash",
	"Soul Slash", "Variable Slash",
	"Crush Drain",
	"Predator", "Dimension Gate",
	"Laevateinn", "Arondight",
	"Meteor Impact", "Meteor Nova",
	"Fire +1", "Fire +2", "Fire +3", "Fire +4", "Fire +4EX", "Fire +0", 
	"Water +1", "Water +2", "Water +3", "Water +4", 
	"Earth +1", "Earth +2", "Earth +3", "Earth +4", "Fire +4EX",
	"Thunder +1", "Thunder +2", "Thunder +3", "Thunder +4", "Thunder +4EX",
	"Wind +1", "Wind +2", "Wind +3", "Wind +4", 
	"Poison +1", "Poison +2", "Poison +3", "Poison +4",
	"Undead +1", "Undead +2", "Undead +3", "Undead +4",
	"Machine +4",
	"Light +1", "Light +2", "Light +3", "Light +4", "Light +4EX", "Light +0",  
	"Darkness +1", "Darkness +2", "Darkness +3", "Darkness +4", "Darkness +4EX",
	"Physical +1", "Physical +2", "Physical +3", "Physical +4"
];


var intro_skills = [
	"0: None",
	"1: Quick Strike", "1: Assault Strike", "1: Wise Smite",
	"2: Divine Shield",
	"3: Resistance",
	"4: Power Shift", "4: Mind Shift", "4: Fast Shift", "4: All Shift",
	"4: Multi Block", "4: Healing Light",
	"5: Celestial Pulse",
	"6: Ability Lock", "6: Dark Ability Lock",
	"7: Transposition",
	"8: Mind Break", "8: Dark Mind Break", "8: Fast Sleep",
	"4: Attack +10%", "4: Attack +20%", "4: Attack +25%",
	"4: Defend +10%", "4: Defend +20%", "4: Defend +25%", "4: Defend +40%",
	"4: Speed +10%", "4: Speed +20%", "4: Speed +25%",
	"4: Wisdom +10%", "4: Wisdom +20%", "4: Wisdom +25%", 
	"4: Attack_Defend +10%", "4: Attack_Speed +10%", "4: Attack_Wisdom +10%", "4: Defend_Speed +10%", "4: Defend_Wisdom +10%", "4: Speed_Wisdom +10%", 
	"4: Attack -20%", "4: Attack -40%",
	"4: Defend -20%",
	"4: Speed -20%", "4: Speed -40%",
	"4: Wisdom -20%", "4: Wisdom -40%"
];


var death_skills = [
	"0: None",
	"1: Revival", "1: Dark Revival",
	"1: Last Stand", "1: Last Bastion",
	"2: Deep Sleep", "2: Crystallize",
	"3: Explosion", "3: Dark Explosion", "3: Burst",
	"3: Soul Taker", "3: Mind Crush",
	"3: Martyr", "3: Entrust"
];


var dodge_skills = [
	"None",
	"Deft Step", "Dark Deft Step",
	"Mirage Drive", "Dark Mirage Drive"
];


var counter_skills = [
	"None",
	"Counter"
];


var poison_skills = [
	"None",
	"Poison Attack", "Deadly Poison"
];