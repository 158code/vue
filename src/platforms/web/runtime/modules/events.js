// skip type checking this file because we need to attach private properties
// to elements

import { updateListeners } from 'core/vdom/helpers'

function updateDOMListeners (oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  const on = vnode.data.on || {}
  const oldOn = oldVnode.data.on || {}
  const add = vnode.elm._v_add || (vnode.elm._v_add = (event, handler, capture) => {
    vnode.elm.addEventListener(event, handler, capture)
  })
  const remove = vnode.elm._v_remove || (vnode.elm._v_remove = (event, handler) => {
    vnode.elm.removeEventListener(event, handler)
  })
  updateListeners(on, oldOn, add, remove, vnode.context)
}

export default {
  create: updateDOMListeners,
  update: updateDOMListeners
}
