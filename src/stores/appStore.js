import { observable, computed, action } from 'mobx';

export class appStore {


    @observable pageMSG = "this is page1";

    get pageMSG() {
        return this.pageMSG;
    }

    @action changeMSG(newMSG) {
        this.pageMSG = newMSG;
    }
}

