import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../context/AppContext";

const selectStyle = {
    border: 'none',
    backgroundColor: 'green',
    color: 'white'
};

const optionStyle = {
    fontSize: '1.5rem !important',
    backgroundColor: 'green',
    width: '300px'
};

const Currency = () =>{


    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency)


    const handleUpdate = (event) =>{
        setNewCurrency(event.target.value)

    }

    useEffect(() =>{
        if (newCurrency !== currency) {
            dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
        }
    }, [newCurrency])

    return(
            <div
                style={{
                display: 'flex',
                backgroundColor: 'green',
                borderRadius: '.5rem',
                color: 'white',
                    alignItems: 'center',
                    padding: '.5rem'
            }}>
                <p style={{fontSize: '1.5rem', margin: 0}}>Currency</p>

            <select  id="inputGroupSelect01" style={selectStyle} onChange={handleUpdate}>
                <option value="$" name="dollar" style={{
                    background: 'green !important'
                }}> (Dollar $)</option>
                <option value="&pound;" name="pound" style={optionStyle}> (Pound &pound;)</option>
                <option value="&euro;" name="euro" style={optionStyle}> (Euro &euro;) </option>
                <option value="&#8377;" name="ruppee" style={optionStyle}>(Ruppee &#8377;) </option>
            </select>

        </div>
    )
}

export default Currency;