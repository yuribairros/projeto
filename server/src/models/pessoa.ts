import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome_pessoa: string

    @Column()
    email: string

    @Column({ type: 'date' })
    data_nascimento: string
}