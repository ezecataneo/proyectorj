
export const ColorSelector = ({setColor}) => {

    const handleSelect = (event) => {

    }


    return (
    <select onChange={handleSelect}>
        <option value={setColor}>negro</option>
        <option value={setColor}>blanco</option>
    </select>
    )
}