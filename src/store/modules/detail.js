import * as types from '../types'
import {get} from '../service.js'
const state={
	  detail:[],
}
let actions={
	[types.DETAIL]({commit,state},{apiname,_id}){
	  get({apiname,_id}).then(
	    result=>commit('DETAIL',result)
	  )
	}
}
let mutations={
	[types.DETAIL]:(state,payload)=>state.detail=payload,
	
}
export default{
	namespaced:true,
	state,actions,mutations
}