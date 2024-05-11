import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      usuario => usuario.email == email
    );
    return possivelUsuario !== undefined;
  }
  async existeIdUser(usuarioId: number) {
    const possivelUsuario = this.usuarios.find(
      usuario => usuario.usuarioId === usuarioId
    );
    return possivelUsuario !== undefined;
  }

}
