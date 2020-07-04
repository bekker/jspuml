import { UML } from './models';
export interface Parser {
    parse(src: string): UML
}

export class PlantUMLParser implements Parser {
    parse(src: string): UML {
        return {
            text: src
        }
    }
}
