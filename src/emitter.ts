import { EmitOption, UML } from './models';
import * as d3 from 'd3';

export interface Emitter {
    emit(uml: UML): void;
}

export class D3Emitter implements Emitter {
    private container: d3.Selection<any, any, HTMLElement, any>;
    private svg: d3.Selection<SVGSVGElement, any, HTMLElement, any> = null;

    constructor(option: EmitOption) {
        this.container = d3.select(option.containerSelector);
        if (this.container.empty()) {
            throw new Error('No container selected for ' + option.containerSelector);
        }
    }

    emit(uml: UML) {
        if (this.svg !== null) {
            this.svg.remove();
        }

        this.svg = this.container
            .append('svg');

        this.svg.data([uml])
            .append('p')
            .text(function(d) {
                return d.text;
            })
    }
}
