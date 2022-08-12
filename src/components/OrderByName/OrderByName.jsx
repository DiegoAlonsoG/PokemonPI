import React from 'react'
import { useDispatch } from 'react-redux'
import { ASCENDENTE, DESCENDENTE, UNSORTED } from '../../constants/sort'
import { sortByName } from '../../redux/actions'
import style from './OrderByName.module.css'

export default function Order() {
    const dispatch = useDispatch()
    function onSelectChangeName(e) {
        dispatch(sortByName(e.target.value))
    }
    return (
        <div>
            <div>
                <select  className={style.selectNav} name="selectname" onChange={onSelectChangeName}>
                    <option value={UNSORTED} selected="true" disabled="disabled">Name...</option>
                    <option value={ASCENDENTE}>A - Z</option>
                    <option value={DESCENDENTE}>Z - A</option>
                </select>
            </div>
        </div>
    )
}
