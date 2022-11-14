import { LocalStorageService } from './local-storage.service';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [AuthService, LocalStorageService],
})
export class CoreModule {}
