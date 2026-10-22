import { Player } from "./Player";

export class Range extends Player {
    constructor(name: string) {
        super(name, "ranger", "ranged", "mage");

        this.usesMana = true;
        this.usesEnergy = true;

        this.dexterity += 2;
        this.evasion += 1;
    }
}