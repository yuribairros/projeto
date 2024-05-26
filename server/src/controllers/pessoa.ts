import { AppDataSource } from "../data-source"
import {Request, Response} from "express"
import {Pessoa} from "../models/pessoa"

export const getPessoas = async (req: Request, res: Response) => {
    try {
        const pessoas:Pessoa[] = await AppDataSource.getRepository(Pessoa).find()
        res.status(200).json(pessoas)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Erro ao buscar pessoas' })
    }
}

export const getPessoa = async (req: Request, res: Response) => {
    const id: number = +req.params.id
    const results: Pessoa = await AppDataSource.getRepository(Pessoa).findOneBy({id: id})
    if(results == null)
        return res.status(500).json({ message: 'Pessoa não encontrada' });

    return res.status(200).send(results)
}

export const addPessoa = async (req: Request, res: Response) => {
    const pessoa: Pessoa[] = AppDataSource.getRepository(Pessoa).create(req.body)
    const results: Pessoa[] = await AppDataSource.getRepository(Pessoa).save(pessoa)
    return res.send(results)
}

export const updatePessoa = async (req: Request, res: Response) => {
    const id: number = +req.params.id
    const pessoa: Pessoa = await AppDataSource.
        getRepository(Pessoa).
        findOneBy({ id: id })

    AppDataSource.getRepository(Pessoa).merge(pessoa, req.body)
    const results: Pessoa = await AppDataSource.getRepository(Pessoa).save(pessoa)
    return res.send(results)
}

export const deletePessoa = async (req: Request, res: Response) => {
    const id: number = +req.params.id
    const results = await AppDataSource.getRepository(Pessoa).delete(id)
    return res.send(results)
}