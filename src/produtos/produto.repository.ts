import { Injectable } from '@nestjs/common';
import { ProdutoEntity } from './validacao/produto.entity';

@Injectable()
export class ProdutoRepository {
  private produtos: ProdutoEntity[] = [];

  async salvar(produto: ProdutoEntity) {
    this.produtos.push(produto);
  }
  
  async listar() {
    return this.produtos;
  }
}
