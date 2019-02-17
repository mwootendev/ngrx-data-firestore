import { NgModule } from '@angular/core';
import { DefaultDataService, DefaultDataServiceFactory, PersistenceResultHandler, NgrxDataModule } from 'ngrx-data';
import { FirestoreDataServiceFactory } from './firestore-entity-collection-data.service';
import { FirestorePersistenceResultHandler } from './firestore-persistence-result-handler.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  imports: [
    NgrxDataModule,
    AngularFirestoreModule
  ],
  providers: [
    {
      provide: DefaultDataServiceFactory,
      useClass: FirestoreDataServiceFactory
    },
    {
      provide: PersistenceResultHandler,
      useClass: FirestorePersistenceResultHandler
    }
  ]
})
export class NgrxDataFirestoreModule { }
