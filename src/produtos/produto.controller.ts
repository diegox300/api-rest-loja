import { Body, Controller, Post, Get } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from 'src/produtos/dto/CriaProduto.dto';
import { ProdutoEntity } from './validacao/produto.entity';
import { ListaProdutoDTO } from './dto/ListaProduto.dto';
import { v4 as uuid } from 'uuid';

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
      message: 'Produto Criado com Sucesso.' };
  }
  @Get()
  async listProdutos() {
    const produtosSalvos = await this.produtoRepository.listar();
    const produtosLista = produtosSalvos.map(
      produtos => new ListaProdutoDTO(
        produtos.id,
        produtos.nome,
        produtos.caracteristicas
      )
    );
    return produtosLista;
  }
}
