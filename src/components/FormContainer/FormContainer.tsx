import './FormContainer.css'

export default function FormContainer() {
    return (
        <div className='container'>
            <h2>INFORMAÇÕES</h2>
            <div className='input-container'>
                <label htmlFor="data">
                    <input placeholder="Data" name="data" id="data" type="date"/>
                </label>

                <label htmlFor="informacoes">
                <input placeholder='Informações de compra' type="text" name="informacoes" id="informacoes" />            
                </label>

                <label htmlFor="valor">
                    <input placeholder='Valor' type="number" name="valor" id="valor" />
                </label>

                <label htmlFor="local">
                <input placeholder='Local da compra' type="text" name="local" id="local" />            
                </label>

                <label htmlFor='comprovante'>
                    <select id='comprovante' name='selectComprovante'>
                        <option disabled selected>Comprovante</option>
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>
                </label>
            </div>

            <button type="submit">Adicionar a lista</button>
        </div>
    )
}