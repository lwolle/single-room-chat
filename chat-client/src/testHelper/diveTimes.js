export const diveTimes = x => (root) => {
    let iterator = x;
    let newRoot = root;

    while (iterator > 0) {
        newRoot = newRoot.dive();
        iterator -= 1;
    }

    return newRoot;
};
