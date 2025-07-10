"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPin, Phone, Mail, Send, CheckCircle2, CheckCircle, Clock, Sparkles, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

// Contact reasons for quick selection
const contactReasons = [
  "Événement corporatif",
  "École/Organisation", 
  "Ouverture/Activation",
  "Conférence/Exposition",
  "Anniversaire/Mariage",
  "Festival/Communauté",
  "Autre"
]

export default function ContactPage() {
  const { t, language } = useI18n()
  const { toast } = useToast()

  // Form state - FIXED: Store date as string to avoid timezone issues
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    eventDate: "", // FIXED: Store as string instead of Date object
    guests: "",
    message: "",
    newsletter: false,
    reason: "" // Add reason field for quick selection
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false) // NEW: Success state

  // Handle input changes with proper typing
  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleReasonSelect = (reason: string) => {
    setFormData(prev => ({ ...prev, reason, eventType: reason }))
  }

  // Handle form submission with email API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Information manquante",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      })
      return
    }

    // Minimum message length validation
    if (formData.message.length < 20) {
      toast({
        title: "Message trop court",
        description: "Veuillez écrire un message d'au moins 20 caractères.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Send the form data to our API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          eventType: formData.eventType,
          eventDate: formData.eventDate,
          guests: formData.guests,
          message: formData.message,
          reason: formData.reason
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // NEW: Enhanced success feedback
      setIsSuccess(true)
      
      // Enhanced success toast
      toast({
        title: "🎉 Message envoyé!",
        description: "Nous vous répondrons dans les 24 heures avec un devis personnalisé.",
        duration: 5000,
      })

      // Reset form after delay
      setTimeout(() => {
        setFormData({ 
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          eventType: "",
          eventDate: "",
          guests: "",
          message: "",
          newsletter: false,
          reason: ""
        })
        setIsSuccess(false)
      }, 3000)
      
    } catch (error) {
      console.error('Error sending message:', error)
      
      toast({
        title: "Erreur d'envoi",
        description: error instanceof Error ? error.message : "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-accent-green font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Contact
            </motion.p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-charcoal mb-6">
              Prêt à ajouter du{" "}
              <span className="text-accent-green">plaisir à pédales</span>{" "}
              à votre événement?
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Parlons de votre vision et créons ensemble une expérience inoubliable avec nos vélos à smoothies!
            </p>

            {/* Availability Badge */}
            <Badge className="bg-green-500/10 text-green-600 border-green-500/20 px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Disponible pour nouveaux événements
            </Badge>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Contact Information - Left Side */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Quick Contact */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent-green" />
                  Contact rapide
                </h3>
                <div className="space-y-3">
                  {/* Phone */}
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent-green/50 transition-all group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent-green" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Téléphone</p>
                      <div>
                        <p className="font-medium">+1 (647) 917-5857</p>
                        <p className="font-medium">+1 (514) 515-6811</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-lg bg-accent-green/5 border border-accent-green/30 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent-green" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">voilavelo25@gmail.com</p>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent-green/50 transition-all group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent-green" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Zones de service</p>
                      <p className="font-medium">Montréal, Laval, Québec, Ottawa</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-4 bg-accent-green/5 border border-accent-green/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent-green" />
                  <div>
                    <p className="font-medium">Réponse rapide garantie</p>
                    <p className="text-sm text-gray-600">
                      Nous répondons dans les 24h avec un devis personnalisé
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 relative overflow-hidden">
                {/* NEW: Success Overlay */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      className="absolute inset-0 bg-green-500/10 backdrop-blur-sm z-10 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="bg-white border border-green-500/20 rounded-xl p-8 text-center shadow-lg"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.div
                          className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        >
                          <CheckCircle2 className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-green-600 mb-2">
                          Message envoyé! 🎉
                        </h3>
                        <p className="text-gray-600">
                          Merci pour votre demande. Nous vous contacterons bientôt!
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <h2 className="text-2xl font-bold text-dark-charcoal mb-6">
                  Demander un devis
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Votre prénom"
                        disabled={isSubmitting || isSuccess}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom de famille *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Votre nom"
                        disabled={isSubmitting || isSuccess}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="votre.email@exemple.com"
                        disabled={isSubmitting || isSuccess}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (XXX) XXX-XXXX"
                        disabled={isSubmitting || isSuccess}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Entreprise/Organisation</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Nom de votre entreprise"
                      disabled={isSubmitting || isSuccess}
                    />
                  </div>

                  {/* Contact Reason Quick Selection */}
                  <div>
                    <Label className="block text-sm font-medium mb-2">
                      Type d'événement
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {contactReasons.map((reason) => (
                        <Button
                          key={reason}
                          type="button"
                          variant={formData.reason === reason ? "default" : "outline"}
                          size="sm"
                          onClick={() => handleReasonSelect(reason)}
                          className={cn(
                            "transition-all",
                            formData.reason === reason 
                              ? "bg-accent-green text-white" 
                              : "hover:border-accent-green"
                          )}
                          disabled={isSubmitting || isSuccess}
                        >
                          {reason}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Number of Guests */}
                    <div>
                      <Label htmlFor="guests">Nombre d'invités</Label>
                      <Select 
                        value={formData.guests} 
                        onValueChange={(value) => handleInputChange("guests", value)}
                        disabled={isSubmitting || isSuccess}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-20">1-20</SelectItem>
                          <SelectItem value="21-50">21-50</SelectItem>
                          <SelectItem value="51-100">51-100</SelectItem>
                          <SelectItem value="101-200">101-200</SelectItem>
                          <SelectItem value="201-500">201-500</SelectItem>
                          <SelectItem value="500+">500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* FIXED Date Picker */}
                    <div>
                      <Label htmlFor="eventDate">Date de l'événement</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={e => handleInputChange('eventDate', e.target.value)}
                        className="w-full"
                        disabled={isSubmitting || isSuccess}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Votre message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Décrivez votre vision, vos exigences particulières ou toute question que vous pourriez avoir..."
                      rows={6}
                      className="resize-none"
                      disabled={isSubmitting || isSuccess}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Minimum 20 caractères ({formData.message.length}/20)
                    </p>
                  </div>

                  {/* Newsletter */}
                  <div>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={(e) => handleInputChange("newsletter", e.target.checked)}
                        className="w-4 h-4 text-accent-green border-gray-300 rounded focus:ring-accent-green"
                        disabled={isSubmitting || isSuccess}
                      />
                      <span className="text-sm text-gray-700">
                        J'aimerais recevoir des conseils d'événements et des offres spéciales par email
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || formData.message.length < 20 || isSuccess}
                    className="w-full bg-accent-green hover:bg-green-600 text-white group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                        Envoi en cours...
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Envoyé avec succès!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer la demande
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-xs text-center text-gray-500">
                    <CheckCircle className="inline h-3 w-3 mr-1 text-green-500" />
                    Vos informations sont sécurisées et ne seront jamais partagées
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}