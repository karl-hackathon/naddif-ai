import Pricing from "@/components/homepage/pricing";
import PageWrapper from "@/components/wrapper/page-wrapper";

export default async function PricingPage() {
    return (
        <PageWrapper>
            <div className="mt-5">
                <Pricing />
            </div>
        </PageWrapper>
    );
}
