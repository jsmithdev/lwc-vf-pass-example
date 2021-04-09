import { api, LightningElement } from 'lwc';

export default class LwcVfPassExample extends LightningElement {
    @api stdin = ''
    get stdout(){ return this._stdout || 'meow'; }
    set stdout(value){
        this._stdout = value;
        this.dispatchEvent(new CustomEvent('stdout', { 
            detail: {
                stdout: value
            },
        }))
    }

    connectedCallback(){
        console.log('lwc has stdin: ', this.stdin);
    }

    click(){
        this.stdout = this.stdin + ' and meow '
    }
}