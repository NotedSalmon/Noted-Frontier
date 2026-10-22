import { Player } from "./Player";

export class Mage extends Player {
    constructor(name: string) {
        super(name, "mage", "spells", "melee");

        this.usesMana = true;
        this.usesEnergy = false;

        this.intelligence += 2;
        this.evasion += 1;
    }
}