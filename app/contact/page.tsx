import type { Metadata } from 'next'
import ContactPage from './ContactPage'

export const metadata: Metadata = {
  title: 'Contact — Start a Partnership',
  description:
    'Reach Adam Belda and Renz Belda directly. No sales teams. No account managers. Start a real conversation about building your business systems.',
}

export default function Page() {
  return <ContactPage />
}
