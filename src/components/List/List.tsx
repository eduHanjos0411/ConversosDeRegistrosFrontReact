import { useRegistroData } from "../../hooks/useRegistroData"
import ListItem from "./ListItem"

export default function List() {
    const { data } = useRegistroData()

    return (
        <table>
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Informações</th>
                    <th>Valor</th>
                    <th>Local</th> 
                    <th>Comprovante</th>
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
    )
}