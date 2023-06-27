import { useReducer } from "react";

const initialState = {
    name: "",
    email: "",
    pwd: "",
    phone: 0,
    state: "",
    city: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.value };
    }
}

let RegUser = () => {

    const [user, dispatch] = useReducer(reducer, initialState);

    return (<div>
        <h1>SIGN UP</h1>
        <form className="mb-3">
            Enter Name :
            <input name="name" type="text" className="form-control" onChange={(e) => { dispatch({ type: 'update', fld: 'name', value: e.target.value }) }}></input>
            Enter Email :
            <input type="email" name="email" className="form-control" onChange={(e)=>{dispatch({type:'update',fld:'email', value:e.target.value})}}></input>
            Enter Password :
            <input type="password" name="pwd" className="form-control" onChange={(e)=>{dispatch({type:'update',fld:'pwd',value:e.target.value})}}></input>
            Enter Phone Number :
            <input type="number" name="phone" className="form-control" onChange={(e)=>{dispatch({type:'update', fld:'phone', value:e.target.value})}}></input>
            Enter State :
            <select name="state" className="form-control" onChange={(e)=>{dispatch({type:'update', fld:'state', value:e.target.value})}}>
                <option name="state" value="Maharastra">Maharastra</option>
                <option name="state" value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
            <select name="city" className="form-control" onChange={(e)=>{dispatch({type:'update',fld:'city',value:e.target.value})}}></select>
        


            <p className="form-control">{JSON.stringify(user)}</p>
            <datalist>
                
            </datalist>
        </form>
    </div>)
}

export default RegUser;