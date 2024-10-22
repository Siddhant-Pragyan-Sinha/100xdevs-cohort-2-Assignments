import {atom, selector} from "recoil";
export const networkAtom = atom({
    key: 'networkAtom', 
    default: 90
});

export const jobsAtom = atom({
    key: 'jobsAtom', 
    default: 0
});

export const notiAtom = atom({
    key: 'notiAtom', 
    default: 12
});

export const msgAtom = atom({
    key: 'msgAtom', 
    default: 1
});

export const totalSel = selector({
    key: 'totalSel', 
    get: ({get})=>{
        const networkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        const msgCount = get(notiAtom);
        const notiCount = get(msgAtom);
        return networkCount + jobsCount + msgCount + notiCount;
    }
})