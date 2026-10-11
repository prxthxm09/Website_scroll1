import { LandingPageFrame, type LandingPageProps } from "./LandingPageFrame";
import { splitTypographyProps, usePageTypography, type PageTypographyProps } from "./pageTypography";
import { KAGE_TYPOGRAPHY } from "./pageRecipes";
export function KageLandingPage(props: LandingPageProps & PageTypographyProps) {
  const [type, frame] = splitTypographyProps(props);
  const customization = usePageTypography(KAGE_TYPOGRAPHY, type);
  return <LandingPageFrame {...frame} customization={customization} title="Kage — Where stillness reveals the unseen" sourceUrl={new URL("landing-pages/kage.html", document.baseURI).href} />;
}
