const context = {
    traffic: 1.0
};

// args -> [X, Y, Z]
RegisterCommand('tp', async (source, args) => {
    SetPedCoordsKeepVehicle(GetPlayerPed(-1), args[0], args[1], args[2])
}, false);

RegisterCommand('traffic', async (source, args) => {
    SetRandomVehicleDensityMultiplierThisFrame(0.0);
    SetParkedVehicleDensityMultiplierThisFrame(0.0);
    SetVehicleDensityMultiplierThisFrame(0.0);
}, false);
