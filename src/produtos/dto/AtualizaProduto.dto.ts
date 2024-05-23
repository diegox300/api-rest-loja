import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaProdutoDTO } from './CaracteristicaProduto.dto';
import { ImagemProdutoDTO } from './ImagemProduto.dto';
import { Type } from 'class-transformer';

export class AtualizaProdutoDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsOptional()
  valor: number;

  @IsPositive({ message: 'Quantidade tem que ser possitiva.' })
  @IsOptional()
  quantidade: number;

  @IsNotEmpty()
  @MaxLength(1000)
  @IsOptional()
  descricao: string;

  @IsOptional()
  @Type(() => CaracteristicaProdutoDTO)
  @IsArray()
  @ValidateNested()
  caracteristicas: CaracteristicaProdutoDTO;

  @IsOptional()
  @Type(() => ImagemProdutoDTO)
  @IsArray()
  @ValidateNested()
  imagens: ImagemProdutoDTO;

  @IsOptional()
  @IsNotEmpty()
  categoria: string;
}
