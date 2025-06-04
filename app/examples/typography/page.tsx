import { H1, H2, H3, H4, P, Small, PoppinsText } from "@/components/ui/typography"

export default function TypographyExamplePage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Typography Examples</h2>
        <div className="border p-6 rounded-lg space-y-6">
          {/* Open Sans Examples (Default) */}
          <div className="space-y-4">
            <div className="pb-2 border-b">
              <h3 className="text-lg font-medium text-gray-500">Open Sans (Main Font)</h3>
            </div>
            <H1>Heading 1 - Open Sans</H1>
            <H2>Heading 2 - Open Sans</H2>
            <H3>Heading 3 - Open Sans</H3>
            <H4>Heading 4 - Open Sans</H4>
            <P>
              This is a paragraph using Open Sans. Open Sans is a clean and modern sans-serif
              typeface designed by Steve Matteson. It&apos;s optimized for print, web, and
              mobile interfaces, and has excellent legibility characteristics.
            </P>
            <Small>
              This is smaller text using Open Sans, good for captions, footnotes, and other
              secondary information.
            </Small>
          </div>

          {/* Poppins Examples */}
          <div className="space-y-4 mt-8">
            <div className="pb-2 border-b">
              <h3 className="text-lg font-medium text-gray-500">Poppins (Secondary Font)</h3>
            </div>
            <PoppinsText className="text-h1 font-bold leading-tight block">
              Heading 1 - Poppins
            </PoppinsText>
            <PoppinsText className="text-h2 font-semibold leading-tight block">
              Heading 2 - Poppins
            </PoppinsText>
            <PoppinsText className="text-h3 font-semibold leading-tight block">
              Heading 3 - Poppins
            </PoppinsText>
            <PoppinsText className="text-h4 font-medium leading-tight block">
              Heading 4 - Poppins
            </PoppinsText>
            <PoppinsText className="text-body leading-normal block">
              This is a paragraph using Poppins. Poppins is a geometric sans-serif typeface
              developed by Indian Type Foundry and Jonny Pinhorn. It&apos;s clean, modern, and
              has a distinctive geometric style.
            </PoppinsText>
            <PoppinsText className="text-small leading-normal block">
              This is smaller text using Poppins, good for captions, footnotes, and other
              secondary information.
            </PoppinsText>
          </div>

          {/* Mixed Typography Examples */}
          <div className="space-y-4 mt-8">
            <div className="pb-2 border-b">
              <h3 className="text-lg font-medium text-gray-500">Mixed Typography Examples</h3>
            </div>
            <div className="space-y-4">
              <H2>Welcome to <PoppinsText className="text-primary-red">Voilà Vélo</PoppinsText></H2>
              <P>
                Our smoothie bike experience brings a <PoppinsText className="font-medium text-accent-green">fun and interactive</PoppinsText> element 
                to your events. Guests can pedal to power their own delicious smoothies!
              </P>
              <div className="bg-light-gray p-4 rounded-lg">
                <H4 className="text-dark-charcoal">Event Packages</H4>
                <P className="text-dark-charcoal mt-2">
                  Choose from our range of <PoppinsText className="font-medium text-secondary-yellow">customizable packages</PoppinsText> for 
                  corporate events, private parties, and festivals.
                </P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}