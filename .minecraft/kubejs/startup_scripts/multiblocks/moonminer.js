GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('moonminer')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(3, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('moonminer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('moonminer')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.MACHINE_CASING_HV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#CCC#', '#BBB#', '#CCC#', '##C##', '##C##', '#####', '#####', '#####', '#####', '#####', '#####')
            .aisle('CAAAC', 'B###B', 'C###C', '#A#A#', '#A#A#', '#AAA#', '##A##', '##A##', '#####', '#####', '#####')
            .aisle('CAAAC', 'B###B', 'C###C', 'C###C', 'C###C', '#A#A#', '#A#A#', '#A#A#', '##C##', '##B##', '##C##')
            .aisle('CAAAC', 'B###B', 'C###C', '#A#A#', '#A#A#', '#AAA#', '##A##', '##A##', '#####', '#####', '#####')
            .aisle('#CCC#', '#OKN#', '#CCC#', '##C##', '##C##', '#####', '#####', '#####', '#####', '#####', '#####')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:kanthal_coil_block'))
            .where('A', Predicates.blocks('gtceu:stainless_steel_frame'))
            .where(
                "C",
                Predicates.blocks('gtceu:clean_machine_casing')
                  .setMinGlobalLimited(29)
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel("gtceu:block/casings/voltage/hv/side", 'gtceu:block/multiblock/implosion_compressor')
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('atomic_moonminer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('moonminer')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.MACHINE_CASING_HV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('#CCC#', '#BBB#', '#CCC#', '##C##', '##C##', '#####', '#####', '#####', '#####', '#####', '#####')
            .aisle('CAAAC', 'B###B', 'C###C', '#A#A#', '#A#A#', '#AAA#', '##A##', '##A##', '#####', '#####', '#####')
            .aisle('CAAAC', 'B###B', 'C###C', 'C###C', 'C###C', '#A#A#', '#A#A#', '#A#A#', '##C##', '##B##', '##C##')
            .aisle('CAAAC', 'B###B', 'C###C', '#A#A#', '#A#A#', '#AAA#', '##A##', '##A##', '#####', '#####', '#####')
            .aisle('#CCC#', '#OKN#', '#CCC#', '##C##', '##C##', '#####', '#####', '#####', '#####', '#####', '#####')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:tritanium_coil_block'))
            .where('A', Predicates.blocks('kubejs:neutronium_casing'))
            .where(
                "C",
                Predicates.blocks('gtceu:atomic_casing')
                  .setMinGlobalLimited(29)
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                  .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingModel("gtceu:block/casings/gcym/atomic_casing", 'gtceu:block/multiblock/implosion_compressor')
})