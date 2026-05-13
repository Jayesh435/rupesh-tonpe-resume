import { getServices } from "@/lib/data";
import { GlassCard } from "@/components/animated";

export const metadata = { title: "Services | Rupesh Tonpe" };

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10 sm:px-6">
      <h1 className="text-4xl font-semibold">Services</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service: any) => (
          <GlassCard key={service._id} className="space-y-4 p-6">
            <p className="text-sm uppercase text-zinc-400">{service.icon}</p>
            <h2 className="text-2xl font-semibold">{service.name}</h2>
            <p className="text-zinc-300">{service.description}</p>
            <p className="text-[#FF8C42]">Starting from {service.pricingFrom}</p>
            <a href="/contact" className="inline-flex rounded-full border border-white/20 px-4 py-2">{service.ctaText}</a>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
