//Dot notation to access the values in a given object
/*
let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log(netflix.name);
console.log(netflix.season1.seasonInfo);
console.log(netflix.season1.seasonInfo.episodeInfo[5].episodeName);

/*
    Using the Netflix object, write a for loop that outputs each episode name within season 1.
    *consider how we can access that array and what we need to check
*/

for(let i=0;i<=netflix.season1.seasonInfo.episodeInfo.length;i++){
    console.log(netflix.season1.seasonInfo.episodeInfo[i].episodeName);
}
/*




let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//print bugs bunny to the console
//print larry johnson to the console

console.log(spaceJam.toonSquad.rabbit1);
console.log(spaceJam.nbaPlayers.charlotteHornets1);
/*
let test = Object.keys(spaceJam);
console.log(test);
*/