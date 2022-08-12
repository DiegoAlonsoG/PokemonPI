import React, { useState, useEffect } from 'react';
import { getAllPokemons, postPokemon } from '../../redux/actions/index';
import { useSelector, useDispatch} from 'react-redux';
import style from './FormCreate.module.css';
import { getAllTypes} from '../../redux/actions'

export default function FormCreate(){
    const pkm = useSelector((state)=> state.pokemons);
	function validate (input){
		// console.log(pkm)
		let errors = {};

		let coincidenciaName = pkm.map((k) => k.name).filter((q) => q === input.name)
		// console.log(mapeoPkm)
		let coincidenciaImage = pkm.map((k) => k.image).filter((q) => q === input.image)

		const validatorURL = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

		if (input.types.length === 0) {
			errors.types=`Your new Pokemon needs at least one type!`
		}

		if (!input.name) {
			errors.name=`Your new Pokemon must have a name!`
		}
		if (input.name == coincidenciaName) {
			errors.name=`There's another Pokemon with the same name!`
		}

		if (!validatorURL.test(input.image)) {
			errors.image=`Your new Pokemon doesn't have an image yet`
		}
		if (input.image == coincidenciaImage) {
			errors.image=`There's another Pokemon with the same image!`
		}

		if (!input.height) {
			errors.height=`Your new Pokemon doesn't have a height yet`
		}
		if (input.height < 1) {
			errors.height=`Your Pokemon's height must be at least 1 inch!`
		}

		if (!input.weight) {
			errors.weight=`Your new Pokemon doesn't have a weight yet`
		}
		if (input.weight < 1) {
			errors.weight=`Your Pokemon must weight at least 1 pound!`
		}

		if (!input.life) {
			errors.life=`Your new Pokemon doesn't have a life amount yet`
		}
		if (input.life < 1) {
			errors.life=`Your Pokemon can't hatch being fainted!`
		}

		if (!input.attack) {
			errors.attack=`Your new Pokemon doesn't have an attack level yet`
		}
		if (input.attack < 1) {
			errors.attack=`Your Pokemon must have a valid attack`
		}

		if (!input.defense) {
			errors.defense=`Your new Pokemon doesn't have a defense level yet`
		}
		if (input.defense < 1) {
			errors.defense=`Your Pokemon must have a valid defense`
		}

		if (!input.speed) {
			errors.speed=`Your new Pokemon doesn't have a speed level yet`
		}
		if (input.speed < 1) {
			errors.speed=`Your Pokemon must have a valid speed`
		}

		return errors;
	}
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTypes())
		dispatch(getAllPokemons())
    }, [])
    const types = useSelector((state)=> state.types);
    types.sort((a,b) => a.name < b.name ? -1 : +(a.name > b.name));
	const [errors, setErrors] = useState({
        name: `Your new Pokemon must have a name!`,
		image: `Your new Pokemon doesn't have an image yet`,
		height: `Your Pokemon's height must be at least 1 inch!`,
		weight: `Your Pokemon must weight at least 1 pound!`,
		life: `Your Pokemon can't hatch being fainted!`,
		attack: `Your Pokemon must have a valid attack`,
		defense: `Your Pokemon must have a valid defense`,
		speed: `Your Pokemon must have a valid speed`,
		types: `Your new Pokemon needs at least one type!`,
    });
	const [input, setInput] = useState({
		name: null,
		image: null,
		height: null,
		weight: null,
		life: null,
		attack: null,
		defense: null,
		speed: null,
		types: []
	});
	function handleChange(e) {
		setInput((input)=>{
			return {
			...input,
			[e.target.name]: e.target.value
			}
		});
        setErrors(validate({...input, [e.target.name]: e.target.value}));
	};
	function handleSelect(e){
        setErrors(validate({...input,types: [...input.types, e.target.value]}));
        if (e.target.value === "nada") {
            return setInput({
                ...input
            })
        }
		if (input.types.includes(e.target.value)) {
			return setInput({
                ...input
            })
		}
		if (input.types.length < 2) {
            return setInput({
                ...input,
                types: [...input.types, e.target.value]
            });
        }
        alert('Your Pokemon cannot have more than 2 types!')
    }
	function loadAgain(){
		window.location.reload()
	}
	function handleSubmit(e){
		e.preventDefault();
		postPokemon(input);
		alert('New Pokemon hatched! Return Home to see it.');
		setInput({
	name: null,
	image: null,
	height: null,
    weight: null,
    life: null,
    attack: null,
    defense: null,
    speed: null,
			types: []
		})	
    }	
	function handleDelete(elem){
		setErrors(validate({...input, types: input.types?.filter(type => type !== elem)}));
		setInput({
			...input,
			types: input.types?.filter(type => type !== elem)
		})
	}
	return (
		<div className={style.container}>

		<form className={style.pkmForm} onSubmit={(e)=>handleSubmit(e)}>

			<h1 className={style.title}>New Pokemon Creation</h1>

				<div className={style.inputDiv}>
					<label className={style.label}>Name:</label>
					<input className={style.input} type='text' value= {input.name} name='name' onChange={handleChange} />
					{errors.name && <p className ={style.errors}>{errors.name}</p>}
				</div>

			<div className={style.inputDiv}>
				<label className={style.label}>Image:</label>
				<input className={style.input} type='text' value= {input.img} name='image' placeholder='Enter Image URL' onChange={handleChange}/>
				{errors.image && <p className ={style.errors}>{errors.image}</p>}
			</div>
	
				<div className={style.inputDiv}>	
					<label className={style.label}>Select Types:</label>
					<select className={style.input} onChange={handleSelect}>
                        <option selected={true} disabled="disabled"> ... </option>
						{
                        types?.map((coso) => 	
                            <option className={style.optionType} value={coso.name}>{coso.name[0].toUpperCase() + coso.name.slice(1)}</option>		
                        )			
                        }
					</select>
					{errors.types && <p className ={style.errors}>{errors.types}</p>}
				</div>

				<div className={style.inputDiv}>

					<label className={style.label}>Life:</label>

					<input className={style.input} type='number' min='1' value= {input.life} name='life' onChange={handleChange}/>

                    {errors.life && <p className ={style.errors}>{errors.life}</p>}

                </div>

				<div className={style.inputDiv}>
					<label className={style.label}>Attack:</label>
					<input className={style.input} type='number' min='1' value= {input.attack} name='attack' onChange={handleChange}/>
                    {errors.attack && <p className ={style.errors}>{errors.attack}</p>}
				</div>

				<div className={style.inputDiv}>
					<label className={style.label}>Defense:</label>
					<input className={style.input} type='number' min='1' value= {input.defense} name='defense' onChange={handleChange}/>
                    {errors.defense && <p className ={style.errors}>{errors.defense}</p>}
                </div>

				<div className={style.inputDiv}>
					<label className={style.label}>Speed:</label>
					<input className={style.input} type='number' min='1' value= {input.speed} name='speed' onChange={handleChange}/>
                    {errors.speed && <p className ={style.errors}>{errors.speed}</p>}
				</div>

				<div className={style.inputDiv}>
					<label className={style.label}>Height:</label>
					<div className={style.hw}>
					<input className={style.input} type='number' min='1' value= {input.height} name='height' onChange={handleChange}/> 
					<label> in / {(Number(input.height)*2.54).toFixed(2)} cm </label>
					</div>
					{errors.height && <p className ={style.errors}>{errors.height}</p>}
                </div>

                <div className={style.inputDiv}>
					<label className={style.label}>Weight:</label>
					<div className={style.hw}>
					<input className={style.input} type='number' min='1' value= {input.weight} name='weight' onChange={handleChange} />
					<label> lb / {(Number(input.weight)*0.454).toFixed(3)} kg </label>
					</div>
                    {errors.weight && <p className ={style.errors}>{errors.weight}</p>}
				</div>

			<button className={style.button} type='submit' disabled={Object.keys(errors).length? true : false} onClick={() => loadAgain()}>
				Hatch your Pokemon
			</button>
		</form>

        <div className={style.theOthers}>
				<button className={style.reset} onClick={()=>loadAgain()}>Reset</button>
                <label className={style.labelSel}>Types:</label>
			{
            input.types.length ?
            input.types.map((hey) => {
				if (hey === "bug") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.bug}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
						)                
				}
				if (hey === "dark") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.dark}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "dragon") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.dragon}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "electric") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.electric}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "fairy") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.fairy}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "fighting") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.fighting}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "fire") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.fire}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "flying") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.flying}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "ghost") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.ghost}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "grass") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.grass}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "ground") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.ground}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "ice") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.ice}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>					)                
				}
				if (hey === "normal") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.normal}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "poison") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.poison}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "psychic") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.psychic}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "rock") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.rock}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "shadow") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.shadow}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "steel") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.steel}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "unknown") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.unknown}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)                
				}
				if (hey === "water") {
					return (
						<div className={style.selectedTypes}>
						<h4 className={style.water}>{hey}</h4>
						<button className={style.eraseButton} onClick={()=>handleDelete(hey)}>x</button>
						</div>
					)
				}
			})
            :
            <p className={style.placeholder}>No types selected yet</p>
			}
		</div>
		
		</div>
	)
}