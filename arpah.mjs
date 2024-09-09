console.log(`arphah.mjs loaded ${Date()}`)

// hello
const arpah={}
arpah.hello='world'
arpah.loadedAt=Date()

// Yjs, notes and signaling:
// https://sites.google.com/mathbiol.org/cloud4bio/2024/2024-05-01-may

class YJS {
    constructor(sigServer='https://yjs-demo-signaling-server-jonasalmeida.replit.app/'){
        this.loadedAt=Date()
        this.sigStatus = async function(sigServer){
            return await (await fetch(sigServer)).text()
        }
        console.log(`new Yjs object created at\n${this.loadedAt}`)
        4
    }
}




export{
    arpah,
    YJS
}