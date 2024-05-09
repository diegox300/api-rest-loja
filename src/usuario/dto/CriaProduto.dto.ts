import { IsArray, IsDecimal, IsNotEmpty, IsPositive, MaxLength, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.dto";
import { ImagemProdutoDTO } from "./ImagemProduto.dto";
import { Type } from "class-transformer";


export class CriaProdutoDTO {

    @IsNotEmpty()
    nome: string;

    @IsPositive()
    @IsDecimal({ decimal_digits: '2' })
    valor: number;

    @IsPositive()
    quantidade: number;

    @IsNotEmpty()
    @MaxLength(1000)
    descricao: string;

    @Type(() => CaracteristicaProdutoDTO)
    @IsArray()
    @ValidateNested()
    caracteristicas: CaracteristicaProdutoDTO[];

    @Type(() => CaracteristicaProdutoDTO)
    @IsArray()
    @ValidateNested()
    imagens: ImagemProdutoDTO[];

    @IsNotEmpty()
    categoria: string;
}
