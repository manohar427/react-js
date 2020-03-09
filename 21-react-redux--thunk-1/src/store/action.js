import axios from 'axios';

export const loading = () =>{
    console.log('LOADING ...........');
    return { type: "LOADING"}
};

export const onAgeUpAsyc = (val,data) =>{
    return { type: "AGE_UP", value: val,data:data }
};

export const onAgeUp = (val) =>{
    return dispatch =>{
        dispatch(loading());
        axios.get('https://api.github.com/users?since=135').
        then(data=>{
            console.log('ACTION:'+JSON.stringify(data.data[0]));
            dispatch(onAgeUpAsyc(1,data.data[20].login));
        })        
    }
};

export const onAgeDown = (val) =>{
    return { type: "AGE_DOWN", value: val }
};