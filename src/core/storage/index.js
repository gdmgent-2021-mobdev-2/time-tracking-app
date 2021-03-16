const KEY_USER = 'KEY_USER';

const getUser = () => {
    const user = localStorage.getItem(KEY_USER);
    if (user) {
        return JSON.parse(user);
    }
    return null;
};

const storeUser = (user) => {
    console.log(user);
    localStorage.setItem(KEY_USER, JSON.stringify(user));
};

export {
    storeUser,
    getUser,
}
