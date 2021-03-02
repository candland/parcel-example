import { Application } from 'stimulus'
import PricingController from './controllers/pricing'

const application = Application.start()
application.register('pricing', PricingController)
