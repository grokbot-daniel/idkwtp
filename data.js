// IDKWTP data. Sources: warcraft.wiki.gg (Specialization, Template:Class_by_race, Template:Forever_class_by_race). Fan-made.
const T=(...a)=>a;
const RETAIL_CLASSES=[
{id:"warrior",name:"Warrior",color:"#C69B6D",armor:"Plate",specs:[
 {n:"Arms",role:"damage",range:"melee",traits:T("burst","sustained"),exp:"Big two-handed hits; time Colossus Smash windows and execute low targets."},
 {n:"Fury",role:"damage",range:"melee",traits:T("sustained","aoe"),exp:"Dual-wield rampage; keep Enrage up and cleave packs relentlessly."},
 {n:"Protection",role:"tank",range:"melee",traits:T("utility","mobility"),exp:"Hold threat, Shield Block/Ignore Pain smartly, charge into the next pack."}]},
{id:"paladin",name:"Paladin",color:"#F48CBA",armor:"Plate",specs:[
 {n:"Holy",role:"healer",range:"melee",traits:T("utility","burst"),exp:"Close-range healer; spend Holy Power and offer emergency saves (Lay on Hands, BoP)."},
 {n:"Protection",role:"tank",range:"melee",traits:T("utility"),exp:"Sturdy tank with tons of external utility and blessings."},
 {n:"Retribution",role:"damage",range:"melee",traits:T("burst","utility"),exp:"Build/spend Holy Power for heavy burst windows; bring utility to the group."}]},
{id:"hunter",name:"Hunter",color:"#AAD372",armor:"Mail",specs:[
 {n:"Beast Mastery",role:"damage",range:"ranged",traits:T("pets","mobility","beginner"),exp:"Fully mobile ranged damage with your pets doing much of the work."},
 {n:"Marksmanship",role:"damage",range:"ranged",traits:T("burst"),exp:"Precision ranged burst; position well and land Aimed Shots."},
 {n:"Survival",role:"damage",range:"melee",traits:T("pets","dot"),exp:"Melee hunter with a pet, bombs and bleeds."}]},
{id:"rogue",name:"Rogue",color:"#FFF468",armor:"Leather",specs:[
 {n:"Assassination",role:"damage",range:"melee",traits:T("dot","sustained"),exp:"Keep poisons and bleeds rolling; strong sustained single target."},
 {n:"Outlaw",role:"damage",range:"melee",traits:T("sustained","mobility","complex"),exp:"Fast-paced swashbuckler; manage Roll the Bones buffs and keep the energy flowing."},
 {n:"Subtlety",role:"damage",range:"melee",traits:T("burst","complex"),exp:"Shadow Dance burst windows; precise cooldown timing."}]},
{id:"priest",name:"Priest",color:"#FFFFFF",armor:"Cloth",specs:[
 {n:"Discipline",role:"healer",range:"ranged",traits:T("complex","burst"),exp:"Heal through damage via Atonement and prevent damage with shields."},
 {n:"Holy",role:"healer",range:"ranged",traits:T("aoe","beginner"),exp:"Classic throughput healer with big raid-wide heals."},
 {n:"Shadow",role:"damage",range:"ranged",traits:T("dot","burst"),exp:"Maintain DoTs, build Insanity, unleash Voidform."}]},
{id:"deathknight",name:"Death Knight",color:"#C41E3A",armor:"Plate",specs:[
 {n:"Blood",role:"tank",range:"melee",traits:T("utility","sustained"),exp:"Self-healing tank; Death Strike to survive and grip enemies in."},
 {n:"Frost",role:"damage",range:"melee",traits:T("burst"),exp:"Hard-hitting melee with Pillar of Frost burst windows."},
 {n:"Unholy",role:"damage",range:"melee",traits:T("pets","dot","aoe"),exp:"Command undead minions and spread disease."}]},
{id:"shaman",name:"Shaman",color:"#0070DD",armor:"Mail",specs:[
 {n:"Elemental",role:"damage",range:"ranged",traits:T("burst","aoe"),exp:"Ranged caster of lightning and lava; big AoE and utility totems."},
 {n:"Enhancement",role:"damage",range:"melee",traits:T("burst","complex"),exp:"Proc-heavy melee mixing weapons and spells."},
 {n:"Restoration",role:"healer",range:"ranged",traits:T("utility","aoe"),exp:"Totem-based healer; strong group heals and raid utility."}]},
{id:"mage",name:"Mage",color:"#3FC7EB",armor:"Cloth",specs:[
 {n:"Arcane",role:"damage",range:"ranged",traits:T("burst","complex"),exp:"Mana management and huge burst windows."},
 {n:"Fire",role:"damage",range:"ranged",traits:T("burst","mobility"),exp:"Crit-chaining caster built around Combustion."},
 {n:"Frost",role:"damage",range:"ranged",traits:T("utility","beginner"),exp:"Control-focused caster; slows and shatter combos."}]},
{id:"warlock",name:"Warlock",color:"#8788EE",armor:"Cloth",specs:[
 {n:"Affliction",role:"damage",range:"ranged",traits:T("dot","pets","sustained"),exp:"Spread and maintain many DoTs; great sustained damage."},
 {n:"Demonology",role:"damage",range:"ranged",traits:T("pets","burst"),exp:"Summon armies of demons for big windows."},
 {n:"Destruction",role:"damage",range:"ranged",traits:T("burst","pets"),exp:"Hard-casting nukes like Chaos Bolt; huge single hits."}]},
{id:"monk",name:"Monk",color:"#00FF98",armor:"Leather",specs:[
 {n:"Brewmaster",role:"tank",range:"melee",traits:T("mobility","complex"),exp:"Stagger damage over time and stay agile."},
 {n:"Mistweaver",role:"healer",range:"melee",traits:T("mobility"),exp:"Flexible healer who can heal through hots or fistweaving."},
 {n:"Windwalker",role:"damage",range:"melee",traits:T("mobility","aoe","complex"),exp:"Martial-arts melee; avoid repeating abilities."}]},
{id:"druid",name:"Druid",color:"#FF7C0A",armor:"Leather",specs:[
 {n:"Balance",role:"damage",range:"ranged",traits:T("dot","aoe"),exp:"Moonkin caster balancing Astral Power with DoTs."},
 {n:"Feral",role:"damage",range:"melee",traits:T("dot","complex"),exp:"Cat-form bleeds and energy pooling."},
 {n:"Guardian",role:"tank",range:"melee",traits:T("sustained","beginner"),exp:"Bear tank with a large health pool and self-heals."},
 {n:"Restoration",role:"healer",range:"ranged",traits:T("hots","mobility"),exp:"Blanket the group in heal-over-time effects."}]},
{id:"demonhunter",name:"Demon Hunter",color:"#A330C9",armor:"Leather",specs:[
 {n:"Havoc",role:"damage",range:"melee",traits:T("mobility","burst","beginner"),exp:"Extremely mobile melee; Eye Beam and Metamorphosis bursts."},
 {n:"Devourer",role:"damage",range:"ranged",traits:T("burst","mobility"),exp:"New in Midnight: a ranged void-magic DH that reaps souls (Reap, Void Ray)."},
 {n:"Vengeance",role:"tank",range:"melee",traits:T("mobility","aoe"),exp:"Self-healing tank via Soul Fragments; great AoE control."}]},
{id:"evoker",name:"Evoker",color:"#33937F",armor:"Mail",specs:[
 {n:"Devastation",role:"damage",range:"ranged",traits:T("burst","aoe"),exp:"Mid-range empowered breaths; position for 25-yd range."},
 {n:"Preservation",role:"healer",range:"ranged",traits:T("burst","complex"),exp:"Empowered heals and time-bending."},
 {n:"Augmentation",role:"damage",range:"ranged",traits:T("utility","support","complex"),exp:"Support DPS: buff your allies' damage."}]},
];

// WoW: Forever (Classic+, launches Nov 4 2026): 9 classes, classic talent trees. Forever rebalances trees; roles below follow the classic tree focus.
const FOREVER_CLASSES=[
{id:"warrior",name:"Warrior",color:"#C69B6D",armor:"Plate",specs:[
 {n:"Arms",role:"damage",range:"melee",traits:T("burst"),exp:"Two-handed hitter; Mortal Strike and big crits."},
 {n:"Fury",role:"damage",range:"melee",traits:T("sustained"),exp:"Dual-wield rage machine; top melee damage when geared."},
 {n:"Protection",role:"tank",range:"melee",traits:T("utility","complex"),exp:"The classic main tank: build threat with Sunder Armor and survive with shield."}]},
{id:"paladin",name:"Paladin",color:"#F48CBA",armor:"Plate",specs:[
 {n:"Holy",role:"healer",range:"ranged",traits:T("utility"),exp:"Efficient single-target healer; blessings for the raid."},
 {n:"Protection",role:"tank",range:"melee",traits:T("aoe"),exp:"Holy-damage tank, strong at holding many enemies."},
 {n:"Retribution",role:"damage",range:"melee",traits:T("burst","utility"),exp:"Seal-and-judgement melee with lots of support."}]},
{id:"hunter",name:"Hunter",color:"#AAD372",armor:"Mail",specs:[
 {n:"Beast Mastery",role:"damage",range:"ranged",traits:T("pets","beginner"),exp:"Strong pet does much of the work; great solo leveling."},
 {n:"Marksmanship",role:"damage",range:"ranged",traits:T("burst","utility"),exp:"Ranged shots, Trueshot Aura for the group."},
 {n:"Survival",role:"damage",range:"ranged",traits:T("pets","utility"),exp:"Traps and tricks; control-oriented hunter."}]},
{id:"rogue",name:"Rogue",color:"#FFF468",armor:"Leather",specs:[
 {n:"Assassination",role:"damage",range:"melee",traits:T("dot","burst"),exp:"Poisons and crits from the shadows."},
 {n:"Combat",role:"damage",range:"melee",traits:T("sustained","beginner"),exp:"Steady sword/dagger damage with Blade Flurry and Adrenaline Rush."},
 {n:"Subtlety",role:"damage",range:"melee",traits:T("burst","complex"),exp:"Stealth openers and control; a PvP favorite."}]},
{id:"priest",name:"Priest",color:"#FFFFFF",armor:"Cloth",specs:[
 {n:"Discipline",role:"healer",range:"ranged",traits:T("utility"),exp:"Shields and buffs like Power Infusion."},
 {n:"Holy",role:"healer",range:"ranged",traits:T("aoe"),exp:"Big throughput healer with group heals."},
 {n:"Shadow",role:"damage",range:"ranged",traits:T("dot"),exp:"DoTs and drains; Shadow Weaving helps other casters."}]},
{id:"shaman",name:"Shaman",color:"#0070DD",armor:"Mail",specs:[
 {n:"Elemental",role:"damage",range:"ranged",traits:T("burst"),exp:"Lightning caster with spiky damage."},
 {n:"Enhancement",role:"damage",range:"melee",traits:T("burst","utility"),exp:"Windfury melee and totems for the group."},
 {n:"Restoration",role:"healer",range:"ranged",traits:T("aoe","utility"),exp:"Chain Heal and totems for your party."}]},
{id:"mage",name:"Mage",color:"#3FC7EB",armor:"Cloth",specs:[
 {n:"Arcane",role:"damage",range:"ranged",traits:T("utility"),exp:"Mana and utility; portals, food and water for everyone."},
 {n:"Fire",role:"damage",range:"ranged",traits:T("burst"),exp:"Crit-heavy nuker."},
 {n:"Frost",role:"damage",range:"ranged",traits:T("aoe","beginner"),exp:"Control and AoE farming; safe leveling."}]},
{id:"warlock",name:"Warlock",color:"#8788EE",armor:"Cloth",specs:[
 {n:"Affliction",role:"damage",range:"ranged",traits:T("dot","pets"),exp:"DoTs and drains; strong solo play."},
 {n:"Demonology",role:"damage",range:"ranged",traits:T("pets","sustained"),exp:"Empowered demons; soul link survivability."},
 {n:"Destruction",role:"damage",range:"ranged",traits:T("burst","pets"),exp:"Shadow Bolt and Conflagrate nukes."}]},
{id:"druid",name:"Druid",color:"#FF7C0A",armor:"Leather",specs:[
 {n:"Balance",role:"damage",range:"ranged",traits:T("dot"),exp:"Moonkin caster with Moonfire and Starfire."},
 {n:"Feral (Cat)",role:"damage",range:"melee",traits:T("dot","complex"),exp:"Cat form bleeds and energy shifting."},
 {n:"Feral (Bear)",role:"tank",range:"melee",traits:T("utility"),exp:"Bear-form tank; Feral tree covers both cat and bear."},
 {n:"Restoration",role:"healer",range:"ranged",traits:T("hots","utility"),exp:"Heal-over-time healer with battle res."}]},
];
const GAMES={forever:{label:"WoW: Forever",classes:FOREVER_CLASSES,races:[{"id": "dwarf", "name": "Dwarf", "f": "Alliance", "img": "dwarf.jpg", "cls": ["hunter", "paladin", "priest", "rogue", "shaman", "warrior"]}, {"id": "gnome", "name": "Gnome", "f": "Alliance", "img": "gnome.jpg", "cls": ["mage", "priest", "rogue", "warlock", "warrior"]}, {"id": "human", "name": "Human", "f": "Alliance", "img": "human.jpg", "cls": ["hunter", "mage", "paladin", "priest", "rogue", "warlock", "warrior"]}, {"id": "nightelf", "name": "Night Elf", "f": "Alliance", "img": "nightelf.jpg", "cls": ["druid", "hunter", "priest", "rogue", "warrior"]}, {"id": "skyborne", "name": "Skyborne (High Order)", "f": "Alliance", "img": "skyborne.jpg", "cls": ["druid", "hunter", "rogue", "warrior", "mage"]}, {"id": "skyborne", "name": "Skyborne (Windshaper)", "f": "Horde", "img": "skyborne.jpg", "cls": ["druid", "hunter", "rogue", "warrior", "shaman"]}, {"id": "orc", "name": "Orc", "f": "Horde", "img": "orc.jpg", "cls": ["hunter", "mage", "rogue", "shaman", "warlock", "warrior"]}, {"id": "tauren", "name": "Tauren", "f": "Horde", "img": "tauren.jpg", "cls": ["druid", "hunter", "shaman", "warrior"]}, {"id": "troll", "name": "Troll", "f": "Horde", "img": "troll.jpg", "cls": ["hunter", "mage", "priest", "rogue", "shaman", "warlock", "warrior"]}, {"id": "undead", "name": "Undead", "f": "Horde", "img": "undead.jpg", "cls": ["mage", "paladin", "priest", "rogue", "warlock", "warrior"]}]},retail:{label:"Retail (Midnight)",classes:RETAIL_CLASSES,races:[{"id": "dwarf", "name": "Dwarf", "f": "Alliance", "img": "dwarf.jpg", "cls": ["hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}, {"id": "gnome", "name": "Gnome", "f": "Alliance", "img": "gnome.jpg", "cls": ["hunter", "mage", "priest", "rogue", "warlock", "warrior", "deathknight", "monk"]}, {"id": "human", "name": "Human", "f": "Alliance", "img": "human.jpg", "cls": ["hunter", "mage", "paladin", "priest", "rogue", "warlock", "warrior", "deathknight", "monk"]}, {"id": "nightelf", "name": "Night Elf", "f": "Alliance", "img": "nightelf.jpg", "cls": ["druid", "hunter", "mage", "paladin", "priest", "rogue", "warlock", "warrior", "deathknight", "monk", "demonhunter"]}, {"id": "draenei", "name": "Draenei", "f": "Alliance", "img": "draenei.jpg", "cls": ["hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}, {"id": "worgen", "name": "Worgen", "f": "Alliance", "img": "worgen.jpg", "cls": ["druid", "hunter", "mage", "priest", "rogue", "warlock", "warrior", "deathknight", "monk"]}, {"id": "lightforgeddraenei", "name": "Lightforged Draenei", "f": "Alliance", "img": "lightforgeddraenei.jpg", "cls": ["hunter", "mage", "paladin", "priest", "rogue", "warlock", "warrior", "deathknight", "monk"]}, {"id": "voidelf", "name": "Void Elf", "f": "Alliance", "img": "voidelf.jpg", "cls": ["hunter", "mage", "priest", "rogue", "warlock", "warrior", "deathknight", "monk", "demonhunter"]}, {"id": "darkirondwarf", "name": "Dark Iron Dwarf", "f": "Alliance", "img": "darkirondwarf.jpg", "cls": ["hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}, {"id": "kultiran", "name": "Kul Tiran", "f": "Alliance", "img": "kultiran.jpg", "cls": ["druid", "hunter", "mage", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}, {"id": "mechagnome", "name": "Mechagnome", "f": "Alliance", "img": "mechagnome.jpg", "cls": ["hunter", "mage", "priest", "rogue", "warlock", "warrior", "deathknight", "monk"]}, {"id": "pandaren", "name": "Pandaren", "f": "Neutral", "img": "pandaren.jpg", "cls": ["hunter", "mage", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}, {"id": "dracthyr", "name": "Dracthyr", "f": "Neutral", "img": "dracthyr.jpg", "cls": ["hunter", "mage", "priest", "rogue", "warlock", "warrior", "evoker"]}, {"id": "earthen", "name": "Earthen", "f": "Neutral", "img": "earthen.jpg", "cls": ["hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior", "monk"]}, {"id": "haranir", "name": "Haranir", "f": "Neutral", "img": "haranir.png", "cls": ["druid", "hunter", "mage", "priest", "rogue", "shaman", "warlock", "warrior", "monk"]}, {"id": "orc", "name": "Orc", "f": "Horde", "img": "orc.jpg", "cls": ["hunter", "mage", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}, {"id": "tauren", "name": "Tauren", "f": "Horde", "img": "tauren.jpg", "cls": ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}, {"id": "troll", "name": "Troll", "f": "Horde", "img": "troll.jpg", "cls": ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}, {"id": "undead", "name": "Undead", "f": "Horde", "img": "undead.jpg", "cls": ["hunter", "mage", "paladin", "priest", "rogue", "warlock", "warrior", "deathknight", "monk"]}, {"id": "bloodelf", "name": "Blood Elf", "f": "Horde", "img": "bloodelf.jpg", "cls": ["hunter", "mage", "paladin", "priest", "rogue", "warlock", "warrior", "deathknight", "monk", "demonhunter"]}, {"id": "goblin", "name": "Goblin", "f": "Horde", "img": "goblin.jpg", "cls": ["hunter", "mage", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}, {"id": "highmountaintauren", "name": "Highmountain Tauren", "f": "Horde", "img": "highmountaintauren.jpg", "cls": ["druid", "hunter", "mage", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}, {"id": "nightborne", "name": "Nightborne", "f": "Horde", "img": "nightborne.jpg", "cls": ["hunter", "mage", "priest", "rogue", "warlock", "warrior", "deathknight", "monk"]}, {"id": "magharorc", "name": "Mag'har Orc", "f": "Horde", "img": "magharorc.jpg", "cls": ["hunter", "mage", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}, {"id": "vulpera", "name": "Vulpera", "f": "Horde", "img": "vulpera.jpg", "cls": ["hunter", "mage", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}, {"id": "zandalaritroll", "name": "Zandalari Troll", "f": "Horde", "img": "zandalaritroll.jpg", "cls": ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior", "deathknight", "monk"]}]}};
