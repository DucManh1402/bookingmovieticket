import { atom } from "recoil";

const movieState = atom({
    key: 'movieState',
    default: {},
});

export { movieState }