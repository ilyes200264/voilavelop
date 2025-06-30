# Task: Fix Dropdown Menu Transparency in Book Now Page

**Issue:**
The dropdown menus in the 'Event Details' section of the Book Now page had a transparent background, causing text from underlying elements to show through and making the dropdown options hard to read.

**Solution:**
- Updated the `SelectContent` component in `components/ui/select.tsx` to always use a solid white background (`bg-white`), ensuring the dropdown menu is never transparent.
- This guarantees the dropdown is readable and visually consistent, regardless of theme or CSS variable issues.

**Status:**
✅ Fixed and verified by user.

---

# Task: Update French Hero Tagline Translation

**Issue:**
The French hero section tagline used the phrase 'bonnes vibrations', which needed to be updated to the more modern 'bonnes vibes'.

**Solution:**
- Changed the tagline in `locales/fr/home.json` from 'BONNES VIBRATIONS, VÉLOS VERTS, GOÛT EXCELLENT.' to 'BONNES VIBES, VÉLOS VERTS, GOÛT EXCELLENT.'
- This ensures the French homepage uses the preferred wording in the hero section.

**Status:**
✅ Fixed and verified by user.

---

# Task: Footer 'Notre Blogue' Link Redirect

**Issue:**
The footer's About column needed the 'notre blogue' link to direct users to the Our Values section in the About Us page, but keep the familiar label.

**Solution:**
- The link text remains 'notre blogue' (using the existing translation key), but the link now points to '/a-propos#nos-valeurs'.
- This provides a familiar label while guiding users to the correct section.

**Status:**
✅ Fixed and verified by user.

---

# Task: Remove 'Our Partners' Link from Footer

**Issue:**
The About column in the footer included a link to 'our partners' that needed to be removed for clarity and simplicity.

**Solution:**
- Removed the 'our partners' link (href='/a-propos/#nos-partenaires') from the About column in the footer.
- The About column now only includes links to 'our mission' and 'notre blogue' (which points to Our Values).

**Status:**
✅ Fixed and verified by user.

---

# Task: Add Sticky Floating Social Media Button Group

**Issue:**
The site needed a modern, always-visible way for users to access social media links from any page.

**Solution:**
- Created a new `SocialFAB` component: a sticky floating action button group in the bottom right corner, visible on all pages.
- Includes Facebook, Instagram, Youtube, and Linkedin icons, each linking to their respective social media pages.
- The design is modern, round, visually appealing, and features hover effects.

**Status:**
✅ Fixed and verified by user.

---

# Task: Update Images for 'Pop Solo' and 'La petite Koki' Packages

**Issue:**
The images for the 'Pop Solo' and 'La petite Koki' packages needed to be refreshed and aligned for a more consistent and appealing presentation.

**Solution:**
- Changed the main section image of 'Pop Solo' to `/images/velo-smoothie-1.jpg` (from 'La petite Koki').
- Changed the target section image of 'Pop Solo' to `/images/velo-smoothie-2.jpg` (from 'La petite Koki').
- Updated the main section image of 'La petite Koki' to `/images/velo-smoothie-3.jpg` for variety.

**Status:**
✅ Fixed and verified by user. 