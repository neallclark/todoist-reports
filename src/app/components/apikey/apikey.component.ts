import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'apikey',
    templateUrl: './apikey.component.html'

})
export class ApiKeyComponent {
    @Output() onApiKeyEntered = new EventEmitter<string>();
    submitted = false;
    text = "Enter API Key";

    onKey(event: any) {
        let length = event.target.value.length;

        //TODO: add some more validation (i.e. should be a hex number)
        if(length == 40 && !this.submitted) {
            this.onApiKeyEntered.emit(event.target.value);
            this.submitted = true;
            this.text = "Key looks OK!";
        }
    }
}