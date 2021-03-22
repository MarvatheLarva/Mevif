const context = {
    traffic: 1.0
};

// args -> [X, Y, Z]
RegisterCommand('tp', async (source, args) => {
    SetPedCoordsKeepVehicle(GetPlayerPed(-1), args[0], args[1], args[2])
}, false);

RegisterCommand('traffic', async (source, args) => {
    switch (args[0]) {
        case '--no':
            context.traffic = 0.0;
            break;
    
        case '--yes':
            context.traffic = 1.0;
            break;
    }
}, false);

RegisterCommand('model', async (source, args) => {
    const pos = GetOffsetFromEntityInWorldCoords(GetPlayerPed(-1), 0.0, 2.0, 0.0)
    const hash = GetHashKey(args[0])
    RequestModel(hash)
    while(!HasModelLoaded(hash)) { }
    const ped = CreatePed(28, hash, pos.x, pos.y, pos.z, 0.0, true, true)

    ChangePlayerPed(GetPlayerPed(-1), ped, 1, 1)
}, false)

setTick(() => {
    SetMaxWantedLevel(0);
    SetCreateRandomCopsNotOnScenarios(false);
    SetCreateRandomCops(false);
    SetScenarioPedDensityMultiplierThisFrame(0.0, 0.0);
    SetScenarioPedDensityMultiplierThisFrame(0.0, 0.0);

    SetPedDensityMultiplierThisFrame(0.0);
    SetPedDensityMultiplierThisFrame(0.0);
    
    SetVehicleDensityMultiplierThisFrame(context.traffic);
    SetVehicleDensityMultiplierThisFrame(context.traffic);

    SetAmbientVehicleRangeMultiplierThisFrame(context.traffic);
    SetRandomVehicleDensityMultiplierThisFrame(context.traffic);
    SetRandomVehicleDensityMultiplierThisFrame(context.traffic);
    SetParkedVehicleDensityMultiplierThisFrame(context.traffic);
    SetParkedVehicleDensityMultiplierThisFrame(context.traffic);
  });