class DailyEden {
    constructor(newTitle, newObjective, newOrder) {
        this.title = newTitle;
        this.objective = newObjective;
        this.order = newOrder;
    }

}
let myDailyEden1 = new DailyEden(
    "Annihilation: bandits",
    "kill bandits",
    1);
let myDailyEden2 = new DailyEden(
    "Bounty: Utini Wupwup",
    "Destroy The Boss",
    2);

let myDailyEden3 = new DailyEden(
    "Rescue: Duke Gabin",
    "escort Duke Gabin out of the catacombs",
    3);
let myDailyEden4 = new DailyEden(
    "Annihilation: Undeads",
    "kill for good that deads",
    4);
let myDailyEden5 = new DailyEden(
    "Bounty: Blazefiend Griefblade",
    "Destroy The Boss",
    5);
let myDailyEden6 = new DailyEden(
    "Rescue: the farmer Hamnet",
    "Find and escort the friendly",
    6);
let myDailyEden7 = new DailyEden(
    "Annihilation: Charrs",
    "Kill them for Ascalon",
    7);
let myDailyEden8 = new DailyEden(
    "Bounty: Countess Nadya",
    "Destroy The Bandit Boss",
    8);
let myDailyEden9 = new DailyEden(
    "Rescue: Footman Tate",
    "Find and escort Tate",
    9);

    let quests = [
        myDailyEden1,
        myDailyEden2,
        myDailyEden3,
        myDailyEden4,
        myDailyEden5,
        myDailyEden6,
        myDailyEden7,
        myDailyEden8,
        myDailyEden9
    ];

    console.log(quests[0]);