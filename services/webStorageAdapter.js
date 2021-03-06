import { toast } from 'react-toastify';

export const storageChecker = () => {
    var storage = window.localStorage.getItem('collection');
    return storage !== null;
}

export const addCollection = (id) => {
    var storage = window.localStorage.getItem('collection');
    let data = [id];
    if (storageChecker()) {
        var array = JSON.parse(storage).collections_id;
        if (!array.includes(id)) {
            array.push(id)
            data = array;
        } else {
            return toast.error('Anime already added on collection');
        }
    }
    window.localStorage.setItem('collection', JSON.stringify({ collections_id: data }));
    return toast.success('Successfully added to collection.');
}

export const removeCollection = (id) => {
    var storage = JSON.parse(window.localStorage.getItem('collection'));
    var { collections_id: collections } = storage;
    window.localStorage.setItem('collection', JSON.stringify({ collections_id: collections.filter((el) => el !== id) }));
    return toast.success('Successfully deleted from collection.');
}