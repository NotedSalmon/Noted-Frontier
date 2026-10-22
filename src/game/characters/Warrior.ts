import { Player } from "./Player";

export class Warrior extends Player {
    constructor(name: string) {
        super(name, "warrior", "melee","ranged");

        this.usesMana = false;
        this.usesEnergy = true;

        this.strength += 2;
        this.defence += 1;
    }
}