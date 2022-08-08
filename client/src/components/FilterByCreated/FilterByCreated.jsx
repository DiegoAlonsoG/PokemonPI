import React from 'react'
import { useDispatch } from 'react-redux'
import { ALL, API, DB } from '../../constants/filter'
import { filterByCreated } from '../../redux/actions'
import style from './FilterByCreated.module.css'

export default function FilterByCreated() {
    const dispatch = useDispatch()
    function onSelectChangeCreated(e) {
        dispatch(filterByCreated(e.target.value))
    }
    return (
        <div>
            <div>
                <select className={style.selectNav} name="filtercreated" onChange={onSelectChangeCreated}>
                    <option selected="true" disabled="disabled">Origin...</option>
                    <option value={ALL}>All Origins</option>
                    <option value={API}>Api</option>
                    <option value={DB}>DataBase</option>
                </select>
            </div>
        </div>
    )
}
