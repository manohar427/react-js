
export const loading = () =>{
    console.log('LOADING ...........');
    return { type: "LOADING"}
};

export const onAgeUpAsyc = (val) =>{
    return { type: "AGE_UP", value: val }
};

export const onAgeUp = (val) =>{
    return dispatch =>{
        dispatch(loading());
        setTimeout(()=>{dispatch(onAgeUpAsyc(1))},5000);
    }
};

export const onAgeDown = (val) =>{
    return { type: "AGE_DOWN", value: val }
};