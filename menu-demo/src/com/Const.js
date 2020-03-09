const list = [
    {
      id:1,
      lab:'MAN',
      subList:false
    },
    {
      id:2,
      lab:'DEC',
      subList:true,
      subEle:[
        {
          id:21,
          lab:'MAN',
          subList:false
        },
        {
          id:22,
          lab:'MAN',
          subList:false
        },
      ]
    },
    {
      id:3,
      lab:'HOU'
    }
  ];

  export default {
    ConstList:list
  };