import { IsEmail, IsInt, IsNotEmpty, Min, MinLength, Max } from "class-validator";
import { EmailEhUnico } from "../validacao/email-unico.validator";
import { UsuarioIdEhUnico } from "../validacao/user-id.validator";

export class CriaUsuarioDTO{

    
    @IsNotEmpty({message: 'O ID não pode ser vazio'})
    @IsInt({message: 'Somente numeros inteiros sao aceitos.'})
    @Min(1, {message: 'Numero menor disponivel 1'})
    @Max(1000000, {message: 'Numero maior disponivel 1000000'})
    @UsuarioIdEhUnico({message: 'Já Existe um produto com este ID'})
    usuarioId: number;

    @IsNotEmpty({message: 'O nome não pode ser vazio'})
    nome: string;
    
    @EmailEhUnico({message: 'Já Existe um usuario com este e-mail'})
    @IsEmail(undefined,{message: 'O e-mail, informado, é invalido.'})
    email: string;

    @MinLength(6,{message: 'A senha precisa ter pelo menos 6 caracteres.'})
    senha: string;
}