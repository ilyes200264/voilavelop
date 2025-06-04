"use client"

import { Metadata } from "next"
import { H1, H2, P, PoppinsText } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { fr, enUS } from "date-fns/locale"
import { useI18n } from "@/lib/i18n"

export const generateMetadata = (): Metadata => {
  // Note: This is client component but we can still use static metadata
  // If we need dynamic metadata based on language, we need to use a Server Component
  return {
    title: "Réserver - Voilà Vélo",
    description: "Réservez un forfait vélo smoothie pour votre prochain événement",
  }
}

export default function BookingPage() {
  const { t, language } = useI18n();
  // Choose locale based on current language
  const dateLocale = language === 'fr' ? fr : enUS;
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16">
      {/* Hero Section */}
      <div className="bg-light-gray py-8 sm:py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <H1 className="mb-3 sm:mb-4" dangerouslySetInnerHTML={{ __html: t('hero.title') }}></H1>
            <P className="text-base sm:text-lg mb-6 sm:mb-8">
              {t('hero.description')}
            </P>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Form */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-4 sm:p-6">
              <H2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{t('form.title')}</H2>
              
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t('form.firstName.label')}</Label>
                    <Input id="firstName" placeholder={t('form.firstName.placeholder')} className="h-11 sm:h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t('form.lastName.label')}</Label>
                    <Input id="lastName" placeholder={t('form.lastName.placeholder')} className="h-11 sm:h-10" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('form.email.label')}</Label>
                    <Input id="email" type="email" placeholder={t('form.email.placeholder')} className="h-11 sm:h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('form.phone.label')}</Label>
                    <Input id="phone" placeholder={t('form.phone.placeholder')} className="h-11 sm:h-10" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">{t('form.company.label')}</Label>
                  <Input id="company" placeholder={t('form.company.placeholder')} className="h-11 sm:h-10" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">{t('form.eventDate.label')}</Label>
                    <div className="relative">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full h-11 sm:h-10 justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>{t('form.eventDate.placeholder')}</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[280px] sm:w-auto p-0">
                          <Calendar locale={dateLocale} />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="package">{t('form.package.label')}</Label>
                    <Select>
                      <SelectTrigger id="package">
                        <SelectValue placeholder={t('form.package.placeholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petite-koki">{t('form.package.options.petiteKoki')}</SelectItem>
                        <SelectItem value="pop-solo">{t('form.package.options.popSolo')}</SelectItem>
                        <SelectItem value="double-fun">{t('form.package.options.doubleFun')}</SelectItem>
                        <SelectItem value="ready-set-blend">{t('form.package.options.readySetBlend')}</SelectItem>
                        <SelectItem value="defi-parent-enfant">{t('form.package.options.parentChildChallenge')}</SelectItem>
                        <SelectItem value="smoothie-parade">{t('form.package.options.smoothieParade')}</SelectItem>
                        <SelectItem value="signature">{t('form.package.options.signature')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guests">{t('form.guests.label')}</Label>
                    <Select>
                      <SelectTrigger id="guests">
                        <SelectValue placeholder={t('form.guests.placeholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-than-50">{t('form.guests.options.lessThan50')}</SelectItem>
                        <SelectItem value="50-100">{t('form.guests.options.50-100')}</SelectItem>
                        <SelectItem value="100-200">{t('form.guests.options.100-200')}</SelectItem>
                        <SelectItem value="200-500">{t('form.guests.options.200-500')}</SelectItem>
                        <SelectItem value="more-than-500">{t('form.guests.options.moreThan500')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="eventType">{t('form.eventType.label')}</Label>
                    <Select>
                      <SelectTrigger id="eventType">
                        <SelectValue placeholder={t('form.eventType.placeholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">{t('form.eventType.options.corporate')}</SelectItem>
                        <SelectItem value="private">{t('form.eventType.options.private')}</SelectItem>
                        <SelectItem value="school">{t('form.eventType.options.school')}</SelectItem>
                        <SelectItem value="festival">{t('form.eventType.options.festival')}</SelectItem>
                        <SelectItem value="conference">{t('form.eventType.options.conference')}</SelectItem>
                        <SelectItem value="other">{t('form.eventType.options.other')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{t('form.message.label')}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('form.message.placeholder')} 
                    rows={4}
                    className="min-h-[100px]" 
                  />
                </div>
                
                <Button type="submit" className="w-full md:w-auto py-3 md:py-2 text-base md:text-sm bg-primary-red hover:bg-primary-red/90">
                  {t('form.submitButton')}
                </Button>
              </form>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-1 flex flex-col gap-4 sm:gap-6">
              <Card>
                <CardHeader className="bg-primary-red text-white rounded-t-lg p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl">{t('sidebar.needHelp.title')}</CardTitle>
                  <CardDescription className="text-white/80 text-sm sm:text-base">
                    {t('sidebar.needHelp.description')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                  <div className="space-y-4">
                    <div>
                      <PoppinsText className="font-semibold block mb-1">{t('sidebar.contact.email.label')}</PoppinsText>
                      <P className="text-sm">{t('sidebar.contact.email.value')}</P>
                    </div>
                    <div>
                      <PoppinsText className="font-semibold block mb-1">{t('sidebar.contact.phone.label')}</PoppinsText>
                      <P className="text-sm">{t('sidebar.contact.phone.value')}</P>
                    </div>
                    <div>
                      <PoppinsText className="font-semibold block mb-1">{t('sidebar.contact.hours.label')}</PoppinsText>
                      <P className="text-sm">{t('sidebar.contact.hours.value')}</P>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 sm:pt-6 p-4 sm:p-6 flex flex-col items-start">
                  <PoppinsText className="font-semibold mb-2">{t('sidebar.packageHelp.title')}</PoppinsText>
                  <P className="text-sm mb-4">{t('sidebar.packageHelp.description')}</P>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/forfaits">{t('sidebar.packageHelp.button')}</a>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-light-gray border-none">
                <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <div>
                      <PoppinsText className="font-semibold">{t('sidebar.features.team.title')}</PoppinsText>
                      <P className="text-sm">{t('sidebar.features.team.description')}</P>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary-yellow rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    </div>
                    <div>
                      <PoppinsText className="font-semibold">{t('sidebar.features.experience.title')}</PoppinsText>
                      <P className="text-sm">{t('sidebar.features.experience.description')}</P>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}