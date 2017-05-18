import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {City} from "../model/city.model";
import 'rxjs/add/operator/map';

@Injectable()
export class CityService {
    private cities: City[];

    constructor(private _http: Http) {

    }

    setCities(cities) {
        this.cities = cities;
    }

    // retourneer alle cities
    getCities() {
        return this._http.get('assets/data/cities.json')
    }

    // retourneer city op basis van ID
    getCity(id: number) {
        return this._http.get('assets/data/cities.json')
            .map(cities => cities.json())
            .map(cities => {
                return this.cities.find(c => c.id === id);
                // andere optie: .filter() gebruiken. Als je
                // *meerdere* resultaten zou kunnen verwachten en dus een array wilt retourneren
                // return this.cities.filter(c => c.id === id)[0]; // In dit geval: index [0] omdat we maar 1 city willen
            })

    }

    numCities() {
        return this.cities.length;
    }
}