import { Component } from '@angular/core'
@Component({
    selector: 'childdemo',
    templateUrl: 'childDemohtml.html'
})

export class childComponentDemo {
    text1: String;
    temp;
    getValue(event) {
        this.temp = event;
    }

    setData() {
        this.text1 = this.temp.target.value;
    }

}
