import {makeAutoObservable} from "mobx";

class UrlStore {
  uri: string;

  constructor(uri = '') {
    this.uri = uri;
    makeAutoObservable(this, {}, {autoBind: false});
  }

  generateUrlById(insertedId: string) {
    this.uri = `${window.location.protocol}//${window.location.hostname}/${insertedId}`
    console.log(this.uri);
  }
}

export default new UrlStore();
