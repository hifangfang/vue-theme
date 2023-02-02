import Vue from "vue"; // 引入 Vue 是因为要用到 Vue.extend() 这个方法
import zsNotifyComponent from './zs-notify-box.vue'

let notifyVue = Vue.extend(zsNotifyComponent)

let zsNotify = options =>{
    let node = new notifyVue ({
        propsData:{
            title:options.title ,
            type:options.type || '',
            content: options.content,
            position:options.position,    
        },
        mounted() {
            // this.remove()
        }
    })
    // 方向
    node.$mount()
    node.$el.style.position='fixed'
    document.body.appendChild(node.$el)

}
['success','error','warn'].forEach(type =>{
    zsNotify[type] = options => {
        let vnode = new notifyVue({
            propsData:{
                title:options.title ,
                type:type,
                content:options.content,
                position:options.position,    
            },
        }) 
        vnode.$mount()
        vnode.$el.style.position='fixed'
        document.body.appendChild(vnode.$el)
    }
})
export {zsNotify }