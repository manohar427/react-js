import axios from 'axios';

//let CancelToken ;
let cancelSource ;

export const loading = () =>{
    console.log('LOADING ...........');
    return { type: "LOADING"}
};

export const onAgeUpAsyc = (val,data) =>{
    console.log('called now...............');
    return { type: "AGE_UP", value: val,data:data }
};

export const onAgeUp = (val,action) =>{
  //  CancelToken = axios.CancelToken;
    cancelSource = axios.CancelToken.source();
console.log("...........onAgeUp..........");
    return dispatch =>{
        dispatch(loading());
        axios.get('http://localhost:8080/test', {
            cancelToken: cancelSource.token
          }).
        then(data=>{
            console.log('ACTION completed successfully:'+JSON.stringify(data.data.name));

          //  setTimeout(()=>{
             //   dispatch(onAgeUpAsyc(1,data.data[20].login))
             dispatch(onAgeUpAsyc(1,data.data.name))
            //},50000);

        }).catch(err=>{
            console.log('Error................');
            dispatch(onAgeUpAsyc(1,'CANCELLED from Some where '))
        })        
    }
};

export const onAgeDown = (val) =>{
    return { type: "AGE_DOWN", value: val }
};

export const calcel=(n)=>{
   // cancelSource.cancel();
  
/*   const CancelToken = axios.CancelToken;
   const source = CancelToken.source();
   return dispatch =>{
    
axios.get('http://localhost:8080/test', {
  cancelToken: source.token
}).
then(d=>{
    console.log("SUCCESS DISPATCHED");
    dispatch(onAgeUpAsyc(1,'SUCCESS'))
})
.catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
    console.log("CANCEL dispatchin........");
    dispatch(onAgeUpAsyc(1,'CANCEL'));
  } else {
    // handle error
    console.log("ERROR dispatchin........");
    dispatch(onAgeUpAsyc(1,'ERROR'));
  }
});
  //  source.cancel('cancelled');
   }
*/
//cancelSource.cancel("nnnnnnnnnnnnnnnnn");
console.log("CANCELING ....................");
alert('OK');
return dispatch =>{
cancelSource.cancel("nnnnnnnnnnnnnnnnn");
 //   dispatch(onAgeUpAsyc(1,'CANCELLED.....'))
}
}