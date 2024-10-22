import { atom, selector } from "recoil";
import axios from 'axios'

export const networkAtom = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () =>{
            const url = 'http://localhost:3000/random';
            const res = await axios.get(url);
            await new Promise(r => setTimeout(r, 5000));
            return({
                  network: res.data.randomNumber, 
                  jobs: 9, 
                  messaging: 31, 
                  notifications: 31
            })
            }
        })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(networkAtom);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})