export interface Mensalidade {
    
    id: number,
    nome: string,
    login: string,
    cpf: string,
    data_geracao: string,
    dia_vencimento: number,
    valor_mensal: number
}