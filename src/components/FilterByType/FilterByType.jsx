import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ALL } from '../../constants/filter'
import { filterByType } from '../../redux/actions'
import style from "./FilterByType.module.css"

export default function FilterByType() {
    // const types = useSelector((state) => state.types)
    // types.sort((a,b) => a.name < b.name ? -1 : +(a.name > b.name));


    const rendered = useSelector((state) => state.pokemons)
    let typesPos0 = rendered.map((k) => k.types[0])
    let typesPos1 = rendered.map((k) => k.types[1])
    let availableTypes = [...typesPos0, ...typesPos1]
    let uniqueRawTypes = [...new Set(availableTypes)]
    let uniqueTypes = uniqueRawTypes.filter((k) => k !== undefined)
    uniqueTypes.sort((a,b) => a < b ? -1 : +(a > b));

    // console.log(uniqueTypes)


    const dispatch = useDispatch()
    function onSelectChangeType(e) {
        dispatch(filterByType(e.target.value))
    }
    return (
        <div className={style.container}>
            <div>
                <select className={style.selectNav} name="filtertype" onChange={onSelectChangeType}>
                    <option selected="true" disabled="disabled">Type...</option>
                    <option value={ALL}>All Types</option>

                    {
                        uniqueTypes?.map((coso) => 
                            <option className={style.optionType} value={coso}>{coso[0].toUpperCase() + coso.slice(1)}</option>
                        )
                    }
                </select>
            </div>
        </div>
    )
}
