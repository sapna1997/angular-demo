import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { parentComponentDemo } from './parent';
import { childComponentDemo } from './child/child';

@NgModule({
  imports: [BrowserModule],
  declarations: [parentComponentDemo, childComponentDemo],
  exports: [parentComponentDemo, childComponentDemo],
  bootstrap: [parentComponentDemo, childComponentDemo]

})

export class parentModule{

}
