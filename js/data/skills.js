const skillData = {
    "magic": {
        levelCap: 10,
    },
    "spatialmagics": {
        levelCap: 10,
        parentSkill: "magic",
        actions: {
            "gather_essence_void_weak":{
                level: 1,
                difficulty: 1,
                time: 1000,
                output: {
                    "essence_void_weak": {
                        amount: 1,
                    },
                }
            },
            "increase_essence_cap": {
                level: 3,
                difficulty: 4,
                time: 10000,
                input: {
                    "essence_void_weak": {
                        amount: 100,
                    }
                },
                increase_cap: {
                    "essence": {
                        amount: 0.5,
                    }
                }
            },
            "gather_essence_void_medium":{
                level: 5,
                difficulty: 2,
                time: 3000,
                input: {
                    "essence_void_weak": {
                        amount: 2,
                    }
                },
                output: {
                    "essence_void_medium": {
                        amount: 1,
                    },
                }
            },
            "gather_essence_void_strong":{
                level: 10,
                difficulty: 3,
                time: 5000,
                input: {
                    "essence_void_medium":{
                        amount: 2
                    },
                },
                output: {
                    "essence_void_strong": {
                        amount: 1,
                    },
                }
            },
        },
    },
    "runicmagics": {
        levelCap: 10,
        parentSkill: "magic",
    },

    "animalcare": {
        levelCap: 10,
    },
    "husbandry": {
        levelCap: 10,
        parentSkill: "animalcare",
    },
    "butchering": {
        levelCap: 10,
        parentSkill: "animalcare",
    },
    "skinning": {
        levelCap: 10,
        parentSkill: "animalcare",
    },
    "taming": {
        levelCap: 10,
        parentSkill: "animalcare",
    },

    "naturemanagement": {
        levelCap: 10,
    },
    "woodcutting": {
        levelCap: 10,
        parentSkill: "naturemanagement",
    },
    "harvesting": {
        levelCap: 10,
        parentSkill: "naturemanagement",
    },
    "planting": {
        levelCap: 10,
        parentSkill: "naturemanagement",
    },

    "metalworking": {
        levelCap: 10,
    },
    "mining": {
        levelCap: 10,
        parentSkill: "metalworking",
    },
    "smelting": {
        levelCap: 10,
        parentSkill: "metalworking",
    },
};