export default class ExercisesService {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('exercisesArr'));

        // this._writeLocalStorage = (arr) => {
        //     localStorage.setItem('exercisesArr', JSON.stringify(arr));
        // }

        // if(this.items === null) {
        //     this.items = [];
        //     this._writeLocalStorage([]);
        // }
    }
    
    getElem (pageId) {
        return this.items.filter(e => e.id == pageId)[0];
    }

    removeItem (id) {
        return this.items.filter(e => e.id !== id);
    }

    editItem (id, name) {
        let elem = this.items.filter(a => a.id === id);
        elem[0].name = name;
        elem[0].visible = !elem[0].visible;
        return this.items;
    }

    addItem (id, name, repeatNum, extraWeight, extraWeightValue, overallVolume, lastChangeDate) {
        let newObj = {
            id     : id === undefined ? 1: id + 1,
            name   : name,
            repeatNum: repeatNum,
            extraWeight: extraWeight,
            extraWeightValue  : extraWeightValue,
            overallVolume: overallVolume,
            lastChangeDate: lastChangeDate
        }

        return this.items = [...this.items, newObj];
    }
};