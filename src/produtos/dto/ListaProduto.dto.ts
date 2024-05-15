import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.dto";

export class ListaProdutoDTO {
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly caracteristicas: CaracteristicaProdutoDTO[]
    ) {}
}