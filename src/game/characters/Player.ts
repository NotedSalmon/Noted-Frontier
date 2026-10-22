import { PLAYER_BASE_STATS } from "../constants";
import type { AttackStyle, ClassType, Weakness } from "./characterTypes";

export class Player {
    id: string;
    name: string;
    classType: ClassType;

    level: number;
    totalXp: number;
    xpRemaining: number;

    // Player Stats
    health: number;
    healthRegen: number;
    mana: number;
    manaRegen: number;
    energy: number;
    energyRegen: number;

    // Attributes -> Aka stuff you can increase by leveling up
    intelligence: number; // Attack dmg for Mage
    dexterity: number; // Attack dmg for Range
    strength: number; // Attack dmg for Warrior
    evasion: number; // Dodge chance
    defence: number; // Dmg reduction
    speed: number; // Speed which determines order
    accuracy: number; // How accurate player is
    weaponCrit: number; // Weapon crit damage
    critChance: number; // Weapon crit chance
    itemDropLuck: number; // How likely a good item is dropped
    karma: number; // something about karma idk yet


    // Combat Config (maybe useful to work out type effectiveness)
    attackStyle: AttackStyle;
    weakness: Weakness;

    // Which resource class will use
    usesMana: boolean;
    usesEnergy: boolean;

    constructor(name: string, classType: ClassType, attackStyle: AttackStyle, weakness: Weakness) {
        this.id = crypto.randomUUID();
        this.name = name;

        this.level = PLAYER_BASE_STATS.level;
        this.totalXp = PLAYER_BASE_STATS.totalXp;
        this.xpRemaining = PLAYER_BASE_STATS.xpRemaining;

        this.classType = classType
        this.attackStyle = attackStyle;
        this.weakness = weakness;

        this.usesMana = false;
        this.usesEnergy = false;

        // Set base values
        this.health = PLAYER_BASE_STATS.hp
        this.healthRegen = PLAYER_BASE_STATS.hpRegen;
        this.mana = PLAYER_BASE_STATS.mana;
        this.manaRegen = PLAYER_BASE_STATS.manaRegen;
        this.energy = PLAYER_BASE_STATS.energy;
        this.energyRegen = PLAYER_BASE_STATS.energyRegen;

        // Attributes base
        this.intelligence = PLAYER_BASE_STATS.intelligence;
        this.dexterity = PLAYER_BASE_STATS.dexterity;
        this.strength = PLAYER_BASE_STATS.strength;
        this.evasion = PLAYER_BASE_STATS.evasion;
        this.defence = PLAYER_BASE_STATS.defense;
        this.speed = PLAYER_BASE_STATS.speed;
        this.accuracy = PLAYER_BASE_STATS.accuracy;
        this.weaponCrit = PLAYER_BASE_STATS.weaponCrit;
        this.critChance = PLAYER_BASE_STATS.critChance;
        this.itemDropLuck = PLAYER_BASE_STATS.itemDropLuck;
        this.karma = PLAYER_BASE_STATS.karma;
    }

    gainXP(amount: number): void {
        if (amount <=0) return;

        this.totalXp += amount;
        this.xpRemaining = Math.max(0, this.xpRemaining - amount);
    }
}