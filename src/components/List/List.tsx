import ListItem from "./ListItem"
import "./List.css"

export default function List() {
    // const { data, isLoading, isError, error } = useRegistroData()

    // if (isLoading) return <div>Carregando...</div>
    // if (isError) return <div>Erro: {error?.message}</div>
    const data = [
        { dDC: '01/01/2024', info: 'Compra de materiais', vDC: 125.00, lDC: 'Loja A', comp: false },
        { dDC: '05/01/2024', info: 'Serviço de limpeza', vDC: 150.00, lDC: 'Empresa B', comp: true},
        { dDC: '10/01/2024', info: 'Aluguel do escritório', vDC: 1000.00, lDC: 'Imobiliária C', comp: false },
        { dDC: '15/01/2024', info: 'Compra de equipamentos', vDC: 300.00, lDC: 'Loja D', comp: true},
        { dDC: '20/01/2024', info: 'Serviço de consultoria', vDC: 500.00, lDC: 'Consultor E', comp: false },

    ]

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Informações</th>
                    <th>Valor</th>
                    <th>Local</th> 
                    <th>Comprovante</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {data?.map(registrosData => 
                    <ListItem 
                        dDC={registrosData.dDC}
                        info={registrosData.info}
                        vDC={registrosData.vDC}
                        lDC={registrosData.lDC}
                        comp={registrosData.comp}
                    />)}
            </tbody>
        </table>
        {data.length != 0 && <button className="gerar">Gerar Arquivo</button>}
        </>
    )
}