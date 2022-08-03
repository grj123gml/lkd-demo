//定义自定义指令
export const imgError={
    inserted(el, binding) {
      el.onerror = function () {
        el.src = binding.value
      }
    }
  }