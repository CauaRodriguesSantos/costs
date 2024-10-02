import Input from '../form/Input'
import style from './ProjectForm.module.css'
export default function ProjectForm() {
    return (
        <form className={style.form}>
            <Input
                type='text'
                text='Nome do projeto;'
                name='nameP'
                placeholder='Insira o nome do projeto' />
            <Input
                type='number'
                text='Orçamento do projeto:'
                name='budget'
                placeholder='Insira o orçamento total' />

            <select name="categiry_id" id="">
                <option disabled selected> Selecione a categoria</option>
            </select>
        </form>
    )
}