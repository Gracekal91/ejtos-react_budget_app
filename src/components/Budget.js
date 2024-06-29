
import React, {useContext, useEffect, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value);
        setNewBudget((prevBudget) => {
            if (prevBudget !== value) {
                return value;
            }
            return prevBudget;
        });
    }

    useEffect(() => {
        if (newBudget !== budget) {
            dispatch({ type: 'SET_BUDGET', payload: parseInt(newBudget) });
        }
    }, [newBudget, budget, dispatch]);




    return (
        <div className='alert alert-secondary d-flex'>
            <span>Budget: {currency}{budget}</span>
            <input style={{width: '150px', marginLeft: '.5rem'}} type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;