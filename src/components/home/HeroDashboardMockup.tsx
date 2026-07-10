import Image from "next/image";

export function HeroDashboardMockup() {
  return (
    <div className="overflow-hidden rounded-2xl">
      <Image
        src="/images/hero/dashboard-hero.png"
        alt="Platform dashboard mockup showing analytics and service management UI"
          width={2500}
          height={2500}
        priority
        className="w-full h-auto block"
      />
    </div>
  );
}
