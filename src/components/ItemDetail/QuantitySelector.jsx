
export const QuantitySelector = ({cantidad, stock, setCantidad}) => {

    const handleSumar = () => {
        cantidad < stock && setCantidad ( cantidad + 1 )
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad ( cantidad - 1 )
    }

    return (
    <div>
        <button className="btn-sumaresta" onClick={handleSumar}>+</button>
        <span>{cantidad}</span>
        <button className="btn-sumaresta" onClick={handleRestar}>-</button>
    </div>
    )

}

