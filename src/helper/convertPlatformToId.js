const convertPlatformToId = (platformName) => {
    
    const platformIdLegend = {
        'nes': 1,
        'game-boy': 2,
        'snes': 3,
        'master-system': 4,
        'sega-genesis': 5,
        'sega-saturn': 6,
        'pc': 7,
    };

    return platformIdLegend[platformName];
};

module.exports = {convertPlatformToId};