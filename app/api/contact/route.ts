//// // app/api/contact/route.ts
// import { NextRequest, NextResponse } from 'next/server'
// import { Resend } from 'resend'

// // Initialize Resend with your API key
// const resend = new Resend(process.env.RESEND_API_KEY)

// // Define expected request body structure
// interface ContactFormData {
//   firstName: string
//   lastName: string
//   email: string
//   phone?: string
//   company?: string
//   eventType?: string
//   eventDate?: string
//   guests?: string
//   message: string
//   reason?: string
// }

// export async function POST(request: NextRequest) {
//   try {
//     // Parse request body
//     const body = await request.json() as ContactFormData
//     const { firstName, lastName, email, phone, company, eventType, eventDate, guests, message, reason } = body
    
//     // Validate required fields
//     if (!firstName || !lastName || !email || !message) {
//       return NextResponse.json(
//         { error: 'Prénom, nom, email et message sont requis' },
//         { status: 400 }
//       )
//     }
    
//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: 'Format d\'email invalide' },
//         { status: 400 }
//       )
//     }

//     // Check if RESEND_API_KEY exists
//     if (!process.env.RESEND_API_KEY) {
//       console.error('RESEND_API_KEY is not set')
//       return NextResponse.json(
//         { error: 'Service email non configuré' },
//         { status: 500 }
//       )
//     }

//     // Format event details
//     const formatEventDetails = () => {
//       const details = []
//       if (eventType) details.push(`Type d'événement: ${eventType}`)
//       if (eventDate) details.push(`Date: ${eventDate}`)
//       if (guests) details.push(`Nombre d'invités: ${guests}`)
//       if (company) details.push(`Entreprise/Organisation: ${company}`)
//       if (phone) details.push(`Téléphone: ${phone}`)
//       return details.length > 0 ? details.join('<br>') : 'Aucun détail fourni'
//     }

//     // Send email using Resend
//     const { data, error } = await resend.emails.send({
//       from: 'Voilà Vélo Contact <contact@voilavelo.ca>', // Use your verified domain
//       to: ['voilavelo25@gmail.com'], // Array format as per docs
//       subject: `🚴‍♀️ Nouvelle demande de devis - ${firstName} ${lastName}`,
//       replyTo: email,
//       html: `
//         <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
//           <div style="background: linear-gradient(135deg, #10B981, #059669); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
//             <h1 style="color: white; margin: 0; font-size: 28px;">🚴‍♀️ Voilà Vélo Fruité</h1>
//             <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Nouvelle demande de devis</p>
//           </div>
          
//           <div style="background: #f9fafb; padding: 30px;">
//             <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #10B981; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
//               <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px;">👤 Informations du client</h2>
              
//               <div style="margin-bottom: 15px;">
//                 <strong style="color: #374151;">Nom complet:</strong>
//                 <span style="color: #1f2937; margin-left: 8px;">${firstName} ${lastName}</span>
//               </div>
//               <div style="margin-bottom: 15px;">
//                 <strong style="color: #374151;">Email:</strong>
//                 <a href="mailto:${email}" style="color: #10B981; text-decoration: none; margin-left: 8px;">${email}</a>
//               </div>
//               ${phone ? `
//               <div style="margin-bottom: 15px;">
//                 <strong style="color: #374151;">Téléphone:</strong>
//                 <a href="tel:${phone}" style="color: #10B981; text-decoration: none; margin-left: 8px;">${phone}</a>
//               </div>
//               ` : ''}
//               ${company ? `
//               <div style="margin-bottom: 15px;">
//                 <strong style="color: #374151;">Entreprise:</strong>
//                 <span style="color: #1f2937; margin-left: 8px;">${company}</span>
//               </div>
//               ` : ''}
//               ${reason ? `
//               <div style="margin-bottom: 0;">
//                 <strong style="color: #374151;">Type d'événement:</strong>
//                 <span style="color: #1f2937; margin-left: 8px;">${reason}</span>
//               </div>
//               ` : ''}
//             </div>

//             <div style="background: white; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #f59e0b; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
//               <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 20px;">🎉 Détails de l'événement</h2>
//               <div style="color: #1f2937; line-height: 1.6;">${formatEventDetails()}</div>
//             </div>

//             <div style="background: white; padding: 25px; border-radius: 12px; border-left: 4px solid #8b5cf6; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
//               <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 20px;">💬 Message</h2>
//               <div style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</div>
//             </div>
//           </div>
          
//           <div style="background: #e5e7eb; padding: 20px; text-align: center; border-radius: 0 0 12px 12px;">
//             <p style="color: #6b7280; margin: 0; font-size: 14px;">
//               📧 Email envoyé automatiquement depuis <a href="https://voilavelo.ca" style="color: #10B981; text-decoration: none;">voilavelo.ca</a>
//             </p>
//             <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">
//               ${new Date().toLocaleString('fr-CA', { timeZone: 'America/Toronto' })}
//             </p>
//           </div>
//         </div>
//       `,
//       text: `
// Nouvelle demande de devis - Voilà Vélo Fruité

// INFORMATIONS DU CLIENT:
// Nom: ${firstName} ${lastName}
// Email: ${email}
// ${phone ? `Téléphone: ${phone}` : ''}
// ${company ? `Entreprise: ${company}` : ''}
// ${reason ? `Type d'événement: ${reason}` : ''}

// DÉTAILS DE L'ÉVÉNEMENT:
// ${formatEventDetails().replace(/<br>/g, '\n')}

// MESSAGE:
// ${message}

// ---
// Répondez à cet email pour répondre directement à ${firstName}
// Envoyé depuis voilavelo.ca le ${new Date().toLocaleString('fr-CA', { timeZone: 'America/Toronto' })}
//       `,
//     })

//     if (error) {
//       console.error('Resend API Error:', error)
//       return NextResponse.json(
//         { error: 'Échec de l\'envoi de l\'email', details: error.message },
//         { status: 500 }
//       )
//     }

//     console.log('Email sent successfully:', data)
    
//     return NextResponse.json({ 
//       success: true, 
//       message: 'Email envoyé avec succès',
//       id: data?.id
//     })
    
//   } catch (error) {
//     console.error('Contact API error:', error)
//     return NextResponse.json(
//       { error: 'Erreur interne du serveur' },
//       { status: 500 }
//     )
//   }
// }