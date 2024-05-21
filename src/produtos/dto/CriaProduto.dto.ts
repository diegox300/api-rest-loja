import {
  IsArray,
  IsNotEmpty,
  IsPositive,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaProdutoDTO } from './CaracteristicaProduto.dto';
import { ImagemProdutoDTO } from './ImagemProduto.dto';
import { Type } from 'class-transformer';

export class CriaProdutoDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  nome: string;

  valor: number;

  @IsPositive({ message: 'Quantidade tem que ser possitiva.' })
  quantidade: number;

  @IsNotEmpty()
  @MaxLength(1000)
  descricao: string;

  @Type(() => CaracteristicaProdutoDTO)
  @IsArray()
  @ValidateNested()
  caracteristicas: CaracteristicaProdutoDTO;

  @Type(() => ImagemProdutoDTO)
  @IsArray()
  @ValidateNested()
  imagens: ImagemProdutoDTO;

  @IsNotEmpty()
  categoria: string;
}
