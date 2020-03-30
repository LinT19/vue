import * as types from '../types'
import {get} from '../service.js'
const state={
	  home:[],
}
let actions={
	[types.HOME]({commit,state},payload){
	  get({apiname:'home',params:{_limit:10,_page:1}}).then(
	    result=>commit('HOME',result)
	  )
	},
}
let mutations={
	[types.HOME]:(state,payload)=>state.home=payload,
	
}
export default{
	namespaced:true,
	state,actions,mutations
}