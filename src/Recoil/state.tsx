import { atom } from 'recoil'
import { Location } from '../type/commonType'

export type UserAuth = {
     token: string;
     errorMessage: string; 
}

type LocationState = {
    recording: boolean,
    locations: Location[],
    currentLocation: any,
    name: string,
}

type Tracks = {
    __v: number;
    _id: string;
    locations: Location[];
    name: string;
    userId: string;
}

export const userAuth = atom ({
    key: "auth",
    default:{
        token : "",
        errorMessage: "",
    } as UserAuth
})

export const locationState = atom ({
    key: 'locationState',
    default: {
        recording: false,
        locations: [],
        currentLocation: null,
        name: "",
    } as LocationState
})

export const tracks = atom ({
    key: "track",
    default: [{
        __v: 0,
        _id: "",
        locations: [],
        name: "",
        userId: "",
    }] as Tracks[]
})