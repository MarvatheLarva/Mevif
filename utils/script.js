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
const spawnPos = [686.245, 577.950, 130.461];
on('onClientGameTypeStart', () => {
    exports.spawnmanager.setAutoSpawnCallback(() => {
      exports.spawnmanager.spawnPlayer({
        x: spawnPos[0],
        y: spawnPos[1],
        z: spawnPos[2],
        model: 'a_m_m_acult_01'
      }, () => {
        emit('chat:addMessage', {
          args: [
            'Welcome to the party!~'
          ]
        })
      });
    });
  
    exports.spawnmanager.setAutoSpawn(true)
    exports.spawnmanager.forceRespawn()

    playerPed = PlayerPedId()
    SetPedFaceFeature(playerPed, 0,	-1.0);
    SetPedFaceFeature(playerPed, 19, -1.0);
    SetPedHeadOverlay(playerPed, 10, 10, 255);
  });
  

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