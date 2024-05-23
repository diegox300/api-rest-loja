import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from 'src/produtos/dto/CriaProduto.dto';
import { ProdutoEntity } from './validacao/produto.entity';
import { ListaProdutoDTO } from './dto/ListaProduto.dto';
import { v4 as uuid } from 'uuid';
import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
    const produtoEntity = new ProdutoEntity();
    produtoEntity.caracteristicas = dadosDoProduto.caracteristicas;
    produtoEntity.categoria = dadosDoProduto.categoria;
    produtoEntity.descricao = dadosDoProduto.descricao;
    produtoEntity.imagens = dadosDoProduto.imagens;
    produtoEntity.nome = dadosDoProduto.nome;
    produtoEntity.quantidade = dadosDoProduto.quantidade;
    produtoEntity.valor = dadosDoProduto.valor;
    produtoEntity.id = uuid();
    this.produtoRepository.salvar(produtoEntity);
    return {
      produto: new ListaProdutoDTO(produtoEntity.id, produtoEntity.nome, produtoEntity.caracteristicas),
      message: 'Produto Criado com Sucesso.',
    };
  }
  @Get()
  async listProdutos() {
    const produtosSalvos = await this.produtoRepository.listar();
    const produtosLista = produtosSalvos.map(
      (produtos) => new ListaProdutoDTO(produtos.id, produtos.nome, produtos.caracteristicas),
    );
    return produtosLista;
  }

  @Put('/:id')
  async atualizaProduto(@Param('id') id: string,@Body() novosDados: AtualizaProdutoDTO){
    const produtoAtualizado = await this.produtoRepository.atualiza(id, novosDados);

    return {
      produto: produtoAtualizado,
      messagem: 'Produto Atualizado com Sucesso',
    }
  };

  @Delete('/:id')
  async removeProduto(@Param('id') id: string){
    const produtoRemovido = await this.produtoRepository.remove(id);   
    return {
      produto: produtoRemovido,
      messagem: 'Produto removido com sucesso.' 
    }
  };

}
