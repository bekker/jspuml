import { PumlOption } from './models';
import { Emitter, D3Emitter } from './emitter';
import { Parser, PlantUMLParser } from './parse';


export default class Puml {
    private parser: Parser;
    private emitter: Emitter;

    constructor(option: PumlOption) {
        this.parser = new PlantUMLParser();
        this.emitter = new D3Emitter(option.emit);
    }

    draw(src: string) {
        let uml = this.parser.parse(src);
        this.emitter.emit(uml);
    }
}
