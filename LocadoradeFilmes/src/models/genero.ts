import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Filme } from './filme';

@Entity({ name: 'Genero' })
export class Genero {
    @PrimaryGeneratedColumn({ type: "int" })
    idGenero: number;

    @Column({ length: 45, nullable: false })
    nome: string;

    @ManyToMany(() => Filme, filme => filme.generos)
    filmes?: Filme[];  // o '?' diz que não é obrigatório um genero ter filmes

    constructor(id: number, nome: string) {
        this.idGenero = id;
        this.nome = nome;
    }
}