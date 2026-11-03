// Class/spec data for current retail WoW (The War Within era). Fan-made.
const T=(...a)=>a;
const CLASSES=[
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
 {n:"Frost",role:"damage",range:"ranged",traits:T("utility","pets","beginner"),exp:"Control-focused caster; slows and shatter combos."}]},
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
 {n:"Vengeance",role:"tank",range:"melee",traits:T("mobility","aoe"),exp:"Self-healing tank via Soul Fragments; great AoE control."}]},
{id:"evoker",name:"Evoker",color:"#33937F",armor:"Mail",specs:[
 {n:"Devastation",role:"damage",range:"ranged",traits:T("burst","aoe"),exp:"Mid-range empowered breaths; position for 25-yd range."},
 {n:"Preservation",role:"healer",range:"ranged",traits:T("burst","complex"),exp:"Empowered heals and time-bending."},
 {n:"Augmentation",role:"damage",range:"ranged",traits:T("utility","support","complex"),exp:"Support DPS: buff your allies' damage."}]},
];
const ALL=["warrior","paladin","hunter","rogue","priest","deathknight","shaman","mage","warlock","monk","druid","demonhunter","evoker"];
const no=(...x)=>ALL.filter(c=>!x.includes(c)&&c!=="evoker"&&c!=="demonhunter");
const RACES=[
 {id:"human",name:"Human",f:"Alliance",cls:no("shaman","druid")},
 {id:"dwarf",name:"Dwarf",f:"Alliance",cls:no("druid")},
 {id:"nightelf",name:"Night Elf",f:"Alliance",cls:no("shaman").concat("demonhunter")},
 {id:"gnome",name:"Gnome",f:"Alliance",cls:no("paladin","druid")},
 {id:"draenei",name:"Draenei",f:"Alliance",cls:no("rogue","druid","warlock")},
 {id:"worgen",name:"Worgen",f:"Alliance",cls:no("paladin","shaman","monk")},
 {id:"voidelf",name:"Void Elf",f:"Alliance",cls:no("paladin","shaman","druid")},
 {id:"lightforgeddraenei",name:"Lightforged Draenei",f:"Alliance",cls:no("rogue","druid","monk","shaman")},
 {id:"darkirondwarf",name:"Dark Iron Dwarf",f:"Alliance",cls:no("druid")},
 {id:"kultiran",name:"Kul Tiran",f:"Alliance",cls:no("paladin")},
 {id:"mechagnome",name:"Mechagnome",f:"Alliance",cls:no("paladin","druid","shaman")},
 {id:"orc",name:"Orc",f:"Horde",cls:no("paladin","druid")},
 {id:"undead",name:"Undead",f:"Horde",cls:no("paladin","shaman","druid")},
 {id:"tauren",name:"Tauren",f:"Horde",cls:no("rogue","mage","warlock")},
 {id:"troll",name:"Troll",f:"Horde",cls:no("paladin")},
 {id:"bloodelf",name:"Blood Elf",f:"Horde",cls:no("shaman","druid").concat("demonhunter")},
 {id:"goblin",name:"Goblin",f:"Horde",cls:no("paladin","druid","monk")},
 {id:"nightborne",name:"Nightborne",f:"Horde",cls:no("paladin","shaman","druid")},
 {id:"highmountaintauren",name:"Highmountain Tauren",f:"Horde",cls:no("paladin","rogue","mage","warlock","priest")},
 {id:"magharorc",name:"Mag'har Orc",f:"Horde",cls:no("paladin","warlock","druid")},
 {id:"zandalaritroll",name:"Zandalari Troll",f:"Horde",cls:no("warlock")},
 {id:"vulpera",name:"Vulpera",f:"Horde",cls:no("paladin","druid")},
 {id:"pandaren",name:"Pandaren",f:"Neutral",cls:no("paladin","druid","deathknight").concat("deathknight")},
 {id:"dracthyr",name:"Dracthyr",f:"Neutral",cls:["evoker","warrior","hunter","rogue","priest","mage","warlock"]},
 {id:"earthen",name:"Earthen",f:"Neutral",cls:["warrior","paladin","hunter","rogue","priest","shaman","mage","warlock","monk"]},
];
