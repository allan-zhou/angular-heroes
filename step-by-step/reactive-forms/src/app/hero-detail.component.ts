import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { states, heroes, Address, Hero } from './data-model';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnChanges {
    @Input() hero: Hero;
    heroForm: FormGroup;
    states = states;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    ngOnChanges() {
        this.heroForm.reset({
            name: this.hero.name,
            address: this.hero.addresses[0] || new Address()
        });
    }

    createForm() {
        this.heroForm = this.fb.group({
            name: ['', Validators.required], // formControl called 'name'
            secretLairs: this.fb.array([]),
            power: '',
            sidekick: ''
        })
    }

    setAddresses(addresses: Address[]) {
        const addressFGs = addresses.map(address => this.fb.group(address));
        const addressFormArray = this.fb.array(addressFGs);
        this.heroForm.setControl('secretLairs', addressFormArray);
    }

    get secretLairs(): FormArray {
        return this.heroForm.get('secretLairs') as FormArray;

    };

    addLair() {
        this.secretLairs.push(this.fb.group(new Address()));
    }

    revert() {
        this.ngOnChanges();
    }
}