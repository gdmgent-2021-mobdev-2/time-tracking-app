const KEY_USER = 'KEY_USER';

const getUser = () => {
    const user = localStorage.getItem(KEY_USER);
    if (user) {
        return JSON.parse(user);
    }
    return null;
};

const storeUser = (user) => {
    localStorage.setItem(KEY_USER, JSON.stringify(user));
};

const storage = {
    storeUser,
    getUser,
};

export default storage;
