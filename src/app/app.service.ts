import { Injectable } from '@angular/core';

export class Blueprint {
    Name: string;
    Version: string;
    Description: string;
    PollCycleInterval: number;
    AdvanceHQWNMM: boolean;
}

let blueprints: Blueprint[] = [{
    "Name": "Blueprint A",
    "Version": "1.0.0",
    "Description": "This is BP-A initial version",
    "PollCycleInterval": 10,
    "AdvanceHQWNMM": false
   
},
{
    "Name": "Blueprint B",
    "Version": "1.0.0",
    "Description": "This is BP-B initial version",
    "PollCycleInterval": 5,
    "AdvanceHQWNMM": true
},
{
    "Name": "Blueprint B",
    "Version": "2.0.0",
    "Description": "This is BP-B second version",
    "PollCycleInterval": 5,
    "AdvanceHQWNMM": false
},
{
    "Name": "Blueprint C",
    "Version": "1.0.0",
    "Description": "This is BP-C initial version",
    "PollCycleInterval": 5,
    "AdvanceHQWNMM": true
}
];

@Injectable()
export class Service {
    getBlueprints() {
        return blueprints;
    }
}
