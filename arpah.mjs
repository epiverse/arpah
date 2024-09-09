console.log(`arphah.mjs loaded ${Date()}`)

// hello
const arpah={}
arpah.hello='world'
arpah.loadedAt=Date()

// Yjs, notes and signaling:
// https://sites.google.com/mathbiol.org/cloud4bio/2024/2024-05-01-may

class YJS {
    constructor(sigServerURL){
        this.loadedAt=Date()
        this.sigStatus = async function(sigServerURL){
            if(!sigServerURL){sigServerURL='https://yjs-demo-signaling-server-jonasalmeida.replit.app/'}
            console.log('signaling server address:',sigServerURL)
            let res = await (await fetch(sigServerURL)).text()
            console.log('response:',res) // in case there are other responses
            if(res=='okay'){
                return true
            }else{
                return false
            }
        }
        console.log(`new Yjs object created at\n${this.loadedAt}`)
        4
    }
}




export{
    arpah,
    YJS
}