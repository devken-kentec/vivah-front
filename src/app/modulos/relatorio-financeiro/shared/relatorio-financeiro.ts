export interface RelatorioFinanceiro {
        id: number,
        nome: string,
        cpf: string,
        login: string,
        id_ficha_financeira: number,
        dia_vencimento: number,
        valor_mensal: string,
        status_ff: string,
        id_parcela: number,
        data_pagamento: Date,
        valor: string,
        juros: string,
        descontos: string,
        tipo_pagamento: string,
        status_parc: string,
        total: string,
        obs: string
}