GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('basic_injector')
        .category('draconic')
        .setEUIO('in')
        .setMaxIOSize(16, 4, 4, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
    
        event.create('wyvern_injector')
        .category('draconic')
        .setEUIO('in')
        .setMaxIOSize(16, 4, 4, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)

        event.create('draconic_injector')
        .category('draconic')
        .setEUIO('in')
        .setMaxIOSize(16, 4, 4, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)

        event.create('chaotic_injector')
        .category('draconic')
        .setEUIO('in')
        .setMaxIOSize(16, 4, 4, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('basic_fusion_injector', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('basic_injector')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:highly_reinforced_radioactive_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#CCCCC#', '###C###', '###C###', '###C###', '###C###', '###C###', '###C###', '#CCCCC#')
            .aisle('CCCCCCC', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', 'CCCCCCC')
            .aisle('CCCCCCC', '###E###', '#######', '#######', '#######', '#######', '###E###', 'CCCCCCC')
            .aisle('CCCECCC', 'CEEEEEC', 'CE#Y#EC', 'CE#Y#EC', 'CE#Y#EC', 'CE#Y#EC', 'CEEEEEC', 'CCCECCC')
            .aisle('CCCCCCC', '###E###', '#######', '#######', '#######', '#######', '###E###', 'CCCCCCC')
            .aisle('CCCCCCC', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', 'CCCCCCC')
            .aisle('#CCKCC#', '###C###', '###C###', '###C###', '###C###', '###C###', '###C###', '#CCCCC#')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('Y', Predicates.blocks('gtceu:cosmic_tungsten_frame'))
            .where('E', Predicates.blocks('kubejs:stellar_powered_casing'))
            .where("C", Predicates.blocks('kubejs:highly_reinforced_radioactive_casing')
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS, PartAbility.IMPORT_ITEMS, PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE, PartAbility.MUFFLER))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel("kubejs:block/casings/highly_reinforced_radioactive_casing", 'gtceu:block/multiblock/power_substation')

        event.create('wyvern_fusion_injector', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeTypes(['basic_injector', 'wyvern_injector'])
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:highly_reinforced_radioactive_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#CCCCC#', '###C###', '###C###', '###C###', '###C###', '###C###', '###C###', '#CCCCC#')
            .aisle('CCCCCCC', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', 'CCCCCCC')
            .aisle('CCCCCCC', '###E###', '#######', '#######', '#######', '#######', '###E###', 'CCCCCCC')
            .aisle('CCCECCC', 'CEEEEEC', 'CE#Y#EC', 'CE#Y#EC', 'CE#Y#EC', 'CE#Y#EC', 'CEEEEEC', 'CCCECCC')
            .aisle('CCCCCCC', '###E###', '#######', '#######', '#######', '#######', '###E###', 'CCCCCCC')
            .aisle('CCCCCCC', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', 'CCCCCCC')
            .aisle('#CCKCC#', '###C###', '###C###', '###C###', '###C###', '###C###', '###C###', '#CCCCC#')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('Y', Predicates.blocks('gtceu:draconium_frame'))
            .where('E', Predicates.blocks('kubejs:stellar_powered_casing'))
            .where("C", Predicates.blocks('kubejs:highly_reinforced_radioactive_casing')
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS, PartAbility.IMPORT_ITEMS, PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE, PartAbility.MUFFLER))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel("kubejs:block/casings/highly_reinforced_radioactive_casing", 'gtceu:block/multiblock/power_substation')

        event.create('draconic_fusion_injector', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeTypes(['basic_injector', 'wyvern_injector', 'draconic_injector'])
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:highly_reinforced_radioactive_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#CCCCC#', '###C###', '###C###', '###C###', '###C###', '###C###', '###C###', '#CCCCC#')
            .aisle('CCCCCCC', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', 'CCCCCCC')
            .aisle('CCCCCCC', '###E###', '#######', '#######', '#######', '#######', '###E###', 'CCCCCCC')
            .aisle('CCCECCC', 'CEEEEEC', 'CE#Y#EC', 'CE#Y#EC', 'CE#Y#EC', 'CE#Y#EC', 'CEEEEEC', 'CCCECCC')
            .aisle('CCCCCCC', '###E###', '#######', '#######', '#######', '#######', '###E###', 'CCCCCCC')
            .aisle('CCCCCCC', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', 'CCCCCCC')
            .aisle('#CCKCC#', '###C###', '###C###', '###C###', '###C###', '###C###', '###C###', '#CCCCC#')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('Y', Predicates.blocks('gtceu:awakened_draconium_frame'))
            .where('E', Predicates.blocks('kubejs:stellar_powered_casing'))
            .where("C", Predicates.blocks('kubejs:highly_reinforced_radioactive_casing')
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS, PartAbility.IMPORT_ITEMS, PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE, PartAbility.MUFFLER))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel("kubejs:block/casings/highly_reinforced_radioactive_casing", 'gtceu:block/multiblock/power_substation')

        event.create('chaotic_fusion_injector', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeTypes(['basic_injector', 'wyvern_injector', 'draconic_injector', 'chaotic_injector'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(() => Block.getBlock('kubejs:highly_reinforced_radioactive_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#CCCCC#', '###C###', '###C###', '###C###', '###C###', '###C###', '###C###', '#CCCCC#')
            .aisle('CCCCCCC', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', 'CCCCCCC')
            .aisle('CCCCCCC', '###E###', '#######', '#######', '#######', '#######', '###E###', 'CCCCCCC')
            .aisle('CCCECCC', 'CEEEEEC', 'CE#Y#EC', 'CE#Y#EC', 'CE#Y#EC', 'CE#Y#EC', 'CEEEEEC', 'CCCECCC')
            .aisle('CCCCCCC', '###E###', '#######', '#######', '#######', '#######', '###E###', 'CCCCCCC')
            .aisle('CCCCCCC', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', '#Y#E#Y#', 'CCCCCCC')
            .aisle('#CCKCC#', '###C###', '###C###', '###C###', '###C###', '###C###', '###C###', '#CCCCC#')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('Y', Predicates.blocks('gtceu:chaos_block'))
            .where('E', Predicates.blocks('kubejs:stellar_powered_casing'))
            .where("C", Predicates.blocks('kubejs:highly_reinforced_radioactive_casing')
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS, PartAbility.IMPORT_ITEMS, PartAbility.IMPORT_FLUIDS, PartAbility.PARALLEL_HATCH))
                .or(Predicates.abilities(PartAbility.MAINTENANCE, PartAbility.MUFFLER))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel("kubejs:block/casings/highly_reinforced_radioactive_casing", 'gtceu:block/multiblock/power_substation')
})