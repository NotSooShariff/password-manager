
"use client"
import Header from '@/components/globals/header'
import HeroSection from '@/components/landing/hero'
import ContactSection from '@/components/landing/contact'
import Footer from '@/components/globals/footer'
import FeaturesSection from '@/components/landing/features'
import UsageSection from '@/components/landing/usage'
import TeamSection from '@/components/landing/team'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router'
import { auth } from '@/utils/firebase'

export default function Home() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <main>
        {/* Header - components/globals */}
        <Header/>

        {/* Page Sections - components/landing */}
        <HeroSection/>
        <FeaturesSection/>
        <UsageSection/>
        <TeamSection/>
        <ContactSection/>
        
        {/* Footer - components/globals */}
        <Footer/>
      </main>
    </>
  )
}
