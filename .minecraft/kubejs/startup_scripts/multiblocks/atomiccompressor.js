GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('atomiccompressor')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(20, 6, 4, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
        .setHasResearchSlot(true)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('atomicompressor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('atomiccompressor')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.MACHINE_CASING_UV)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle('###AAAAAAA###', '#############', '#############', '#############', '#############', '#############', '#############', '#############', '#############', '###AAAAAAA###')
        .aisle('##AABBBBBAA##', '###C#####C###', '###C#####C###', '###C#####C###', '###C#####C###', '###C#####C###', '###C#####C###', '###C#####C###', '###C#####C###', '##AABBBBBAA##')
        .aisle('#ABB#####BBA#', '####GCCCG####', '#############', '#############', '#############', '#############', '#############', '#############', '####GCCCG####', '#ABB#####BBA#')
        .aisle('#ABGBBBBBGBA#', '#C#G#####G#C#', '#C#########C#', '#C#########C#', '#C#########C#', '#C#########C#', '#C#########C#', '#C#########C#', '#C#G#####G#C#', '#ABGBBBBBGBA#')
        .aisle('AB#BAAAAAB#BA', '##G#GGGGG#G##', '####GRRRG####', '####GRRRG####', '####GRRRG####', '####GRRRG####', '####GRRRG####', '####GRRRG####', '##G#GGGGG#G##', 'AB#BAAAAAB#BA')
        .aisle('AB#BAAAAAB#BA', '##C#G###G#C##', '####R###R####', '####R###R####', '####R###R####', '####R###R####', '####R###R####', '####R###R####', '##C#G###G#C##', 'AB#BAAAAAB#BA')
        .aisle('AB#BAAAAAB#BA', '##C#G#Y#G#C##', '####R#T#R####', '####R#T#R####', '####R#T#R####', '####R#T#R####', '####R#T#R####', '####R#T#R####', '##C#G#Y#G#C##', 'AB#BAAAAAB#BA')
        .aisle('AB#BAAAAAB#BA', '##C#G###G#C##', '####R###R####', '####R###R####', '####R###R####', '####R###R####', '####R###R####', '####R###R####', '##C#G###G#C##', 'AB#BAAAAAB#BA')
        .aisle('AB#BAAAAAB#BA', '##G#GGGGG#G##', '####GRRRG####', '####GRRRG####', '####GRRRG####', '####GRRRG####', '####GRRRG####', '####GRRRG####', '##G#GGGGG#G##', 'AB#BAAAAAB#BA')
        .aisle('#ABGBBBBBGBA#', '#C#G#####G#C#', '#C#########C#', '#C#########C#', '#C#########C#', '#C#########C#', '#C#########C#', '#C#########C#', '#C#G#####G#C#', '#ABGBBBBBGBA#')
        .aisle('#ABB#####BBA#', '####GCCCG####', '#############', '#############', '#############', '#############', '#############', '#############', '####GCCCG####', '#ABB#####BBA#')
        .aisle('##AABBBBBAA##', '###C#####C###', '###C#####C###', '###C#####C###', '###C#####C###', '###C#####C###', '###C#####C###', '###C#####C###', '###C#####C###', '##AABBBBBAA##')
        .aisle('###AALOMAA###', '#############', '#############', '#############', '#############', '#############', '#############', '#############', '#############', '###AAAAAAA###')
        .where('O', Predicates.controller(Predicates.blocks(definition.get())))
        .where('A', Predicates.blocks("gtceu:atomic_casing")
        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
        )
        .where('B', Predicates.blocks('kubejs:atomic_alloy_coil_block'))
        .where('G', Predicates.blocks('kubejs:neutronate_enriched_atomic_casing'))
        .where('C', Predicates.blocks('gtceu:nonconducting_casing'))
        .where('R', Predicates.blocks('gtceu:fusion_glass'))
        .where('Y', Predicates.blocks('draconicevolution:particle_generator'))
        .where('T', Predicates.blocks('draconicevolution:energy_core_stabilizer'))
        .where('L', Predicates.abilities(PartAbility.MUFFLER)
            .setExactLimit(1)
        )
        .where('M', Predicates.abilities(PartAbility.MAINTENANCE))
        .where('#', Predicates.any())
        .build()
    )
    .workableCasingModel("gtceu:block/casings/gcym/atomic_casing", 'gtceu:block/multiblock/generator/large_steam_turbine')
    })


