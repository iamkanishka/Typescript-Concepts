let names: Array<string> =[]; //string[]

let promise:Promise<string> = new Promise((resolve, reject)=>{
   setTimeout(()=>{
    resolve('resolve string Data')
   },6767)
})

promise.then((data)=>{
  data.split('')

})