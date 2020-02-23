import React from 'react';
import commonstyles from './../styles/commonstyles';


const translateProps = (props) => {
    let _styles = {...commonstyles.default}
    if(props.disable){
        _styles = {..._styles, ...commonstyles.disable};
    }
    const newProps = {...props,styles:_styles }
    return newProps;
}


export default (Abc) => {
    return function Xyz(args) {
        return Abc(translateProps(args));
    }
}
