import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class BotsService {
  constructor(@Inject('FIRESTORE') private db: any) {}

  async findAll() {
    const querySnapshot = await this.db.collection('bots').get();
    const res = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return res;
  }

  async create(payload: any) {
    await this.db.collection('bots').add(payload);
    return 'Bot Created';
  }
}
