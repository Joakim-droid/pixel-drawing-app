import emitter from 'tiny-emitter/instance'

export default {
    $on: (...args) => emitter.on(...args),
    $once: (...args) => emitter.on(...args),
    $off: (...args) => emitter.on(...args),
    $emit: (...args) => emitter.on(...args),
}