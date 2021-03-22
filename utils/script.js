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
            SetRandomVehicleDensityMultiplierThisFrame(context.traffic);
            SetParkedVehicleDensityMultiplierThisFrame(context.traffic);
            SetVehicleDensityMultiplierThisFrame(context.traffic);
            break;
        case '--yes':
        default:
            context.traffic = 1.0;
            break;
    }
}, false);

Citizen.CreateThread(() => {
    while (true) {   
        Citizen.Wait(0);
        // Traffic gestion
        SetRandomVehicleDensityMultiplierThisFrame(context.traffic);
        SetParkedVehicleDensityMultiplierThisFrame(context.traffic);
        SetVehicleDensityMultiplierThisFrame(context.traffic);
    }
})
