import * as types from '../types'
import {get} from '../service.js'
const state={
	  banner:[],
}
let actions={
	[types.BANNER]({commit,state},payload){
	  get({apiname:'banner'}).then(
	    result=>commit('BANNER',result)
	  )
	},
}
let mutations={
	[types.BANNER]:(state,payload)=>state.banner=payload,
	
}
export default{
	namespaced:true,
	state,actions,mutations
}