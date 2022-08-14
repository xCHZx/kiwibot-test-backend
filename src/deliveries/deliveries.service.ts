import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DeliveriesService {
  constructor(@Inject('FIRESTORE') private db: any) {}
  async findAll() {
    const querySnapshot = await this.db.collection('deliveries').get();
    const res = querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return res;
  }

  async findById(id: any) {
    const doc = await this.db.collection('deliveries').doc(id).get();
    return doc.data();
  }

  async create(payload: any) {
    await this.db.collection('deliveries').add(payload);
    return 'Delivery Created';
  }

  async update(id: any, payload: any) {
    await this.db.collection('deliveries').doc(id).update(payload);
    return 'Delivery updated';
  }
}
