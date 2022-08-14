import 'dotenv/config';
import { Global, Module } from '@nestjs/common';
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

@Global()
@Module({
  providers: [
    {
      provide: 'FIRESTORE',
      useFactory: async () => {
        await admin.initializeApp({
          credential: admin.credential.applicationDefault(),
        });
        const db = getFirestore();
        return db;
      },
    },
  ],
  exports: ['FIRESTORE'],
})
export class DatabaseModule {}
