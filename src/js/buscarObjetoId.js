import api from '../objectosJson/object.json'

    export const buscarObjetoId = (dataValue)=>{
        return api.find( item => item.id === dataValue)
    }