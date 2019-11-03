import { Category } from './category';

export interface Activity {
    id: number;
    titulo: string;
    descripcion: string;
    horaInicio: Date;
    horaFinal: Date;
    category: Category;

}
