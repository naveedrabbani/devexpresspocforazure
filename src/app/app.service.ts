import { Injectable } from '@angular/core';

export class Blueprint {
    Name: string;
    Version: string;
    Description: string;
    PollCycleInterval: number;
    AdvanceHQWNMM: boolean;
}

let blueprints: Blueprint[] = [{
    "Name": "OG_PUMP_S",
    "Version": "1.0.0",
    "Description": "Og Pump v1",
    "PollCycleInterval": 10,
    "AdvanceHQWNMM": false
},
{
    "Name": "GAS_TURBINE",
    "Version": "1.0.0",
    "Description": "Gas Turbine v1",
    "AdvanceHQWNMM": true,
    "PollCycleInterval": 5
},
{
    "Name": "GAS_TURBINE",
    "Version": "2.0.0",
    "Description": "Gas Turbine v2",
    "AdvanceHQWNMM": true,
    "PollCycleInterval": 5
},
{
    "Name": "MEH_STEAM_TURBINE",
    "Version": "1.0.0",
    "Description": "MEH Steam Turbine v1",
    "AdvanceHQWNMM": false,
    "PollCycleInterval": 5
}
];

@Injectable()
export class Service {
    getBlueprints() {
        return blueprints;
    }
}
