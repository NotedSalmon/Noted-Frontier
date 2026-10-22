import type { AttackStyle, ClassType, Weakness } from "./characterTypes";

export class Player {
    id: string;
    name: string;
    classType: ClassType;

    // Player Stats
    health: number;
    healthRegen: number;

    // Combat Config (maybe useful to work out type effectiveness)
    attackStyle: AttackStyle;
    weakness: Weakness;

    usesMana: boolean;
    usesEnergy: boolean;

    constructor(name: string, classType: ClassType, attackStyle: AttackStyle, weakness: Weakness) {
        this.id = "idkYet" + Math.random;
        this.name = name;
        this.classType = classType
        

        // Set base values
        this.health = 100


        this.attackStyle = attackStyle;
        this.weakness = weakness;

        this.usesMana = false;
        this.usesEnergy = false;
    }

    gainXP(amount: number): void {
        if (amount <=0) return;

        // total xp += amount
    }
}