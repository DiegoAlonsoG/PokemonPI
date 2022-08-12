import React from 'react'
import { useDispatch } from 'react-redux'
import { UNSORTED, MAYOR, MENOR } from '../../constants/sort'
import { sortByAttack } from '../../redux/actions'
import style from './OrderByAttack.module.css'

export default function Order() {
    const dispatch = useDispatch()
    function onSelectChangeAttack(e) {
        dispatch(sortByAttack(e.target.value))
    }
    return (
        <div>
            <div>
                <select className={style.selectNav} name="selectattack" onChange={onSelectChangeAttack}>
                    <option value={UNSORTED} selected="true" disabled="disabled">Attack...</option>
                    <option value={MENOR}>High - Low</option>
                    <option value={MAYOR}>Low - High</option>
                </select>
            </div>
        </div>
    )
}
