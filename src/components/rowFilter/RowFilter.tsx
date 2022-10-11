import { useCharacters } from "../../hooks/useCharacters";

interface RowFilterProps {
  handleChange: (select: any) => void
  valueState: number
}

const RowFilter = ({ handleChange, valueState }: RowFilterProps): JSX.Element =>{
  const { arrRowFilter} = useCharacters();
  
  return(
    <>
      <select name='gender' value={valueState} onChange={handleChange} >
        {arrRowFilter.map((page:any) =>{
          return(
            <option key={page.page} value={page.page} >{page.page}</option>
          )
        })}
      </select>
    </>
  )
}
export default RowFilter