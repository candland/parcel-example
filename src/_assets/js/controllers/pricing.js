import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [ "prices", "times", "monthlyButton", "yearlyButton" ]
  static values = {
    monthly: Array,
    yearly: Array,
  }

  connect () {
  }

  onMonthly (e) {
    e.preventDefault()

    this.active(this.monthlyButtonTarget)
    this.inactive(this.yearlyButtonTarget)

    this.pricesTargets.forEach((t, idx) => {
      t.innerHTML = `$${this.monthlyValue[idx]}`
    })

    this.timesTargets.forEach((t) => {
      t.innerHTML = "/mo"
    })
  }

  onYearly (e) {
    e.preventDefault()

    this.active(this.yearlyButtonTarget)
    this.inactive(this.monthlyButtonTarget)

    this.pricesTargets.forEach((t, idx) => {
      t.innerHTML = `$${this.yearlyValue[idx]}`
    })

    this.timesTargets.forEach((t) => {
      t.innerHTML = "/yr"
    })
  }

  active (el) {
    el.classList.add("bg-white")
    el.classList.add("border-gray-200")
    el.classList.add("shadow-sm")
    el.classList.remove("border")
    el.classList.remove("border-transparent")
  }
  
  inactive(el) {
    el.classList.remove("bg-white")
    el.classList.remove("border-gray-200")
    el.classList.remove("shadow-sm")
    el.classList.add("border")
    el.classList.add("border-transparent")
  }
}
