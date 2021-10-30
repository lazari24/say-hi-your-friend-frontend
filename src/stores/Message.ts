import {autorun, makeAutoObservable} from "mobx";
import {request} from "../api/Request";

export type MessageType = {
  id: string;
  name: string;
  friendName: string;
  message: string;
}

export class Message {

  isLoading = false;
  data: MessageType | undefined;

  constructor(id: string) {
    makeAutoObservable(this, {}, {autoBind: true});
    autorun(async () => {
      await this.load(id);
    })
  }

  async load(id: string) {
    try {
      this.isLoading = true;
      this.data = await request<MessageType>(`/messages/${id}`)
    } finally {
      this.isLoading = false;
    }
  }
}
